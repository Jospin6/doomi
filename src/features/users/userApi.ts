import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData, CompteConfirmationData } from '@/helpers/types'
import { getLocalStorageItem } from '@/helpers/users'

const USER_API = 'http://localhost:3000/users'

export const siginUser = createAsyncThunk("user/siginUser", async (data: UserData) => {
    const response = await axios.post(USER_API, {
        user: {
            username: data.username,
            phone_number: data.phone_number,
            password: data.password,
        },
        ville: data.ville,
        pays: data.pays,
        lat_lon: data.lat_lon
    });
    return response.data;
})

export const loginUser = createAsyncThunk("user/loginUser", async (data: {
    phone_number: string;
    password: string;
}) => {
    const response = await axios.post(`${USER_API}/sign_in`, {
        user: {
            phone_number: data.phone_number,
            password: data.password
        }
    });
    return response.data;
})

export const logout = createAsyncThunk('user/logout', async () => {
    const token = getLocalStorageItem('token');
    await axios.delete(`${USER_API}/sign_out`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
});

export const confirmUser = createAsyncThunk("user/confirmUser", async (data: CompteConfirmationData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/compte_infos', { data });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})