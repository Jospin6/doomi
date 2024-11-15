import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData } from '@/helpers/types'

type connexionData = {
    email: string,
    password: string
}

export const siginUser = createAsyncThunk("user/siginUser", async (data: UserData, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:3000/users', {data});
        return response.data.user; // Retourne l'utilisateur
    } catch (error: any) {
        return rejectWithValue(error.response.data); // Gérer les erreurs
    }
})

export const loginUser = createAsyncThunk("user/loginUser", async (data: UserData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/users/sign_in', {data});
        return response.data.user; // Retourne l'utilisateur
    } catch (error: any) {
        return rejectWithValue(error.response.data); // Gérer les erreurs
    }
})