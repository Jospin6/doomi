import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    hotelleries: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    hotelleries: [],
    error: ""
}

const hotelleriesSlice = createSlice({
    name: "hotelleries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default hotelleriesSlice.reducer