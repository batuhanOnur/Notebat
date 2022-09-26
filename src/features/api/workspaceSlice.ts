import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WorkSpaces, WorkSpace } from '../../interfaces/workSpace';


export const workspaceSlice = createApi({
    reducerPath: 'workspaceSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/workspace'
    }),
    tagTypes:['WorkSpaces'],
    endpoints:(builder) => ({
        getSpaces:builder.query<WorkSpaces,string>({
            query:(userId) => ({ url: `${userId}`}),
            providesTags: ['WorkSpaces'],
            transformResponse: (response : WorkSpaces) => {
                console.log('get workspace calisti')
                return response;
            }
        }),
        addWorkSpace: builder.mutation<WorkSpace,string>({
            query:(payload) => ({
                url: '/create',
                method: 'POST',
                body:payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['WorkSpaces'],
        })
    })
})

export const { useGetSpacesQuery, useAddWorkSpaceMutation } = workspaceSlice