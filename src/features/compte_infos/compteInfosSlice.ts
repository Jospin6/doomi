import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    compteInfos: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    compteInfos: [],
    error: ""
}

const compteInfosSlice = createSlice({
    name: "compteInfos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default compteInfosSlice.reducer