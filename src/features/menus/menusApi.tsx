import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenus= createAsyncThunk("menus/fetchMenus", async () => {
    return await axios.get("http://localhost:3000/api/v1/menus")
        .then(respons => respons.data)
        .catch(error => error.message)
})