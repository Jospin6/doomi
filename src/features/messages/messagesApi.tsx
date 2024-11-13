import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessagies= createAsyncThunk("messagies/fetchMessagies", async () => {
    return await axios.get("http://localhost:3000/api/v1/messages")
        .then(respons => respons.data)
        .catch(error => error.message)
})