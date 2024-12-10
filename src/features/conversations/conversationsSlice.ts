import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserConversations } from './conversationsApi'

type initialState = {
    loading: boolean,
    conversations: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    conversations: [],
    error: ""
}

const conversationsSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserConversations.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchUserConversations.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.conversations = action.payload
            })
            .addCase(fetchUserConversations.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default conversationsSlice.reducer