import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Home, About, NotFound, Login } from './views';
import { Navigation, Footer } from './components';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from './redux/actions';
import { connect } from 'react-redux';
import { LocalStorage } from './storage';
import { PrivateRoute } from './hocs';

function App({ updateStore }) {
  const isLoggedIn = LocalStorage.getItem('isLoggedIn');
  const userName = LocalStorage.getItem('userName') || '';
  useEffect(() => {
    updateStore({
      isLoggedIn,
      userName,
    });
  }, [updateStore, isLoggedIn, userName]);

  return (
    <Router>
      <Navigation />
      <div className="view">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/images" exact component={Home} />
          <PrivateRoute path="/containers" exact component={Home} />
          <Route path="/login" render={() => (isLoggedIn ? <Redirect to="/" /> : <Login />)} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
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
)(App);
