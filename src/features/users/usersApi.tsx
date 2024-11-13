import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers= createAsyncThunk("users/fetchUsers", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})