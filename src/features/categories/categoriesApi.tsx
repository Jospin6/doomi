import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories= createAsyncThunk("calls/fetchCategories", async () => {
    return await axios.get("http://localhost:3000/api/v1/categorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})