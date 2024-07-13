import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {refreshBool: false},
    reducers: {
        //to refresh after storing into db.
        toggleRefresh(state,action) {
            state.refreshBool = !state.refreshBool;
        }
    }
});

export const {toggleRefresh} = searchSlice.actions // can add multiple actions

export default searchSlice.reducer;