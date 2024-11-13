import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHotelleries= createAsyncThunk("hotelleries/fetchHotelleries", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})