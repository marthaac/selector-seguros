import React from 'react';
import './Loading.css';

const Loading = (): JSX.Element => (
  <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loading;
