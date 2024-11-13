import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories= createAsyncThunk("calls/fetchCategories", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})