

import {ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR} from "./actionType";

    import axios from "axios"

const addTodoLoading =()=>{
    return{
        type: ADD_TODO_LOADING,
    }
}

const addTodoSuccess =(data)=>{
    return{
        type: ADD_TODO_SUCCESS,
        payload: data
    }
}

const addTodoError =(err)=>{
    return{
        type: ADD_TODO_ERROR,
         payload:err
    }
}
////

const getTodoLoading =()=>{
    return{
        type: GET_TODO_LOADING,
    }
}

const getTodoSuccess =(data)=>{
    return{
        type: GET_TODO_SUCCESS,
        payload: data
    }
}

const getTodoError =(err)=>{
    return{
        type: GET_TODO_ERROR,
         payload:err
    }
}

const getData=()=>(dispatch)=>{
     dispatch(getTodoLoading())
    axios.get('http://localhost:3001/todos')
    .then(function (response) {
      // handle success
     // console.log(response.data);
      dispatch(getTodoSuccess(response.data))
     // getTodo()
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch(getTodoError(error))
    })
}


export {addTodoError,addTodoSuccess, addTodoLoading , getTodoLoading , getTodoSuccess , getTodoError ,getData}