import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {refreshBool: false, searchMethod:"recent"},
    reducers: {
        //to refresh after storing into db.
        toggleRefresh(state,action) {
            state.refreshBool = !state.refreshBool;
        },
        toggleSearchMethod(state,action) {
            switch(action.payload.searchMethod) {
                case 'recent':
                    state.searchMethod = 'recent';
                    break;
                case 'new':
                    state.searchMethod = 'new';
                    break;
            }
        },
        toggleSearchResultView(state,action){
            switch (action.payload.showResult) {
                case true:
                    
            }
        }
    }
});

export const {toggleRefresh, toggleSearchMethod} = searchSlice.actions // can add multiple actions

export default searchSlice.reducer;