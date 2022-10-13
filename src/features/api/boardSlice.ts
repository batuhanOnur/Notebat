import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Boards } from '../../interfaces/board';
import moment from 'moment';


export const boardSlice = createApi({
    reducerPath: 'boardSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/board'
    }),
    tagTypes:['Board'],
    endpoints:(builder) => ({
        getBoards:builder.query<Boards,string|undefined>({
            query:(workspaceId) => ({ url: `${workspaceId}`}),
            providesTags: ['Board'],
            transformResponse: (response : Boards) => {
                response.$values.forEach((element:any) => {
                    element.createdAt = moment().format("l");
                })
                return response;
            }
        }),
        addBoard: builder.mutation<Boards,string>({
            query:(payload) => ({
                url: '/create',
                method: 'POST',
                body:payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Board'],
        })
    })
})

export const { useGetBoardsQuery, useAddBoardMutation} = boardSlice