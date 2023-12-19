import react,{useState} from 'react';
import Square from'./Square';
//return a function (component)
const Board=()=>{
    const[state,setState]=useState(Array(9),null);
    const[turn,setTurn]=useState(true);

    function flush(){
        const newArr=Array(9).fill(null);
        setState(newArr);
        setTurn(true);
    }

    const checkWinner=()=>{
        //all possible winning cominations
        const check=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ]
        for(let eachPair of check){
            const [a,b,c]=eachPair;
            if(state[a]!=null && state[a]===state[b] && state[a]===state[c]){
                return `${state[a]} has won`;

            }
        }
        //check for draw
        if(checkDraw()) return 'there is Draw';
        return false;
    }
    const draw=false;
    function checkDraw(){
        for(let each of state){
            //if any of them is null means its not a draw
            if(each === null) return false;
        }
        return true;
    }
    
    const clickHandle=(index)=>{
        //first we need to recognize what grid no. was clicked so we use the parameter index

        // once a grid is clicked we have to first recognize whose turn it is
        // value x/O is stored in the state array
        if(state[index]) return;
        const copyArr=[...state];
        if(turn){
            copyArr[index]='X';
        }
        else{
            copyArr[index]='O';
        }
        
         setTurn(!turn);
         setState(copyArr);


    };
   
    let winner=checkWinner();
    
    return (
        <div className="boardContainer">
            {winner?

                (<> 
                    <p>
                    {winner}
                    </p>
                    <button onClick={flush}>play again</button>
                </>):
                (<>
                    <div className="boardRow" >
                        <Square   onClick={()=>clickHandle(0)} value={state[0]}  />
                        <Square   onClick={()=>clickHandle(1)} value={state[1]} />
                        <Square   onClick={()=>clickHandle(2)} value={state[2]} />
                    </div>
                    <div className="boardRow">
                        <Square   onClick={()=>clickHandle(3)} value={state[3]} />
                        <Square   onClick={()=>clickHandle(4)} value={state[4]} />
                        <Square   onClick={()=>clickHandle(5)} value={state[5]} />
                    </div>
                    <div className="boardRow">
                        <Square  onClick={()=>clickHandle(6)} value={state[6]} />
                        <Square  onClick={()=>clickHandle(7)} value={state[7]} />
                        <Square  onClick={()=>clickHandle(8)} value={state[8]} />
                    </div>
                </>)
            }
        </div>
    )
}

export default Board;
