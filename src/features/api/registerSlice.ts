import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import User from '../../interfaces/user';

export const registerSlice = createApi({
    reducerPath: 'registerSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api'
    }),
    tagTypes: ['Register'],
    endpoints: (builder) => ({
        addNewUser : builder.mutation<void,User>({
            query: (payload) => ({
                url:'/register',
                method: 'POST',
                body: payload,
                headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
});

export const { useAddNewUserMutation } = registerSlice