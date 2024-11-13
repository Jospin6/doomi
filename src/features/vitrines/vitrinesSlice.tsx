import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    vitrines: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    vitrines: [],
    error: ""
}

const vitrinesSlice = createSlice({
    name: "vitrines",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default vitrinesSlice.reducer