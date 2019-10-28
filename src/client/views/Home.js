import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionUpdateStore } from '../redux/actions';
import { Content, Switcher } from '../components';
import * as queryString from 'query-string';
import FakeDB from '../db';
import { searching } from '../utilities';

export function Home({ updateStore, location }) {
  const currentTab = location.pathname.replace(/^\/+/, '');

  useEffect(() => {
    updateStore({
      currentTab,
    });
  }, [currentTab]);

  useEffect(() => {
    const search = location.search ? queryString.parse(location.search).q : '';

    FakeDB.findByKey(currentTab).then(({ data }) => {
      updateStore({
        [currentTab]: search ? searching(data, search) : data,
        search,
      });
    });
  }, []);

  return (
    <div className="home">
      <Switcher />
      <Content currentTab={currentTab} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
