import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { actionUpdateStore, actionUpdateTab } from '../redux/actions';
import { connect } from 'react-redux';
import { Input, Button } from '.';
import { searching } from '../utilities';

function Switcher({ store, updateStore, updateTab, history }) {
  const chooseActive = async item => {
    if (item !== store.currentTab) {
      updateTab({
        currentTab: item,
      });
      history.push(`/${item}`);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = store[store.currentTab];
    if (store.search !== '') {
      history.push({
        pathname: '/' + store.currentTab,
        search: '?q=' + store.search,
      });

      updateStore({
        [store.currentTab]: searching(data, store.search),
      });
    } else {
      updateStore({
        [store.currentTab]: data,
      });
    }
  };

  return (
    <div className="switcher">
      {['images', 'containers'].map(item => {
        return (
          <div
            className={`tab${store.currentTab === item ? ' active' : ''}`}
            onClick={() => chooseActive(item)}
            key={item}
          >
            All {item}
          </div>
        );
      })}
      <div className="search-tab">
        <Input
          placeholder="search..."
          onChange={({ target }) => {
            updateStore({
              search: target.value,
            });
          }}
          value={store.search}
        />
        <Button onClick={handleSubmit} text="Find" />
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
    updateTab: bindActionCreators(actionUpdateTab, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Switcher));
