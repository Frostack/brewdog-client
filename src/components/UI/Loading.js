import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="d-flex justify-content-center loading">
      <Spinner animation="grow" />
    </div>
  );
}

export default Loading;
