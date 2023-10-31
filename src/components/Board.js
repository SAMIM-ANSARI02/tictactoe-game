import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [Isnext,setIsnext]=useState(false)

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

  const renderSquare = position => {
    return (
      <Square value={square[position]} onClick={() => handleSquareClick(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
       { renderSquare(0)}
       {renderSquare(1)} 
       {renderSquare(2)}
      </div>
      <div className="board-row">
       { renderSquare(3)} 
       {renderSquare(4)} 
       {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} 
        {renderSquare(7)} 
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
