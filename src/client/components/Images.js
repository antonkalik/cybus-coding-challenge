import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';
import { Columns } from '.';

function Images({ store }) {
  return (
    <div className="images">
      <Columns items={['Repository', 'ID', 'Tag', 'Created', 'Size']} />
      {store.images.map(image => {
        return (
          <div className="image" key={image.id}>
            {Object.keys(image).map(key => {
              return <div key={key}>{image[key]}</div>;
            })}
          </div>
        );
      })}
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
)(Images);
