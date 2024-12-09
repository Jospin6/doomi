import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSubCategories= createAsyncThunk("subCategories/fetchSubCategories", async () => {
    return await axios.get("http://localhost:3000/api/v1/sub_categorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const postSubCategories= createAsyncThunk("subCategories/fetchSubCategories", async (data: object) => {
    return await axios.post("http://localhost:3000/api/v1/sub_categorie_produits", data)
        .then(respons => respons.data)
        .catch(error => error.message)
})