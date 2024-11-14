import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurations= createAsyncThunk("restaurations/fetchRestaurations", async () => {
    return await axios.get("http://localhost:3000/api/v1/restaurations")
        .then(respons => respons.data)
        .catch(error => error.message)
})