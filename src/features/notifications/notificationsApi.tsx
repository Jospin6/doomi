import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotifications= createAsyncThunk("notifications/fetchNotifications", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})