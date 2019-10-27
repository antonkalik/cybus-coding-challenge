import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionUpdateStore } from '../redux/actions';
import { Content, Switcher } from '../components';

export function Home({ updateStore, location }) {
  const currentTab = location.pathname.replace(/^\/+/, '');
  useEffect(() => {
    updateStore({
      currentTab,
    });
  }, [updateStore, currentTab]);

  return (
    <div className="home">
      <Switcher items={['images', 'containers']} />
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
