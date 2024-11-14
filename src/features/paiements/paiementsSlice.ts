import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    paiemnets: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    paiemnets: [],
    error: ""
}

const paiemnetsSlice = createSlice({
    name: "paiemnets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default paiemnetsSlice.reducer