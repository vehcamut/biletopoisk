import Input from "@/components/Input/Input";
import { useEffect, useState } from "react";
import classes from './index.module.scss';
import Dropdown from "@/components/Dropdown/Dropdown";
import TicketCard from "@/components/TicketCard/TicketCard";
import { moviesAPI } from "@/app/services/movies.service";
import Spiner from "@/components/Spiner/Spiner";
import { moviesFilterSlice } from "@/app/reducers/moviesFilter.slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { debounce } from "lodash";
import { cinemasAPI } from "@/app/services/cinemas.service";
import FindOutlined from "@/components/Icons/FindOutlined/FindOutlined";
import { basketSlice } from "@/app/reducers/basket.slice";
import Modal from "@/components/Modal/Modal";


const Page = () =>  {
  const [currentId, setCurrentId] = useState<string>();
  const onLol = debounce((e) =>
    {
      dispatch(setNameInput(e.target.value.toLocaleLowerCase()))
    }, 500);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const {setCinemaDropDown, setGenreDropDown, setNameInput} = moviesFilterSlice.actions;
  const {cinemaDropDown, genreDropDown, nameInput} = useAppSelector((state) => state.moviesFilterReducer);
  const { changeBasket } = basketSlice.actions;
  const { items: basket } = useAppSelector((state) => state.basketReducer);
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
    <>
      <Modal 
        title="Удаление билета"
        text="Вы уверены, что хотите удалить билет?"
        isOpen={isVisible}
        onCancel={() => setIsVisible(false)}
        onClose={() => setIsVisible(false)}
        onOk={() => {
          setIsVisible(false);
          console.log(currentId);
          dispatch(changeBasket({id: currentId || '', count: -1}))
        }}
      />
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
            initValue={genreDropDown}
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
            initValue={cinemaDropDown}
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
                key={movie.id}
                id={movie.id}
                genre={movie.genre}
                imageSrc={movie.posterUrl}
                title={movie.title}
                counter={basket[movie.id]}
                onAddOne={() => dispatch(changeBasket({id: movie.id, count: 1}))}
                onRemoveOne={() => {
                    if (basket[movie.id] > 1)
                      dispatch(changeBasket({id: movie.id, count: -1}))
                    else {
                      setCurrentId(movie.id);
                      console.log(currentId, movie.id);
                      setIsVisible(true);
                    }
                  }
                }
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
    </>

  )
}

export default Page;
