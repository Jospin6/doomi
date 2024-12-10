import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserVitrines= createAsyncThunk("Vitrines/fetchUserVitrines", async () => {
    return await axios.get("http://localhost:3000/api/v1/vitrines/user_vitrine")
        .then(respons => respons.data)
        .catch(error => error.message)
})