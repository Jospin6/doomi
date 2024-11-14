import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signInUser= createAsyncThunk("users/signInUser", async () => {
    return await axios.post("http://localhost:3000/users")
        .then(respons => respons.data)
        .catch(error => error.message)
})