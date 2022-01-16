

import { ADD_COUNTER , REDUCE_COUNTER } from "./actionType";

const addCounter =(data)=>{
    return{
        type: ADD_COUNTER,
        payload : data
    }
}


const reduceCounter =(data)=>{
    return{
        type: REDUCE_COUNTER,
        payload : data
    }
}


export {addCounter  , reduceCounter }
