import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    projets: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    projets: [],
    error: ""
}

const projetsSlice = createSlice({
    name: "projets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default projetsSlice.reducer