import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVitrines= createAsyncThunk("Vitrines/fetchVitrines", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})