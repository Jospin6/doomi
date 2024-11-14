import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransactions= createAsyncThunk("transactions/fetchTransactions", async () => {
    return await axios.get("http://localhost:3000/api/v1/transactions")
        .then(respons => respons.data)
        .catch(error => error.message)
})