import React from 'react';
import { Images, Containers } from '.';

function Content({ currentTab }) {
  const tabContent = {
    images: () => <Images />,
    containers: () => <Containers />,
  };

  return <div className="content">{tabContent[currentTab]()}</div>;
}

export default Content;
