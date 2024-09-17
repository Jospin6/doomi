import { createSlice } from '@reduxjs/toolkit'

interface initialState {
    isTextHidden: boolean
}

const initialState: initialState = {
    isTextHidden: false
}

const navbar = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setIsTextHidden: (state) => {
            state.isTextHidden = !state.isTextHidden
        }
    }
})

export const { setIsTextHidden } = navbar.actions

export default navbar.reducer