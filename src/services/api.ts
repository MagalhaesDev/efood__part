/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Categories } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories[], void>({
      query: () => '/api/efood/restaurantes'
    })
  })
})

export const { useGetCategoriesQuery } = api

export default api