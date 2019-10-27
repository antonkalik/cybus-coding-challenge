import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { withRouter } from 'react-router';
import { LocalStorage } from '../storage';
import { Button, Input } from '../components';

function Login({ history, updateStore, store }) {
  const onClick = () => {
    LocalStorage.setItem('isLoggedIn', true);
    LocalStorage.setItem('userName', store.userName);
    updateStore({ isLoggedIn: true });
    history.push('/');
  };
  return (
    <div className="login">
      <h1>Hello, please, enter your username and press login.</h1>
      <Input
        value={store.userName}
        onChange={e => {
          updateStore({ userName: e.target.value });
        }}
      />
      <Button onClick={onClick} text="Login" />
    </div>
  );
}

const mapStateToProps = store => {
  return { store };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
