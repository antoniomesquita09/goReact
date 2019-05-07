import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Side } from './styles';

class SideBar extends Component {
  state = {
    loading: false,
  };

  render() {
    const { user: users } = this.props;
    return (
      <Side>
        {users.data.map(user => (
          <div key={user.id}>
            <img src={user.avatar} alt="avatar" />
            <h1>{user.user}</h1>
            <p>{user.id}</p>
          </div>
        ))}
      </Side>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User,
});

export default connect(mapStateToProps)(SideBar);
