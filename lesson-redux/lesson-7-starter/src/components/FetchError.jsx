import React from 'react';

const FetchError = ({message, onRetry}) => {
  return (
    <div>
      <p>Fetch Data Error: {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default FetchError;