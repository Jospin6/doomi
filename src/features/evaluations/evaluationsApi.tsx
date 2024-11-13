import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvaluations= createAsyncThunk("evaluations/fetchEvaluations", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})