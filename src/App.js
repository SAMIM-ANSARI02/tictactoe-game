import React from 'react';
import './styles.scss'
// import @use 'styles/_colors.scss';

import Board from './components/Board';

const App = () => {
  return (
    <div className="app">
      <Board />
    </div>
  );
};

export default App;
