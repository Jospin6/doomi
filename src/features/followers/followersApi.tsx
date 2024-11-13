import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFollowers= createAsyncThunk("followers/fetchFollowers", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})