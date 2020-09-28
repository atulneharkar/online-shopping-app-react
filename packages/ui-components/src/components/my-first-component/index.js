import React from 'react';
import './index.scss';

export const MyFirstComponent = ({text}) => {
  return (
    <div className="my-fist-component">
      {text}
    </div>
  );
}

export default MyFirstComponent;