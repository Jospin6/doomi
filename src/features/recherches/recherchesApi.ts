import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecherches= createAsyncThunk("recherches/fetchRecherches", async () => {
    return await axios.get("http://localhost:3000/api/v1/recherche_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})