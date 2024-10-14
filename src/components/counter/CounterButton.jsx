import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function CounterButton({by, incrementMethod, decreamentMethod}){

    // [0,f]
    // count is the variable name and setCount is the function name
const [count,setCount] = useState(0);

    function increamentCounterFunction(){
/** 
        state[1](state[0] +1)
        // state[0] ---> contains the value of the state
        // state[1] ---> is the function which we can use to update the state 
        console.log(state[0]);
        console.log (state[1]);   */

        setCount(count+by)
        incrementMethod(by)
        // console.log(count)
    }

    function decreamentCounterFunction(){
        setCount(count-by)
        decreamentMethod(by)

    }

   
    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" onClick={increamentCounterFunction}
                // first {} is for jsx syntax secont {} is to define a object
                // example constant buttonStyle={fontSize:"30px"}
                // style={buttonStyle} or style ={{fontSize:"30px"}}
               >+{by}</button>
               <button className="counterButton" onClick={decreamentCounterFunction}
                >-{by}</button>
            </div>         
        </div>
    )
   
}

CounterButton.propTypes={
    by: PropTypes.number
}

CounterButton.defaultProps={
    by:1
}