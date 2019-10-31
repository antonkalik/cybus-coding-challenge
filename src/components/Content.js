import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore, actionOnSort } from '../redux/actions';
import { connect } from 'react-redux';
import { capitalize } from '../utilities';
import { Actions } from '.';

function Content({ store, currentTab, updateStore, onSort }) {
  const tabData = store[currentTab];
  const isContainers = currentTab === 'containers';

  return (
    <div className="content">
      <div className="table">
        <div className="header">
          {store.headers[currentTab].map(it => (
            <div key={it}>
              {it}
              <span>
                <img
                  onClick={() => onSort(it, currentTab)}
                  width="12px"
                  src="res/sort.svg"
                  alt="not found"
                />
              </span>
            </div>
          ))}
          {isContainers && <div>Actions</div>}
        </div>
        {tabData.length > 0 ? (
          tabData.map((item, index) => (
            <div className={`row${item.status === 'removing...' ? ' removing' : ''}`} key={item.id}>
              {Object.keys(item).map(key => (
                <div key={key}>{item[key]}</div>
              ))}
              {isContainers && <Actions item={item} index={index} updateStore={updateStore} />}
            </div>
          ))
        ) : (
          <div className="not-found-results">
            <img src="res/not_found.svg" alt="not found" />
            <p>{capitalize(currentTab)} not found.</p>
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
    onSort: bindActionCreators(actionOnSort, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
