import { IMovie } from '@/models/IMovie';
import { api } from './api.service';
import { IGetMovies } from '@/models/IGetMovies';
import { IGetMovie } from '@/models/IGetMovie';

const translator: {[index: string]: string} = {
  "fantasy": "фэнтези",
  "horror": "ужасы",
  "action": "боевик",
  "comedy": "комедия", 
}

export const moviesAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<IMovie[], IGetMovies>({
      query: (params) => ({
        url: 'movies',
        params,
        //credentials: 'include',
      }),
      transformResponse(apiResponse: IMovie[]): IMovie[] {
        return apiResponse.map((movie) => {
            const genre = movie.genre in translator ? translator[movie.genre] : movie.genre;
            movie.genre = genre.charAt(0).toUpperCase() + genre.slice(1)
            return movie;
        });
      },
    }),
    getOneMovie: build.query<IMovie, IGetMovie>({
      query: (params) => ({
        url: 'movie',
        params,
      }),
      transformResponse(apiResponse: IMovie): IMovie {
        const genre = apiResponse.genre in translator ? translator[apiResponse.genre] : apiResponse.genre;
        apiResponse.genre = genre.charAt(0).toUpperCase() + genre.slice(1)
        return apiResponse;
      },
    }),
    // getForPatientAppointments: build.query<IAppointment[][], IGetForPatientAppointment>({
    //   query: (params) => ({
    //     url: 'appointments/getForPatient',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists', 'removeAppointment'],
    //   transformResponse(apiResponse: IAppointment[]): IAppointment[][] {
    //     const week: IAppointment[][] = [[], [], [], [], [], [], []];
    //     apiResponse.forEach((appointment) => {
    //       const date = new Date(appointment.begDate);
    //       switch (date.getDay()) {
    //         case 0:
    //           week[6].push(appointment);
    //           break;
    //         case 1:
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //           week[date.getDay() - 1].push(appointment);
    //           break;
    //         default:
    //           break;
    //       }
    //     });

    //     return week;
    //   },
    // }),
    // getForRecord: build.query<IAppointment[][], IGetFreeAppointmetns>({
    //   query: (params) => ({
    //     url: 'appointments/getForRecord',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists', 'removeAppointment'],
    //   transformResponse(apiResponse: IAppointment[]): IAppointment[][] {
    //     const week: IAppointment[][] = [[], [], [], [], [], [], []];
    //     apiResponse.forEach((appointment) => {
    //       const date = new Date(appointment.begDate);
    //       switch (date.getDay()) {
    //         case 0:
    //           week[6].push(appointment);
    //           break;
    //         case 1:
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //           week[date.getDay() - 1].push(appointment);
    //           break;
    //         default:
    //           break;
    //       }
    //     });

    //     return week;
    //   },
    // }),
    // getAppointmentsOnCurrentDate: build.query<IAppointment[], IGetAppointment>({
    //   query: (params) => ({
    //     url: 'appointments/get',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists', 'removeAppointment', 'removeAppointment'],
    // }),
    // getForPatientAppointmentsOnCurrentDate: build.query<IAppointment[], IGetForPatientAppointment>({
    //   query: (params) => ({
    //     url: 'appointments/getForPatient',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists', 'removeAppointment'],
    // }),
    // getForRecordOnCurrentDate: build.query<IAppointment[], IGetFreeAppointmetns>({
    //   query: (params) => ({
    //     url: 'appointments/getForRecord',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists'],
    // }),
    // addAppointments: build.mutation<IAddAppointmentResult, IAddAppointment>({
    //   query: (body) => ({
    //     url: 'appointments/add',
    //     method: 'POST',
    //     credentials: 'include',
    //     body,
    //   }),
    //   invalidatesTags: ['appointments'],
    // }),
    // removeAppointments: build.mutation<any, IRemoveAppointment>({
    //   query: (body) => ({
    //     url: 'appointments/remove',
    //     method: 'DELETE',
    //     credentials: 'include',
    //     body,
    //   }),
    //   invalidatesTags: ['removeAppointment'],
    // }),
    // getAppointmentById: build.query<IAppointment, IGetAppointmentById>({
    //   query: (params) => ({
    //     url: 'appointments/getById',
    //     params,
    //     credentials: 'include',
    //   }),
    //   providesTags: ['appointments', 'specialists'],
    // }),
  }),
});
