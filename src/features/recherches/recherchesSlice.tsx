import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    recherches: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    recherches: [],
    error: ""
}

const recherchesSlice = createSlice({
    name: "recherches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default recherchesSlice.reducer