/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(process.env.REACT_APP_API_URL);

const baseQuery = fetchBaseQuery({
  //baseUrl: process.env.REACT_APP_API_URL,
  baseUrl:"http://localhost:3001/api"
  //process.env.REACT_APP_API_URL,
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
