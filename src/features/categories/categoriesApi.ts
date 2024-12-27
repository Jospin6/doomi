import { CategorieProduit } from "@/helpers/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    return await axios.get("http://localhost:3000/api/v1/categorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const postCategories = createAsyncThunk("categories/fetchCategories", async (data: CategorieProduit[]) => {
    return await axios.post("http://localhost:3000/api/v1/categorie_produits", data)
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const fetchCategoryById = createAsyncThunk(
    'categories/fetchCategoryById',
    async (id: number) => {
        return await axios.get(`http://localhost:3000/api/v1/categorie_produits/${id}`)
            .then(respons => respons.data)
            .catch(error => error.message)
    }
)