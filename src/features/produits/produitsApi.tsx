import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduits= createAsyncThunk("produits/fetchProduits", async () => {
    return await axios.get("http://localhost:3000/api/v1/produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})