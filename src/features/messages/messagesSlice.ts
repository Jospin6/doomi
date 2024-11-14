import { createSlice } from '@reduxjs/toolkit'

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
        
    }
})

export default messagesSlice.reducer