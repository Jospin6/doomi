import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduits= createAsyncThunk("produits/fetchProduits", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})