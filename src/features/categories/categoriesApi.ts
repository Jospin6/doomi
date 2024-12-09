import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories= createAsyncThunk("calls/fetchCategories", async () => {
    return await axios.get("http://localhost:3000/api/v1/categorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})

export const postCategories= createAsyncThunk("calls/fetchCategories", async (data: object) => {
    return await axios.post("http://localhost:3000/api/v1/categorie_produits", data)
        .then(respons => respons.data)
        .catch(error => error.message)
})