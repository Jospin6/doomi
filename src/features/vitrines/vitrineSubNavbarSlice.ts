import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
    index: number,
}

const initialState: initialState = {
    index: 0
}

const vitrineSubNavbarSlice = createSlice({
    name: "vitrineSubNavbar",
    initialState,
    reducers: {
        setActiveIndex: (state, action: PayloadAction<any>) => {
            state.index = action.payload
        }
    },
})

export const {setActiveIndex} = vitrineSubNavbarSlice.actions

export default vitrineSubNavbarSlice.reducer