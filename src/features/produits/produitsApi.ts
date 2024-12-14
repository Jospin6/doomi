import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduits= createAsyncThunk("produits/fetchProduits", async () => {
    return await axios.get("http://localhost:3000/api/v1/produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const fetchProduitsById= createAsyncThunk("produits/fetchProduitsById", async (id: number) => {
    return await axios.get(`http://localhost:3000/api/v1/produits/${id}`)
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const fetchUserProduits= createAsyncThunk("produits/fetchUserProduits", async (user_id: number) => {
    return await axios.get(`http://localhost:3000/api/v1/produits/user_produits/${user_id}`)
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const searchProduits= createAsyncThunk("produits/searchProduits", async (title: string) => {
    return await axios.get(`http://localhost:3000/api/v1/produits/search_products/${title}`)
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const postProduit= createAsyncThunk("produits/postProduit", async (data: object) => {
    return await axios.post("http://localhost:3000/api/v1/produits", data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`, // Récupération du token
            'Content-Type': 'application/json'
        }
    })
        .then(respons => {
            console.log(respons.data)
        })
        .catch(error => {
            console.log(error.message)
        })
})