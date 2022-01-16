import { useDispatch ,useSelector } from "react-redux"
import {addCounter,reduceCounter} from "../features/Counter/action"


export const Counter =()=>{

    const counter = useSelector((state)=> state.counterState.counter)
    const dispatch = useDispatch()



    return  <div>
        <h1>counter: {counter} </h1>
        <button 
           onClick={()=>  dispatch(addCounter(1))}
          >ADD</button>
        <button
        
          onClick={ ()=>{dispatch(reduceCounter(1))}}
        >REDUCE</button>
    </div>
}