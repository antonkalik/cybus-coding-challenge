import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { withRouter } from 'react-router';
import { LocalStorage } from '../storage';
import { Button, Input } from '../components';

function Login({ history, updateStore, store }) {
  const [errorMessage, setErrorMessage] = useState('');

  const onClick = () => {
    if (store.userName && store.userName.length > 3) {
      LocalStorage.setItem('isLoggedIn', true);
      LocalStorage.setItem('userName', store.userName);
      updateStore({ isLoggedIn: true });
      history.push('/');
    } else {
      setErrorMessage("Field can't to be empty and length more then 3 letter.");
    }
  };
  return (
    <div className="login">
      <div>
        <h1>Hello, please, enter your username and press login.</h1>
        <Input
          error={errorMessage}
          pattern="[A-Za-z0-9@-_.]*"
          placeholder="Your username"
          value={store.userName}
          onChange={e => {
            updateStore({ userName: e.target.value });
          }}
        />
        <Button onClick={onClick} text="Login" />
      </div>
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
