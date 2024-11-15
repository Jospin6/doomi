import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from './userApi'
type initialState = {
    token: string,
    loading: boolean,
    user: object,
    error: null
}

const initialState: initialState = {
    token: '',
    user: {},
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = {};
            state.token = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload; // Stocke les informations de l'utilisateur
                state.token = action.payload.token; // Stocke le token
                localStorage.setItem('token', action.payload.token); // Enregistre le token
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload; // Gérer l'erreur
            });
    }
})

export const { clearUser } = userSlice.actions;
export default userSlice.reducer