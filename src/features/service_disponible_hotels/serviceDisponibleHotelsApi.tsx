import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServicesDisponibleHotels= createAsyncThunk("servicesDisponibleHotels/fetchServicesDisponibleHotels", async () => {
    return await axios.get("http://localhost:3000/api/v1/services_disponible_hotels")
        .then(respons => respons.data)
        .catch(error => error.message)
})