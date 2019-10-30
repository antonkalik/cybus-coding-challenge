import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';
import { Actions } from './index';
import notFound from '../res/not_found.svg';
const headers = {
  images: ['Repository', 'ID', 'Tag', 'Created', 'Size'],
  containers: ['Container ID', 'Image', 'Created', 'Status', 'Names', 'Actions'],
};

function Content({ store, currentTab, updateStore }) {
  console.log({ store })
  const tabData = store[currentTab];

  return (
    <div className="content">
      <div className="table">
        <div className="header">
          {headers[currentTab].map(it => (
            <div key={it}>{it}</div>
          ))}
        </div>
        {tabData.length > 0 ? (
          tabData.map((item, index) => (
            <div className={`row${item.status === 'removing...' ? ' removing' : ''}`} key={item.id}>
              {Object.keys(item).map(key => (
                <div key={key}>{item[key]}</div>
              ))}
              {currentTab === 'containers' && (
                <Actions item={item} index={index} updateStore={updateStore} />
              )}
            </div>
          ))
        ) : (
          <div className="not-found-results">
            <img src={notFound} alt="not found" />
            <p>{currentTab} not found.</p>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
