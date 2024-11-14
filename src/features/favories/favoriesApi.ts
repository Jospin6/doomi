import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavories= createAsyncThunk("favories/fetchFavories", async () => {
    return await axios.get("http://localhost:3000/api/v1/favorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})