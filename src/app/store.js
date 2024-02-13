import  counterSlice  from "../features/counter/counterSlice";
import { configureStore } from '@reduxjs/toolkit'
    
 const store = configureStore({
    reducer:{
        counter: counterSlice,
    }
});
export default store;