import react from 'react';

const Square=(props)=>{
    // console.log("value : ",props.value)
    return (
        <div className="square" onClick={props.onClick}>
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;
