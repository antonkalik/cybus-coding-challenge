import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Home, About, NotFound, Login } from './views';
import { Navigation, Footer } from './components';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from './redux/actions';
import { connect } from 'react-redux';
import { LocalStorage } from './storage';
import { PrivateRoute } from './hocs';

function App({ updateStore, store }) {
  useEffect(() => {
    updateStore({
      isLoggedIn: LocalStorage.getItem('isLoggedIn'),
      userName: LocalStorage.getItem('userName') || '',
    });
  }, [updateStore]);

  return (
    <Router>
      <Navigation />
      <div className="view">
        <Switch>
          <PrivateRoute exact isLoggedIn={store.isLoggedIn} path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => (store.isLoggedIn ? <Redirect to="/" /> : <Login />)}
          />
          <Route exact path="/about" component={About} />
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
