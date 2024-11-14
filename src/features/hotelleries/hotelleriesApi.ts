import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHotelleries= createAsyncThunk("hotelleries/fetchHotelleries", async () => {
    return await axios.get("http://localhost:3000/api/v1/hotellerie_services")
        .then(respons => respons.data)
        .catch(error => error.message)
})