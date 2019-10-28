import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';

function Content({ store, currentTab }) {
  const headers = {
    images: ['Repository', 'ID', 'Tag', 'Created', 'Size'],
    containers: ['Container ID', 'Image', 'Created', 'Status', 'Names', 'Actions'],
  };

  return (
    <div className="content">
      <div className="table">
        <div className="header">
          {headers[currentTab].map(it => {
            return <div key={it}>{it}</div>;
          })}
        </div>
        {store[currentTab].map(it => {
          return (
            <div className="row" key={it.id}>
              {Object.keys(it).map(key => {
                return <div key={key}>{it[key]}</div>;
              })}
              {currentTab === 'containers' && <div>actions</div>}
            </div>
          );
        })}
      </div>
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
