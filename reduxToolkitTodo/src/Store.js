// import { configureStore } from '@reduxjs/toolkit'; 


// import todoreducer from '../features/todo/todoSlice'

// export  const store = configureStore({
//     reducer:todoreducer
// });

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})