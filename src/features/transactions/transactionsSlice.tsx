import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    transactions: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    transactions: [],
    error: ""
}

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default transactionsSlice.reducer