import React from 'react';
import './styles.scss'
import { useState } from 'react';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

// import @use 'styles/_colors.scss';

import Board from './components/Board';
// import square from './components/Square';
 const NEW_GAME=[{square:Array(9).fill(null),Isnext:false}]
const App = () => {
  const [history,sethistory]=useState(NEW_GAME)
  const[currentMove,setcurrentMove]=useState(0)

  const gamingBoard=history[currentMove]

  const {winner,winningSquare} =calculateWinner(gamingBoard.square)
 
  
   console.log({history,currentMove})
  const handleSquareClick = ClickPosition => {
    if(gamingBoard.square[ClickPosition]){
        return
    }
    //
    sethistory(currentHistory=>{
      const Istraversing=currentMove+1!==currentHistory.length

      const lastGamimgState=Istraversing?currentHistory[currentMove]:history[history.length-1]

        const nextSquareState= lastGamimgState.square.map((squareValue,position)=>{
            if(ClickPosition===position){
                return lastGamimgState.Isnext ? 'X':'O'
            }
            return squareValue

        })

        const base=Istraversing
        ? currentHistory.slice(0,currentHistory.indexOf(lastGamimgState)+1)
        :currentHistory;

        return base.concat({
          square:nextSquareState,
          Isnext:!lastGamimgState.Isnext

        })
    })
      setcurrentMove(move=>move+1)
  };
  const moveTo=(move)=>{
    setcurrentMove(move)
  }
  const onNewGameStart=()=>{
    sethistory(NEW_GAME)
    setcurrentMove(0)

  }
  return (
    <div className="app">
      <h1>Tic <span className='text-green'>Tac</span> Toe</h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
      <Board  square={gamingBoard.square} winningSquare={winningSquare} handleSquareClick={handleSquareClick}/>
      <button onClick={onNewGameStart} className={`btn-reset ${winner?'active':''}`}>Start new Game</button>
      <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'></div>
    </div>
   

  );
};

export default App;
