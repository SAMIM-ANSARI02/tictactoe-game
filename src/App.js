import React from 'react';
import './styles.scss'
import { useState } from 'react';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';

// import @use 'styles/_colors.scss';

import Board from './components/Board';
// import square from './components/Square';

const App = () => {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [Isnext,setIsnext]=useState(false)

  const winner =calculateWinner(square)
 
  

  const handleSquareClick = ClickPosition => {
    if(square[ClickPosition]){
        return
    }
    //
    setsquare(currentSquare=>{
        return currentSquare.map((squareValue,position)=>{
            if(ClickPosition===position){
                return Isnext ? 'X':'O'
            }
            return squareValue

        })
    })
      setIsnext((currentIsnext)=>!currentIsnext)
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} Isnext={Isnext} square={square}/>
      <Board  square={square} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
