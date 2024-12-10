import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserVitrines } from './vitrinesApi'

type user = {
    username: string
}

type vitrine = {
    titre: string,
    description: string,
    profil_img: string,
    cover_img: string,
    specialites: string,
    horaires: string,
    user: user,
    followers_count: number
}

type initialState = {
    loading: boolean,
    vitrines: vitrine | null,
    error: string
}

const initialState: initialState = {
    loading: false,
    vitrines: null,
    error: ""
}

const vitrinesSlice = createSlice({
    name: "vitrines",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserVitrines.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchUserVitrines.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.vitrines = action.payload
            })
            .addCase(fetchUserVitrines.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default vitrinesSlice.reducer