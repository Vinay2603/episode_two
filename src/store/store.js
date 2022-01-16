import { createStore ,combineReducers ,applyMiddleware ,compose} from "redux";
import { reducer as CounterReducer   } from "../features/Counter/reducer";
import { reducer as TodoReducer } from "../features/Todo/reducer";
import thunk from "redux-thunk"



const rootReducer = combineReducers({
    counterState : CounterReducer,
    todoState : TodoReducer
})

// const logger1=(store)=>(next)=>(action)=>{
//     if(typeof action === "function"){
//         return action (store.dispatch)
//     }
// next(action)
// }


export const store = createStore(
    rootReducer,
 compose(applyMiddleware(  thunk  ),
     window.__REDUX_DEVTOOLS_EXTENSION__())
    )

console.log("entireStore" , store.getState())