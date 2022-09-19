import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WorkSpaces } from '../../interfaces/workSpace';

export const workspaceSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/workspace'
    }),
    tagTypes:['WorkSpaces'],
    endpoints:(builder) => ({
        getSpaces:builder.query<WorkSpaces,string>({
            query:(userId) => ({ url: `${userId}`}),
            transformResponse: (response : WorkSpaces) => {
                console.log('repso', response)
                return response;
            }
        })
    })
})

export const { useGetSpacesQuery } = workspaceSlice