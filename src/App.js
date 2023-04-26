import React from "react"

function Countero(props){
    return(
        <div className="counter--count">
        <h1>{props.num}</h1>
    </div>
    )
}

export default function App() {
    
    const [x,setx]=React.useState(0)
    
    function Add()
    {
      setx(x+1)
    }
    function Sub(){
        setx(x-1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={Sub}>–</button>
            <Countero num={x}/>
            <button className="counter--plus" onClick={Add}>+</button>
        </div>
    )
}
