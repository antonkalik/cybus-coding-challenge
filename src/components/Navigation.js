import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from './index';
import { LocalStorage } from '../storage';
import { bindActionCreators } from 'redux';
import { actionResetStore } from '../redux/actions';
import { connect } from 'react-redux';

function Navigation({ isLoggedIn, userName, resetStore, history }) {
  const logout = () => {
    resetStore();
    LocalStorage.reset();
    history.push('/login');
  };

  const login = e => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <div className="navigation">
      <img
        className="logotype"
        onClick={() => {
          history.push('/');
        }}
        src="res/logotype.svg"
        alt="logo"
      />
      {isLoggedIn ? (
        <div className="user">
          <p>{userName}</p>
          <img onClick={logout} className="logout" src="res/logout.svg" />
        </div>
      ) : (
        <Button onClick={login} text="Login" />
      )}
    </div>
  );
}

const mapStateToProps = ({ userName, isLoggedIn }) => {
  return { userName, isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    resetStore: bindActionCreators(actionResetStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
