import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    menus: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    menus: [],
    error: ""
}

const menusSlice = createSlice({
    name: "menus",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default menusSlice.reducer