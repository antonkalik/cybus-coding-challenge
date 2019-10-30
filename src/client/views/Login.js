import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { withRouter } from 'react-router';
import { LocalStorage } from '../storage';
import { Button, Input } from '../components';
import { debounce } from '../utilities';

function Login({ updateStore, userName, history }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  });

  const onClick = () => {
    setLoading(true);
    if (userName && userName.length > 3) {
      debounce(async () => {
        LocalStorage.setItem('isLoggedIn', true);
        LocalStorage.setItem('userName', userName);
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
          placeholder="Your username"
          value={userName}
          onChange={onChange}
        />
        <Button loading={loading} onClick={onClick} text="Login" />
      </div>
    </div>
  );
}

const mapStateToProps = ({ userName }) => {
  return { userName };
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
