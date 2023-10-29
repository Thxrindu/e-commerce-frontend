import { apiSlice } from '../../api/auth/authApi';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...userData },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApiSlice;
