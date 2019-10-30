import React from 'react';
import notFound from '../res/not_found.svg';

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <img src={notFound} alt="not found" />
        <p>Not Found page</p>
      </div>
    </div>
  );
}
