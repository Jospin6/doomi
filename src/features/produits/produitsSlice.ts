import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    produits: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    produits: [],
    error: ""
}

const produitsSlice = createSlice({
    name: "produits",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default produitsSlice.reducer