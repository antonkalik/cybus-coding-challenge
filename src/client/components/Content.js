import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore, actionUpdateContainer } from '../redux/actions';
import { connect } from 'react-redux';
import { debounce, filterObj } from '../utilities';
import start from '../res/actions/start.svg';
import stop from '../res/actions/stop.svg';
import restart from '../res/actions/restart.svg';
import remove from '../res/actions/remove.svg';
import notFound from '../res/not_found.svg';

function Content({ store, currentTab, updateStore, updateContainer }) {
  const actions = { remove, restart, stop, start };
  const headers = {
    images: ['Repository', 'ID', 'Tag', 'Created', 'Size'],
    containers: ['Container ID', 'Image', 'Created', 'Status', 'Names', 'Actions'],
  };

  const updateStatusWithDebounce = (container, index, beginStatus, finalStatus) => {
    debounce(() => {
      if (finalStatus) {
        updateContainer({ ...container, status: finalStatus }, index);
      } else {
        updateStore({
          containers: store.containers.filter(it => it.id !== container.id),
        });
      }
    }, 2000);
    updateContainer({ ...container, status: beginStatus }, index);
  };

  const actionContainer = (container, key, index) => {
    const actions = {
      remove: () => updateStatusWithDebounce(container, index, 'removing...'),
      restart: () => updateStatusWithDebounce(container, index, 'restarting...', 'up'),
      stop: () => updateStatusWithDebounce(container, index, 'trying to stop...', 'stop'),
      start: () => updateStatusWithDebounce(container, index, 'starting...', 'up'),
    };
    actions[key]();
  };

  return (
    <div className="content">
      <div className="table">
        <div className="header">
          {headers[currentTab].map(it => {
            return <div key={it}>{it}</div>;
          })}
        </div>
        {store[currentTab].length > 0 ? (
          store[currentTab].map((item, index) => {
            return (
              <div className="row" key={item.id}>
                {Object.keys(item).map(key => (
                  <div
                    className={`cell${item.status === 'removing...' ? ' removing' : ''}`}
                    key={key}
                  >
                    {item[key]}
                  </div>
                ))}
                {currentTab === 'containers' && (
                  <div className="actions">
                    {Object.keys(filterObj(actions, item.status === 'up' ? 'start' : 'stop')).map(
                      key => {
                        return (
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
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            );
          })
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
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
    updateContainer: bindActionCreators(actionUpdateContainer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
