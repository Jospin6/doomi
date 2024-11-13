import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSubCategories= createAsyncThunk("subCategories/fetchSubCategories", async () => {
    return await axios.get("http://localhost:3000/api/v1/sub_categorie_produits")
        .then(respons => respons.data)
        .catch(error => error.message)
})