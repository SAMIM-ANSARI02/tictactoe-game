

const Square = ({value ,onClick,isWinningSquare}) => {
    const colorClass=value==='X'?"text-orange":'text-green'
    const winningclass=isWinningSquare?'winning':''
  return (
    <button 
    className={`square ${colorClass} ${winningclass}`} 
    type="button" 
    onClick={onClick}>
        {value}
 </button>
  )
}

export default Square