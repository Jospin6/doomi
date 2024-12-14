import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData, CompteConfirmationData } from '@/helpers/types'

export const siginUser = createAsyncThunk("user/siginUser", async (data: UserData, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:3000/users', {
            user: {
                username: data.username,
                phone_number: data.phone_number,
                password: data.password,
            },
            ville: data.ville, 
            pays: data.pays,   
            lat_lon: data.lat_lon
        });
        return response; 
    } catch (error: any) {
        return rejectWithValue(error.response); 
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

export const currentUser = createAsyncThunk("user/currentUser", async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/current_user', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`, // Récupération du token
                'Content-Type': 'application/json'
            }
        });
        return response.data; // Retourne les données de l'utilisateur
    } catch (error: any) {
        // Vérification si l'erreur contient une réponse
        if (error.response) {
            console.error('Erreur lors de la récupération de l’utilisateur :', error.response.data);
            throw error.response.data; // Lance l'erreur pour être gérée dans le slice
        } else if (error.request) {
            console.error('Aucune réponse reçue :', error.request);
            throw new Error('Aucune réponse du serveur.');
        } else {
            console.error('Erreur:', error.message);
            throw new Error('Erreur lors de la requête.');
        }
    }
});

export const confirmUser = createAsyncThunk("user/confirmUser", async (data: CompteConfirmationData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/compte_infos', {data});
        return response.data; 
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})