import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { withRouter } from 'react-router';
import { LocalStorage } from '../storage';
import FakeDB from '../db';
import { Button, Input } from '../components';
import { debounce } from '../utilities';

function Login({ updateStore, store, history }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // handleKeyPress = e => {
  //   if (e.key === 'Enter') {
  //     this.login();
  //   }
  // }
  //
  // useEffect(() => {
  //   document.addEventListener('keypress', handleKeyPress);
  //   return () => {
  //     document.removeEventListener('keypress', handleKeyPress)
  //   }
  // }, []);

  const onClick = e => {
    e.preventDefault();
    setLoading(true);
    if (store.userName && store.userName.length > 3) {
      debounce(async () => {
        LocalStorage.setItem('isLoggedIn', true);
        await FakeDB.save('userName', store.userName);
        setLoading(false);
        updateStore({ isLoggedIn: true });
        history.push('/images');
      });
    } else {
      debounce(() => {
        setErrorMessage("Field can't to be empty and length more then 3 letter.");
        setLoading(false);
      });
    }
  };

  const onChange = ({ target }) => {
    setErrorMessage('');
    updateStore({ userName: target.value });
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
          onChange={onChange}
        />
        <Button loading={loading} onClick={onClick} text="Login" />
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
