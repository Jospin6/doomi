import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    notifications: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    notifications: [],
    error: ""
}

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default notificationsSlice.reducer