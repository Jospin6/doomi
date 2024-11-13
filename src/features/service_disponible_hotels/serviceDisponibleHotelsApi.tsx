import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServicesDisponibleHotels= createAsyncThunk("servicesDisponibleHotels/fetchServicesDisponibleHotels", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})