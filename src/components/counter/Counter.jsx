import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter(){

    const [count,setCount] = useState(0);

    function increamentCounterParentFunction(by){
        setCount(count+by)
    }

    function decreamentCounterParentFunction(by){
        setCount(count-by)
    }

    function resetCounter(){
        setCount(0)
    }

    return(
        <div>
            <span className="count">{count}</span>
            
            <CounterButton by={1} incrementMethod={increamentCounterParentFunction} 
            decreamentMethod={decreamentCounterParentFunction}/>

            <CounterButton by={2} incrementMethod={increamentCounterParentFunction} 
            decreamentMethod={decreamentCounterParentFunction}/>

            <CounterButton by={5} incrementMethod={increamentCounterParentFunction} 
            decreamentMethod={decreamentCounterParentFunction}/>


            <button className="resetButton" onClick={resetCounter}>Reset</button>
            </div>
    )
}



