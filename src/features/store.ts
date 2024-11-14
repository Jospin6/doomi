import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarSlice'
import geoNamesReducer from './geoNamesSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        geoNames: geoNamesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch