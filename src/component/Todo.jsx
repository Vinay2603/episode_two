import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from "../features/Todo/action"

export const Todos=()=>{
    const [text,setText] = useState("")
     const {todos,loading,error} = useSelector((state)=> ({ 
       todos: state.todoState.todos,
       loading:state.todoState.loading,
       error:state.todoState.error  }))
    // console.log(todos)
     const dispatch = useDispatch()

useEffect(()=>{
    getTodo()
},[])

const getTodo =()=>{
    dispatch(getTodoLoading())
    axios.get('http://localhost:3001/todos')
    .then(function (response) {
      // handle success
     // console.log(response.data);
      dispatch(getTodoSuccess(response.data))
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch(getTodoError(error))
    })
   
}

    return loading?(<div>...Loading</div>):error?(<div>something is wrong </div>):  <div>
      <h1>todo</h1>

      <input value={text} type="text"  placeholder="enter todo" onChange={(e)=>setText(e.target.value)}/>
      <button
           onClick={()=>{
             dispatch(addTodoLoading())
            axios.post('http://localhost:3001/todos', {
                title: text,
                status: false
              })
              .then(function (response) {
                console.log(response.data);
                dispatch(addTodoSuccess(response.data))
              })
              .catch(function (error) {
                console.log(error);

                dispatch(addTodoError(error))
              });



           }}
       >ADD</button>
       {todos.map((el,i )=> <div key={i}>{el.title}</div>)}
    </div>
}