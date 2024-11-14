import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    users: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    users: [],
    error: ""
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default usersSlice.reducer