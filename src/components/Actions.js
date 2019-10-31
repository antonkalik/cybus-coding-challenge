import React from 'react';
import { getActionKeys } from '../utilities';

export default function Actions({ item, index, updateStore }) {
  const path = 'res/actions/';
  const actions = ['remove', 'restart', 'stop', 'start'].reduce((a, b) => {
    a[b] = `${path + b}.svg`;
    return a;
  }, {});

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
