import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjets= createAsyncThunk("projets/fetchProjets", async () => {
    return await axios.get("http://localhost:3000/api/v1/projets")
        .then(respons => respons.data)
        .catch(error => error.message)
})