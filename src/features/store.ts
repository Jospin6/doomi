import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarSlice'
import cityReducer  from './citySlice'
import userReducer from './users/userSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cities: cityReducer ,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch