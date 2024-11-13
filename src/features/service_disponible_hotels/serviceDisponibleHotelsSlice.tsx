import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    servicesDisponibleHotels: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    servicesDisponibleHotels: [],
    error: ""
}

const servicesDisponibleHotelsSlice = createSlice({
    name: "servicesDisponibleHotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default servicesDisponibleHotelsSlice.reducer