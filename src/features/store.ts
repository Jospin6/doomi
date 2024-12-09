import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarSlice'
import cityReducer  from './citySlice'
import userReducer from './users/userSlice'
import subCategoriesReducer from './sub_categories/subCategoriesSlice'
import categoriesReducer from './categories/categoriesSlice'
import produitsReducer from './produits/produitsSlice'
import vitrineSubNavbarReducer from './vitrines/vitrineSubNavbarSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cities: cityReducer ,
        user: userReducer,
        categories: categoriesReducer,
        subCategory: subCategoriesReducer,
        produits: produitsReducer,
        vitrineSubNavbar: vitrineSubNavbarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch