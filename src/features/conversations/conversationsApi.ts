import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserConversations= createAsyncThunk("conversations/fetchUserConversations", async () => {
    return await axios.get("http://localhost:3000/api/v1/conversations/user_conversations")
        .then(respons => respons.data)
        .catch(error => error.message)
})