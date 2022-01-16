import { createStore ,combineReducers } from "redux";
import { reducer as CounterReducer   } from "../features/Counter/reducer";
import { reducer as TodoReducer } from "../features/Todo/reducer";

const rootReducer = combineReducers({
    counterState : CounterReducer,
    todoState : TodoReducer
})


export const store = createStore(rootReducer)