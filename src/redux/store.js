import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './sideBar/searchSlice';  //it is the default reducer or it is the default export

const store = configureStore({
    reducer: {
        search: searchReducer
    }
});

export default store;


