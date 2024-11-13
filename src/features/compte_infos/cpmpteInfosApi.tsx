import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompteInfos= createAsyncThunk("compteInfos/fetchCompteInfos", async () => {
    return await axios.get("http://localhost:3000/api/v1/compte_infos")
        .then(respons => respons.data)
        .catch(error => error.message)
})