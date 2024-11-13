import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    evaluations: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    evaluations: [],
    error: ""
}

const evaluationsSlice = createSlice({
    name: "evaluations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default evaluationsSlice.reducer