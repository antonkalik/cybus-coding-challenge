import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateContainer, actionRemoveContainer } from '../redux/actions';
import { connect } from 'react-redux';
import { debounce, filterObj } from '../utilities';
import start from '../res/actions/start.svg';
import stop from '../res/actions/stop.svg';
import restart from '../res/actions/restart.svg';
import remove from '../res/actions/remove.svg';
import notFound from '../res/not_found.svg';

function Content({ store, currentTab, updateContainer, removeContainer }) {
  const actions = { remove, restart, stop, start };
  const headers = {
    images: ['Repository', 'ID', 'Tag', 'Created', 'Size'],
    containers: ['Container ID', 'Image', 'Created', 'Status', 'Names', 'Actions'],
  };

  const actionContainer = (container, key, index) => {
    const actions = {
      remove: () => {
        updateContainer(index, 'removing...');
        debounce(() => removeContainer(index));
      },
      restart: () => {
        updateContainer(index, 'restarting...');
        debounce(() => updateContainer(index, 'up'));
      },
      stop: () => {
        updateContainer(index, 'stopping...');
        debounce(() => updateContainer(index, 'stop'));
      },
      start: () => {
        updateContainer(index, 'running...');
        debounce(() => updateContainer(index, 'up'));
      },
    };
    actions[key]();
  };

  const getActionKeys = (actions, status) => {
    if (status === 'dead') {
      return ['remove'];
    }
    const keysForRemove = status === 'up' ? 'start' : 'stop';
    const getObj = filterObj(actions, keysForRemove);
    return Object.keys(getObj);
  };

  return (
    <div className="content">
      <div className="table">
        <div className="header">
          {headers[currentTab].map(it => (
            <div key={it}>{it}</div>
          ))}
        </div>
        {store[currentTab].length > 0 ? (
          store[currentTab].map((item, index) => (
            <div className={`row${item.status === 'removing...' ? ' removing' : ''}`} key={item.id}>
              {Object.keys(item).map(key => (
                <div key={key}>{item[key]}</div>
              ))}
              {currentTab === 'containers' && (
                <div className="actions">
                  {getActionKeys(actions, item.status).map(key => (
                    <div className="action" key={key}>
                      <div className="tooltip">{key}</div>
                      <img
                        onClick={() => {
                          actionContainer(item, key, index);
                        }}
                        src={actions[key]}
                        alt={key}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="not-found">
            <img src={notFound} alt="not found" />
            <p>{currentTab} not found </p>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return { store };
};

const mapDispatchToProps = dispatch => {
  return {
    updateContainer: bindActionCreators(actionUpdateContainer, dispatch),
    removeContainer: bindActionCreators(actionRemoveContainer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
