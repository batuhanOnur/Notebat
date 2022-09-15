import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, RegisterReturn, Login } from '../../interfaces/auth';

export const authSlice = createApi({
    reducerPath: 'registerSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api'
    }),
    tagTypes: ['Register'],
    endpoints: (builder) => ({
        addNewUser : builder.mutation<RegisterReturn,User>({
            query: (payload) => ({
                url:'/register',
                method: 'POST',
                body: payload,
                headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        loginUser : builder.mutation<RegisterReturn,Login>({
            query: (payload) => ({
                url:'/login',
                method: 'POST',
                body: payload,
                credentials: 'include',
                headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
});

export const { useAddNewUserMutation, useLoginUserMutation } = authSlice