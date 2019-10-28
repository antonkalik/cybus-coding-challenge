import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionUpdateStore } from '../redux/actions';
import { Content, Switcher } from '../components';
import FakeDB from '../storage';

export function Home({ updateStore, location, history }) {
  useEffect(() => {
    const userName = FakeDB.findByKey('userName');
    if (!userName) {
      FakeDB.drop();
      history.push('/');
    }
  }, [history]);

  const currentTab = location.pathname.replace(/^\/+/, '');
  useEffect(() => {
    updateStore({
      currentTab,
    });
  }, [updateStore, currentTab]);

  const items = ['images', 'containers'];

  return (
    <div className="home">
      <Switcher items={items} />
      <Content />
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
