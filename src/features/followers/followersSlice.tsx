import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    followers: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    followers: [],
    error: ""
}

const followersSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default followersSlice.reducer