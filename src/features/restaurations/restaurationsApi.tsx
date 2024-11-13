import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurations= createAsyncThunk("restaurations/fetchRestaurations", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})