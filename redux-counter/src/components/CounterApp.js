import React, { useState, useReducer } from "react";
import { CounterReducer } from "../reducers/CounterReducer";
import { useSelector, useDispatch } from "react-redux";

import {
    INCREMENT,
    DECREMENT,
    ADDFIVE
} from "../slice/counterSlice";

// export default function CounterApp() {
//     const [counter, setCounter] = useState(0);
    
    
//     function incrementTheCounter() {
//         setCounter((count) => count + 1);
//     }

//     function decrementTheCounter() {
//         setCounter((count) => count -1);
//     }
    
//     function incrementCounterByFive() {
//         setCounter((count) => count +5);
//     }
    
//     return (
//        <div>
//             <h1> The Value Of The Counter is {counter}</h1>
//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => incrementTheCounter()}>Increment</button>

//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => decrementTheCounter()}>Decrement</button>

//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => incrementCounterByFive()}>Add +5</button>

//        </div>
//     )
// }


// export default function CounterApp() {
//     const [counterObj , dispatch] = useReducer(CounterReducer, { value: 0});

//         function incrementTheCounter() {
//         dispatch(
//             {
//                 type: "INCREMENT"
//             }
//         )
//     }

//     function decrementTheCounter() {
//         dispatch(
//             {
//                 type: "DECREMENT"
//             }
//         )
//     }
    
//     function incrementCounterByFive() {
//         dispatch(
//             {
//                 type: "ADDFIVE"
//             }
//         )
//     }

//         return (
//        <div>
//             <h1> The Value Of The Counter is {counterObj.value}</h1>
//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => incrementTheCounter()}>Increment</button>

//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => decrementTheCounter()}>Decrement</button>

//             <button 
//             style={{
//                 width: "100px",
//                 height: "50px"
//             }}
//             onClick={() => incrementCounterByFive()}>Add +5</button>
//        </div>
//     )
// }

export default function CounterApp() {

    const counter = useSelector(state => state.value);
    const dispatch = useDispatch()
        return (
       <div>
            <h1> The Value Of The Counter is {counter}</h1>
            <button 
            style={{
                width: "100px",
                height: "50px"
            }}
            onClick={() => dispatch(INCREMENT())}>Increment</button>

            <button 
            style={{
                width: "100px",
                height: "50px"
            }}
            onClick={() => dispatch(DECREMENT())}>Decrement</button>

            <button 
            style={{
                width: "100px",
                height: "50px"
            }}
            onClick={() => dispatch(ADDFIVE())}>Add +5</button>

       </div>
    )
}


