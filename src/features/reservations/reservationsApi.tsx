import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReservations= createAsyncThunk("reservations/fetchReservations", async () => {
    return await axios.get("")
        .then(respons => respons.data)
        .catch(error => error.message)
})