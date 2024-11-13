import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    restaurations: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    restaurations: [],
    error: ""
}

const restaurationsSlice = createSlice({
    name: "restaurations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default restaurationsSlice.reducer