import React from 'react';
import { Button } from './index';
import { bindActionCreators } from 'redux';
import { actionRemoveContainer, actionUpdateContainer, actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';
import { debounce } from '../utilities';

function Modal({ updateStore, shareData: { key, id }, updateContainer, removeContainer }) {
  const onClick = e => {
    if (e.target.name === 'ok') {
      actionContainer(key, id);
    }
    updateStore({ modal: false });
  };

  const delayedAction = (beginStatus, finalStatus) => id => {
    updateContainer(id, beginStatus);
    if (!finalStatus) {
      debounce(() => removeContainer(id));
    } else {
      debounce(() => updateContainer(id, finalStatus));
    }
  };

  const actionContainer = (key, id) => {
    const actions = {
      remove: delayedAction('removing...'),
      restart: delayedAction('restarting...', 'up'),
      stop: delayedAction('stopping...', 'stop'),
      start: delayedAction('running...', 'up'),
    };
    actions[key](id);
  };

  return (
    <div onClick={onClick} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>
            Are you sure you want to {key}: {id}?
          </h1>
        </div>
        <div className="modal-footer">
          <Button text="Ok" name="ok" onClick={onClick} />
          <Button text="Cancel" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ shareData }) => {
  return { shareData };
};

const mapDispatchToProps = dispatch => {
  return {
    updateContainer: bindActionCreators(actionUpdateContainer, dispatch),
    removeContainer: bindActionCreators(actionRemoveContainer, dispatch),
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
