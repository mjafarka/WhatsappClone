import {createSlice} from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'messages',
    initialState: {messages:[]},
    reducers: {
        insertMessageRedux(state,action) {
            state.messages = action.payload.messages;
        }
    }
})

export const {insertMessageRedux} = messageSlice.actions;

export default messageSlice.reducer;