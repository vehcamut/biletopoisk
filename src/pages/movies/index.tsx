import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Layout from "@/components/Layout/Layout";
import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import classes from './index.module.scss';
import Dropdown from "@/components/Dropdown/Dropdown";
import TicketCard from "@/components/TicketCard/TicketCard";
import { useRouter } from "next/router";
import { moviesAPI } from "@/app/services/movies.service";
import Spiner from "@/components/Spiner/Spiner";
import { moviesFilterSlice } from "@/app/reducers/moviesFilter.slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { debounce } from "lodash";
import { cinemasAPI } from "@/app/services/cinemas.service";
import FindOutlined from "@/components/Icons/FindOutlined/FindOutlined";


const movie1 = {
  title: "Властелин колец: Братство Кольца",
  posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
  releaseYear: 2001,
  description: "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
  genre: "fantasy",
  id: "2aT976Fs_Bek0e2ZR_05V",
  rating: 8,
  director: "Питер Джексон",
  reviewIds: [
      "M0bg9QY5gVtupNaglrmua",
      "w32kK5oV6UIr1ZHdkkMAn"
  ]
};

const Page = () =>  {
  const onLol = debounce((e) =>
    {
      dispatch(setNameInput(e.target.value.toLocaleLowerCase()))
    }, 500);
  const dispatch = useAppDispatch();
  const {setCinemaDropDown, setGenreDropDown, setNameInput} = moviesFilterSlice.actions;
  const {cinemaDropDown, genreDropDown, nameInput} = useAppSelector((state) => state.moviesFilterReducer);
  const {
    data: moviesDate,
    isError,
    isFetching
  } = moviesAPI.useGetMoviesQuery({cinemaId: cinemaDropDown?.value});
  const {
    data: cinemas,
    isLoading: isCinemasLoading,
    isError: isCinemasError,
  } = cinemasAPI.useGetCinemasQuery({});
  const [movies, setMovies] = useState(moviesDate);
  useEffect(() => {
    setMovies(moviesDate?.filter((movie) => 
      movie.title.toLocaleLowerCase().includes(nameInput || '') &&
      (!genreDropDown?.label || movie.genre.toLocaleLowerCase() === genreDropDown?.label.toLocaleLowerCase())
    ));
  }, [moviesDate, nameInput, genreDropDown]);
  return (
    <div style={{
      gap: '23px',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div
        className={classes['side-bar']}
      >
        <div className={classes['side-bar-title']}>
          Фильтр поиска
        </div>
        <Input
          placeholder="Введите название"
          defaultValue={nameInput}
          name='input1'
          label="Название"
          disabled={isFetching || isError}
          onChange={(e) => {
            onLol(e);
          }}
        />
        <Dropdown
          defaultValue={genreDropDown?.label}
          placeholder="Введите жанр"
          disabled={isFetching || isError}
          label="Жанр"
          name='dropdown1' 
          options={[
            {
              label: "Фэнтези",
              value: '1',
            },
            {
              label: "Ужасы",
              value: '2',
            },
            {
              label: "Боевик",
              value: '3',
            },
            {
              label: "Комедия",
              value: '4',
            },
          ]}
          onSelectOption={(option) => dispatch(setGenreDropDown(option))}
          />
        <Dropdown
          placeholder="Введите кинотеатр"
          defaultValue={cinemaDropDown?.label}
          disabled={isCinemasLoading || isCinemasError}
          label="Кинотеатр"
          name='dropdown2' 
          options={cinemas ? cinemas : []}
          onSelectOption={(option) => dispatch(setCinemaDropDown(option))}
        />
      </div>
      <div
        className={classes['side-bar-plug']}
      >
      </div>
      <div
        className={classes['list']}
      >
        {
          (isFetching || isError) && (
            <div className={classes['spiner-wrapper']}>
              <Spiner />
          </div>
          )
        }
        {
          !isFetching && !isError && movies &&
          movies.map((movie) => 
          (<TicketCard
              id={movie.id}
              genre={movie.genre}
              imageSrc={movie.posterUrl}
              title={movie.title}
          />))
        }
        {
          !isFetching && !isError && (!movies || (movies?.length === 0)) &&
          <div className={classes["empty"]}>
            <FindOutlined className={classes["empty-icon"]}/>
            Ничего не найдено :(
          </div>
        }
      </div>
    </div>
  )
}

export default Page;
