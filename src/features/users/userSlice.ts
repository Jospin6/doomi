import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { siginUser, loginUser, logout } from './userApi'
import { User } from '@/helpers/types'
import { getLocalStorageItem } from '@/helpers/users'

type initialState = {
    user: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: initialState = {
    user: JSON.parse(getLocalStorageItem('user') || 'null'),
    token: getLocalStorageItem('token'),
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearCredentials: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
        builder
            .addCase(siginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.token = action.payload.token;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', action.payload.token);
                    localStorage.setItem('user', JSON.stringify(action.payload.data)); // Stocker l'utilisateur
                }
                state.status = 'succeeded';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.token = action.payload.token;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', action.payload.token);
                    localStorage.setItem('user', JSON.stringify(action.payload.data)); // Stocker l'utilisateur
                }
                state.status = 'succeeded';
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user'); // Supprimer l'utilisateur
                }
                state.status = 'succeeded';
            })

            .addCase(siginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Erreur lors de l\'inscription';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Erreur lors de la connexion';
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Erreur lors de la déconnexion';
            });
    }
})

export const { clearCredentials } = userSlice.actions;
export default userSlice.reducer