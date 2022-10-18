import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi=createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers)=>{
      headers.set('X-RapidAPI-Key', 'fa83e37907msh4383b60d8faa56cp1cabf7jsndd8404683ef3');
      return headers;
    },
  }),
  endpoints: (builder)=>({
    getTopCharts: builder.query({query: ()=> '/charts/world'}),
  }),
});

export const {
  useGetTopChartsQuery,
}=shazamCoreApi;