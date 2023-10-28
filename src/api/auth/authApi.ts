import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';
import { RootState } from '../../types';

interface RefreshData {
  user: any;
  accessToken: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5050',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('result', result);

  if (result?.error && result.error.status === 403) {
    console.log('Sending refresh token');
    const token = api.getState().auth.token;
    const refreshResult = (await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
        body: { token },
      },
      api,
      extraOptions
    )) as {
      data?: RefreshData;
    };
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));

      //retry the original query with new access tooken
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
