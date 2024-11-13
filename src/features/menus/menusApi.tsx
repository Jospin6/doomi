import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenus= createAsyncThunk("menus/fetchMenus", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})