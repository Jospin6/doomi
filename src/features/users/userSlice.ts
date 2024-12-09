import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { siginUser, loginUser } from './userApi'

type userAttributes = {
    id: number
}

type initialState = {
    token: string,
    loading: boolean,
    user: userAttributes,
    error: null
}

const initialState: initialState = {
    token: '',
    user: {
        id: 0
    },
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = state.user;
            state.token = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(siginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(siginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(siginUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            // connexion
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token; 
                localStorage.setItem('token', action.payload.token); 
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer