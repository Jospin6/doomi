import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchConversations= createAsyncThunk("conversations/fetchConversations", async () => {
    return await axios.get("http://localhost:3000/api/v1/conversations")
        .then(respons => respons.data)
        .catch(error => error.message)
})