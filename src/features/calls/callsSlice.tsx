import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    calls: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    calls: [],
    error: ""
}

const callsSlice = createSlice({
    name: "calls",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default callsSlice.reducer