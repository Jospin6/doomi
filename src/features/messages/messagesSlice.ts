import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchConversationMessagies } from './messagesApi'

type initialState = {
    loading: boolean,
    messages: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    messages: [],
    error: ""
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversationMessagies.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchConversationMessagies.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.messages = action.payload
            })
            .addCase(fetchConversationMessagies.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default messagesSlice.reducer