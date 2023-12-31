import { useEffect, useState } from "react";
import classes from './index.module.scss';
import TicketCard from "@/components/TicketCard/TicketCard";
import { moviesAPI } from "@/app/services/movies.service";
import Spiner from "@/components/Spiner/Spiner";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { basketSlice } from "@/app/reducers/basket.slice";
import Modal from "@/components/Modal/Modal";
import BasketOutlined from "@/components/Icons/BasketOutlined/BasketOutlined";

const Page = () =>  {
  const [current, setCurrent] = useState<{id: string, amount?: number}>();
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const {cinemaDropDown,} = useAppSelector((state) => state.moviesFilterReducer);
  const { changeBasket, removeFromBasket } = basketSlice.actions;
  const { items: basket, counter } = useAppSelector((state) => state.basketReducer);
  const {
    data: moviesDate,
    isError,
    isFetching
  } = moviesAPI.useGetMoviesQuery({cinemaId: cinemaDropDown?.value});
  const [movies, setMovies] = useState(moviesDate);
  useEffect(() => {
    setMovies(moviesDate?.filter((movie) => 
      basket[movie.id]));
  }, [moviesDate, basket]);
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
          if (current?.amount)
            dispatch(changeBasket({id: current?.id || '', count: current.amount}));
          else
            dispatch(removeFromBasket({id: current?.id || ''}));
        }}
      />
      <div className={classes['body']}>
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
                onRemove={() => {
                  setCurrent({id: movie.id});
                  setIsVisible(true);
                }}
                onRemoveOne={() => {
                    if (basket[movie.id] > 1)
                      dispatch(changeBasket({id: movie.id, count: -1}))
                    else {
                      setCurrent({id: movie.id, amount: -1});
                      setIsVisible(true);
                    }
                  }
                }
            />))
          }
          {
            !isFetching && !isError && (!movies || (movies?.length === 0)) &&
            <div className={classes["empty"]}>
              <BasketOutlined className={classes["empty-icon"]}/>
                Корзина пуста
            </div>
          }
          
        </div>
        {
            !isFetching && !isError && !!counter &&
            (<div className={classes["itogo"]}>
                <div className={classes["itogo-text"]}>
                  Итого билетов: 
                </div>
                <div className={classes["itogo-text"]}>
                  { counter }
                </div>
            </div>)
          }
      </div>
    </>

  )
}

export default Page;
