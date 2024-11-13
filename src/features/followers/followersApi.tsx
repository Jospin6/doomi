import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFollowers= createAsyncThunk("followers/fetchFollowers", async () => {
    return await axios.get("http://localhost:3000/api/v1/followers")
        .then(respons => respons.data)
        .catch(error => error.message)
})