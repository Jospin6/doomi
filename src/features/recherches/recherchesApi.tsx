import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecherches= createAsyncThunk("recherches/fetchRecherches", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})