import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPaiements= createAsyncThunk("paiements/fetchPaiements", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})