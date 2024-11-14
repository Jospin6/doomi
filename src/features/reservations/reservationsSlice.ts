import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    reservations: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    reservations: [],
    error: ""
}

const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default reservationsSlice.reducer