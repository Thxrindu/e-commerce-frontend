import { apiSlice } from '../../api/auth/authApi';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'recommend/items?page=2',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const useGetProductsQuery = () => {
  return productApiSlice.endpoints.getProducts.useQuery({});
};

export const { useGetProductsQuery: useGetProductsQueryOriginal } =
  productApiSlice;
export type UseGetProductsQueryOriginal = typeof useGetProductsQueryOriginal;
