import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { LoggedUser } from '../../interfaces/auth'


const initialState: LoggedUser = {
    email: '',
    name: '',
    lastName: '',
    id: ''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        loggedIn: (state,action: PayloadAction<LoggedUser>) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.lastName = action.payload.lastName
            state.name = action.payload.name
        },
        // logOut: (state) => {
        //     state.isAuth = false;
        // },
    }
})

export const { loggedIn } = userSlice.actions;

export default userSlice.reducer;