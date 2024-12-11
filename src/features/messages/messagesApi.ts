import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchConversationMessagies= createAsyncThunk("messagies/fetchMessagies", async (conversation_id: number) => {
    return await axios.get(`http://localhost:3000/api/v1/messages/conversation_messages/${conversation_id}`)
        .then(respons => respons.data)
        .catch(error => error.message)
})