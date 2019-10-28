import React from 'react';

export default function Columns({ items }) {
  return (
    <div className="columns">
      {items.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
