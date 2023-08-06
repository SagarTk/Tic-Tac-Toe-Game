import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Box = () => {

    const arr = [null,null,null,null,null,null,null,null,null]
    const [state , setState] = useState(arr)
    const [isXturn , setIsXturn] = useState(true)
    

    const checkWinner = () => {
        const mat = [
            [0,1,2] , [3,4,5] , [6,7,8],
            [0,3,6] , [1,4,7] , [2,5,8],
            [0,4,8] , [2,4,6]
        ]
        
        for(let row of mat){
            const [a,b,c] = row ;
            if(state[a] !== null && state[a] === state[b] && state[b]=== state[c]) {
                return state[a] ;
            }
        }
    }
    
    const winner = checkWinner() ;
    
    const checkDraw = () => {
        let x = 1 ;
        for(let val of state){
            if(val == null)  x = 0 ;
        }
        if( !winner && x)  return true ;
        else  return false ;
    }

    const isDraw = checkDraw() ;
    

    const handleClick = (index) => {

        if(state[index] === null)
        {
            const newState = [...state] ;
            newState[index] = isXturn ? "X" : "O" ;
            setState(newState) ;
            setIsXturn(!isXturn) ;
        }
    };

    const handleReset = () => {
        setState([null,null,null,null,null,null,null,null,null])
    }

  return (
    isDraw 
    ?
        <>
            <h1>Match ends at draw.</h1>  
            <button onClick={()=> handleReset()}>Play Again</button>  
        </>
    : 
    winner 
    ?  
        <>
            <h1>{winner} won the game.</h1> 
            <button onClick={()=> handleReset()}>Play Again</button>     
        </> 
    :
        <div className='container'>
            <h1>Tic-Tac-Toe</h1>
            <div className="row">
                <Square value={state[0]} onClick={() => handleClick(0)} />
                <Square value={state[1]} onClick={() => handleClick(1)} />
                <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>

            <div className="row">
                <Square value={state[3]} onClick={()=> handleClick(3)} />
                <Square value={state[4]} onClick={()=> handleClick(4)} />
                <Square value={state[5]} onClick={()=> handleClick(5)} />
            </div>

            <div className="row">
                <Square value={state[6]} onClick={()=> handleClick(6)} />
                <Square value={state[7]} onClick={()=> handleClick(7)} />
                <Square value={state[8]} onClick={()=> handleClick(8)} />
            </div>


        </div>
  )
}

export default Box
