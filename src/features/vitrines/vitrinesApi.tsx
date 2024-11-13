import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVitrines= createAsyncThunk("Vitrines/fetchVitrines", async () => {
    return await axios.get("http://localhost:3000/api/v1/vitrines")
        .then(respons => respons.data)
        .catch(error => error.message)
})