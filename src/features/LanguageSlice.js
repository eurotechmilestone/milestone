import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  value: 0,
}

export const LanguageSlice = createSlice({
  name: 'Language',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = LanguageSlice.actions

export default LanguageSlice.reducer