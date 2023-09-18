import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  menu:[],
}

export const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
   setMenu:(state,action) =>{
    state.menu=action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { setMenu} = MenuSlice.actions

export default MenuSlice.reducer