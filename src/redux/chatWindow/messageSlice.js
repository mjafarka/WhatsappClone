import {createSlice} from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'messages',
    initialState: {messages:[], messageRef: ""},
    reducers: {
        insertMessageRedux(state,action) {
            state.messages = action.payload.messages;
        },
        liveMessageUpdate(state,action) {
            state.messages = action.payload.messages;
        },
        updateMessageRef(state,action) {
            state.messageRef = action.payload.messageRef;
        }
    }
})

export const {insertMessageRedux, liveMessageUpdate, updateMessageRef} = messageSlice.actions;

export default messageSlice.reducer;