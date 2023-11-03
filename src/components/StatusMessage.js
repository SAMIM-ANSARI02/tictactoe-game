const StatusMessage = ({ gamingBoard, winner }) => {
    const{square,Isnext}=gamingBoard
  const noMoveLeft = square.every(squareValue => squareValue!== null);

  const Status = Isnext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return <>The winner is {" "}
       <span className={winner==='X'? 'text-green':'text-orange'}>
        {winner}</span>
        </>;
    }
    if (!winner && noMoveLeft) {
      return <>
        <span className="text-green">O </span>
         and {" "}
         <span className="text-orange">X</span> tied</>;
    }
    if (!winner && !noMoveLeft) {
      return <>
      next player is {" "}
      <span className={Isnext? 'text-green':'text-orange'}>{Status}
      </span></>;
    }
    return null;
  };
  return (
    <h2 className="status-message">
        {renderStatusMessage()}
    </h2>
  );
};

export default StatusMessage;
