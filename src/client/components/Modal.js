import React from 'react';
import { Button } from '.';

export default function Modal() {
  return (
    <div className="modal">
      <div className="modal-header">Are you sure?</div>
      <div className="modal-footer">
        <Button text="Ok" />
        <Button text="Cancel" />{' '}
      </div>
    </div>
  );
}
