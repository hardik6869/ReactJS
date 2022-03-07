import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (builder) => ({
        listPosts: builder.query({
            query: (page = 1) => `users?page=${page}`,
        }),
    }),
});

export const {useListPostsQuery} = usersApi;
