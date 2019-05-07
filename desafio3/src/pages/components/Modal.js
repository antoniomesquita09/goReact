import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from '../../store/ducks/user';

// import { Container } from './styles';

class Modal extends Component {
  state = {
    userInput: '',
  };

  handleSubmit = async (event) => {
    const { addUserRequest } = this.props;
    const { userInput } = this.state;

    event.preventDefault();

    addUserRequest(userInput);
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={e => this.setState({ userInput: e.target.value })}
          value={userInput}
          placeholder="Usuario no Github"
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
