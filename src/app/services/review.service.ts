import { api } from './api.service';
import { IReview } from '@/models/IReview';
import { IGetReviews } from '@/models/IGetReviews';

export const reviewAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<IReview[], IGetReviews>({
      query: (params) => ({
        url: 'reviews',
        params: { movieId: params.movieId },
      }),
      transformResponse(apiResponse: IReview[], meta, arg): IReview[] {
        
        return apiResponse.filter((review) => arg.reviewIds?.find((r) => r === review.id));
        // return apiResponse;
      },
    }),
  }),
});
