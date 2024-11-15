import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarSlice'
import geoNamesReducer from './geoNamesSlice'
import userReducer from './users/userSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        geoNames: geoNamesReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch