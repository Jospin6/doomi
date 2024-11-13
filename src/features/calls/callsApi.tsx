import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCalls= createAsyncThunk("calls/fetchCalls", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})