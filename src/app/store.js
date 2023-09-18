import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/HomeSlice'
import menuReducer from '../features/MenuSlice'
import languageReducer from '../features/LanguageSlice'

export const store = configureStore({
  reducer: {
    home:homeReducer,
    MenuSlice:menuReducer,
       language :languageReducer,
  },
})