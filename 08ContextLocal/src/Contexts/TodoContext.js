// import { useContext,createContext } from "react";


// export const TodoContext = createContext({
//     todos:[
//         {
//             id: 2,
//             todo:"todomsg",
//             complited:false
        
//         }
//     ],
//     addTodo:(todo) =>{},
//     updateTodo: (id, todo)=>{},
//     deleteTodo:(id) =>{},
//     toggleComplite: (id) =>{}

// })


// const useTodo =  ()=>{
//     return useContext(TodoContext);
// }
// export const TodoProvider = TodoContext.Provider



import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider