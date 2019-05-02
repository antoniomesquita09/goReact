import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  componentDidMount() {
    const { repositories } = this.state;
    const getStorage = JSON.parse(localStorage.getItem('myRepositories'));

    this.setState({ repositories: [...repositories, ...getStorage] });
  }

  componentDidUpdate() {
    const { repositories } = this.state;

    localStorage.setItem('myRepositories', JSON.stringify(repositories));
  }

  handleAddRepository = async (e) => {
    const { repositories, repositoryInput } = this.state;

    this.setState({ loading: true });

    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemoveRepo = (id) => {
    const { repositories } = this.state;

    this.setState({ repositories: repositories.filter(repo => repo.id !== id) });
  };

  handleUpdateRepo = async (id) => {
    const { repositories } = this.state;

    const repository = repositories.find(repo => repo.id === id);
    console.log(repository);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            placeholder="usuario/repositorio"
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>
        <CompareList
          removeRepo={this.handleRemoveRepo}
          updateRepo={this.handleUpdateRepo}
          repositories={repositories}
        />
      </Container>
    );
  }
}

export default Main;
