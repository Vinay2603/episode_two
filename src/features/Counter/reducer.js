
import { ADD_COUNTER , REDUCE_COUNTER } from "./actionType";



  const reducer =(state = {counter : 0 },{type, payload})=>{
    switch(type){

        case ADD_COUNTER:
            return{
                ...state,
                counter : state.counter + payload,
            }

        case  REDUCE_COUNTER :
            return{
                ...state,
                counter : state.counter - payload,
            }

        default :
         return state    
    }
}


export {reducer}
