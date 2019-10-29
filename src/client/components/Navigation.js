import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../components';
import { LocalStorage } from '../storage';
import { bindActionCreators } from 'redux';
import { actionResetStore } from '../redux/actions';
import { connect } from 'react-redux';
import logotype from '../res/logotype.svg';
import logoutImage from '../res/logout.svg';

function Navigation({ store, resetStore, history }) {
  const isLoggedIn = store.isLoggedIn && LocalStorage.getItem('isLoggedIn');

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
        onClick={() => {
          history.push('/');
        }}
        src={logotype}
        alt="logo"
      />
      {isLoggedIn ? (
        <div className="user">
          <p>{store.userName}</p>
          <img onClick={logout} className="logout" src={logoutImage} />
        </div>
      ) : (
        <Button onClick={login} text="Login" />
      )}
    </div>
  );
}

const mapStateToProps = store => {
  return { store };
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
