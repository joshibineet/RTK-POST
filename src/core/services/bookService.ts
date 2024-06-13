import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookService = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://inout.suzanpradhan.com.np/api/v1/members/',
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        addMember: builder.mutation<MemberType, MemberType>({
            query: (newMember: MemberType) => ({
                url: '',
                method: 'POST',
                body: newMember,
            }),
            
        }),
    }),
});

export const { useGetBooksQuery, useAddMemberMutation } = bookService;
