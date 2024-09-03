import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './sideBar/searchSlice';  //it is the default reducer or it is the default export
import userSelectReducer from './sideBar/userSelectSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        userSelect: userSelectReducer,
    }
});

export default store;


