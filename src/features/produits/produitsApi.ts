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

export const postProduit= createAsyncThunk("produits/fetchProduits", async (data: object) => {
    return await axios.post("http://localhost:3000/api/v1/produits", data)
        .then(respons => respons.data)
        .catch(error => error.message)
})