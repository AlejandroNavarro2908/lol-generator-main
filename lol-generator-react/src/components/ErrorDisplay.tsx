import React from 'react';

interface ErrorDisplayProps {
  show: boolean;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div id="error">
      <p>Something went wrong with the connection, it's no joke :(</p>
      <img src="/img/sad-pikachu.gif" alt="no joke :(" />
    </div>
  );
};