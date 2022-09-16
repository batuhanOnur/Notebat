import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { Auth } from '../../interfaces/auth'

const initialState: Auth = {
    isAuth : false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        loggedIn: (state) => {
            state.isAuth = true;
        },
        logOut: (state) => {
            state.isAuth = false;
        },
    }
})

export const { loggedIn, logOut } = userSlice.actions;

export default userSlice.reducer;