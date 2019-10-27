import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';
import { Switcher } from '../components';

function Content() {
  return (
    <div className="content">
      <Switcher items={['images', 'containers']} />
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
)(Content);
