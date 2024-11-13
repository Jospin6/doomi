import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCalls= createAsyncThunk("calls/fetchCalls", async () => {
    return await axios.get("http://localhost:3000/api/v1/calls")
        .then(respons => respons.data)
        .catch(error => error.message)
})