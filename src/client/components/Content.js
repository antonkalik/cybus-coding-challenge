import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';
import { filterObj } from '../utilities';
import start from '../res/actions/start.svg';
import stop from '../res/actions/stop.svg';
import restart from '../res/actions/restart.svg';
import remove from '../res/actions/remove.svg';

function Content({ store, currentTab }) {
  const actions = { remove, restart, stop, start };
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
        {store[currentTab].map(container => {
          return (
            <div className="row" key={container.id}>
              {Object.keys(container).map(key => (
                <div key={key}>{container[key]}</div>
              ))}
              {currentTab === 'containers' && (
                <div className="actions">
                  {Object.keys(
                    filterObj(actions, container.status === 'up' ? 'stop' : 'start')
                  ).map(key => {
                    return <img key={key} src={actions[key]} alt={key} />;
                  })}
                </div>
              )}
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
