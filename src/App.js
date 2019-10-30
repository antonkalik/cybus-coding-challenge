import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Home, NotFound, Login } from './views';
import { Navigation, Footer, Modal } from './components';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from './redux/actions';
import { connect } from 'react-redux';
import { LocalStorage } from './storage';
import { PrivateRoute } from './hocs';

function App({ updateStore, isLoggedIn, modal }) {
  useEffect(() => {
    updateStore({ isLoggedIn: LocalStorage.getItem('isLoggedIn') });
  }, [updateStore]);

  return (
    <Router>
      {modal && <Modal />}
      <Navigation />
      <div className="view">
        <Switch>
          <Redirect exact from="/" to={`/${isLoggedIn ? 'images' : 'login'}`} />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/images" /> : <Login />)}
          />
          <PrivateRoute path="/images" component={Home} />
          <PrivateRoute path="/containers" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

const mapStateToProps = ({ isLoggedIn, modal }) => {
  return { isLoggedIn, modal };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
