import {createSlice} from '@reduxjs/toolkit'

const userSelectSlice = createSlice({
    name: 'selectedUser',
    initialState: {userId: "defaultUserId"},
    reducers: {
        //to refresh after storing into db.
        selectProfile(state,action) {
            state.userId = action.payload.userId;
        }
    }
});

export const {selectProfile} = userSelectSlice.actions // can add multiple actions

export default userSelectSlice.reducer;