import { createSlice } from '@reduxjs/toolkit'

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
        
    }
})

export default conversationsSlice.reducer