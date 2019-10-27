import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '../components';
import { LocalStorage } from '../storage';
import { bindActionCreators } from 'redux';
import { actionResetStore } from '../redux/actions';
import { connect } from 'react-redux';

function Navigation({ store, resetStore, history }) {
  const isLoggedIn = store.isLoggedIn && LocalStorage.getItem('isLoggedIn');

  const logout = e => {
    e.preventDefault();
    LocalStorage.reset();
    resetStore();
    history.push('/');
  };

  return (
    <div className="navigation">
      {isLoggedIn && (
        <NavLink exact to="/">
          Dashboard
        </NavLink>
      )}
      <NavLink exact to="/about">
        About
      </NavLink>
      {isLoggedIn ? (
        <Button onClick={logout} text="Logout" />
      ) : (
        <NavLink exact to="/login">
          Login
        </NavLink>
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
