import React from 'react';
import { filterObj } from '../utilities';
import start from '../res/actions/start.svg';
import stop from '../res/actions/stop.svg';
import restart from '../res/actions/restart.svg';
import remove from '../res/actions/remove.svg';

export default function Actions({ item, index, updateStore }) {
  const actions = { remove, restart, stop, start };
  const getActionKeys = (actions, status) => {
    if (status === 'dead') {
      return ['remove'];
    }
    const keysForRemove = status === 'up' ? 'start' : 'stop';
    const getObj = filterObj(actions, keysForRemove);
    return Object.keys(getObj);
  };
  return (
    <div className="actions">
      {getActionKeys(actions, item.status).map(key => (
        <div className="action" key={key}>
          <div className="tooltip">{key}</div>
          <img
            onClick={() => {
              updateStore({ shareData: { key, index, id: item.id }, modal: true });
            }}
            src={actions[key]}
            alt={key}
          />
        </div>
      ))}
    </div>
  );
}
