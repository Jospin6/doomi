import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
        setIsTextHidden: (state, action: PayloadAction<any>) => {
            state.isTextHidden = action.payload
        }
    }
})

export const { setIsTextHidden } = navbar.actions

export default navbar.reducer