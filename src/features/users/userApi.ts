import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData, CompteConfirmationData } from '@/helpers/types'

export const siginUser = createAsyncThunk("user/siginUser", async (data: UserData, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:3000/users', {data});
        return response.data.user; 
    } catch (error: any) {
        return rejectWithValue(error.response.data); 
    }
})

export const loginUser = createAsyncThunk("user/loginUser", async (data: UserData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/users/sign_in', {data});
        return response.data.user; 
    } catch (error: any) {
        return rejectWithValue(error.response.data); 
    }
})

export const confirmUser = createAsyncThunk("user/confirmUser", async (data: CompteConfirmationData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/compte_infos', {data});
        return response.data; 
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})