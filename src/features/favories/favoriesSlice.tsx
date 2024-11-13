import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    favories: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    favories: [],
    error: ""
}

const favoriesSlice = createSlice({
    name: "favories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default favoriesSlice.reducer