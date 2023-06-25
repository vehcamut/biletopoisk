import { IOption } from '@/models/IOption';
import { api } from './api.service';
import { ICinema } from '@/models/ICinema';

export const cinemasAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getCinemas: build.query<IOption[], {}>({
      query: (params) => ({
        url: 'cinemas',
        params,
      }),
      transformResponse(apiResponse: ICinema[]): IOption[] {
        return apiResponse.map((cinema) => ({label: cinema.name, value: cinema.id}));
      },
    }),
  }),
});
