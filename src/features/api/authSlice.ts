import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, RegisterReturn, Login, LoggedUser } from '../../interfaces/auth';

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
        loginUser : builder.mutation<LoggedUser,Login>({
            query: (payload) => ({
                url:'/login',
                method: 'POST',
                body: payload,
                credentials:'include',
                headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        getUser:builder.query<LoggedUser,void>({
            query:() => ({
                url:'/user',
                method: 'GET',
                credentials: 'include',
                // headers: {
                //     'Content-type': 'application/json; charset=UTF-8',
                //  },
            }),
            transformResponse: (response : LoggedUser) => {
                return response
            }
        })
    })
});

export const { useAddNewUserMutation, useLoginUserMutation, useGetUserQuery } = authSlice