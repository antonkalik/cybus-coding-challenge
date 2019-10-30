import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { actionUpdateStore, actionUpdateTab } from '../redux/actions';
import { connect } from 'react-redux';
import { Input, Button } from '.';
import { searching } from '../utilities';

function Switcher({ search, currentTab, data, updateStore, updateTab, history }) {
  const chooseActive = item => {
    if (item !== currentTab) {
      updateTab(item);
      history.push(`/${item}`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search !== '') {
      history.push({
        pathname: '/' + currentTab,
        search: '?q=' + search,
      });

      // search logic
      updateStore({
        [currentTab]: searching(data, search),
      });
    } else {
      updateTab(currentTab);
      history.push(`/${currentTab}`);
    }
  };

  return (
    <div className="switcher">
      {['images', 'containers'].map(item => (
        <div
          className={`tab${currentTab === item ? ' active' : ''}`}
          onClick={() => chooseActive(item)}
          key={item}
        >
          All {item}
        </div>
      ))}
      <div className="search-tab">
        <Input
          placeholder="search..."
          onChange={({ target }) => {
            updateStore({
              search: target.value,
            });
          }}
          value={search}
        />
        <Button onClick={handleSubmit} text="Find" />
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentTab, search, ...rest }) => {
  return { currentTab, search, data: rest[currentTab] };
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
