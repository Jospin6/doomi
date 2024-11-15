import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type connexionData = {
    email: string,
    password: string
}

export const loginUser= createAsyncThunk("user/loginUser", async ({ email, password }: connexionData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/users/sign_in', {
            email,
            password,
        });
        return response.data.user; // Retourne l'utilisateur
    } catch (error: any) {
        return rejectWithValue(error.response.data); // Gérer les erreurs
    }
})