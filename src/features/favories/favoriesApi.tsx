import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavories= createAsyncThunk("favories/fetchFavories", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})