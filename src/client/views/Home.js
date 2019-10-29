import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionUpdateStore } from '../redux/actions';
import { Content, Switcher } from '../components';
import * as queryString from 'query-string';
import { searching } from '../utilities';
import { LocalStorage } from '../storage';

export function Home({ updateStore, store, location }) {
  const currentTab = location.pathname.replace(/^\/+/, '');
  const userName = LocalStorage.getItem('userName');

  useEffect(() => {
    updateStore({
      currentTab,
    });
  }, [currentTab]);

  useEffect(() => {
    const search = location.search ? queryString.parse(location.search).q : '';
    const data = store[currentTab];
    const updatedData = search ? searching(data, search) : data;

    updateStore({
      [currentTab]: updatedData,
      search,
      userName,
    });
  }, []);

  return (
    <div className="home">
      <Switcher />
      <Content currentTab={currentTab} />
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
)(Home);
