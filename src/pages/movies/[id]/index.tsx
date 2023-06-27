import { useState } from "react";
import classes from './index.module.scss';
import { useRouter } from "next/router";
import BigTicketCard from "@/components/BigTicketCard/BigTicketCard";
import Review from "@/components/Review/Review";
import { moviesAPI } from "@/app/services/movies.service";
import Spiner from "@/components/Spiner/Spiner";
import { basketSlice } from "@/app/reducers/basket.slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Modal from "@/components/Modal/Modal";
import { reviewAPI } from "@/app/services/review.service";

const Page = () =>  {
  const { changeBasket } = basketSlice.actions;
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const { items: basket } = useAppSelector((state) => state.basketReducer);
  const id = useRouter().query.id as string;
  const {
    data: movie,
    isLoading,
  } = moviesAPI.useGetOneMovieQuery({movieId: id});

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = reviewAPI.useGetReviewsQuery({movieId: id, reviewIds: movie?.reviewIds})

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
          dispatch(changeBasket({id: id || '', count: -1}))
        }}
      />
      <div style={{
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {
          isLoading && 
          <div className={classes['spiner-wrapper']}>
            <Spiner />
          </div>  
        }
        {
          !isLoading && 
          <BigTicketCard 
            movie={movie}
            counter={basket[id]}
            onAddOne={() => dispatch(changeBasket({id: id, count: 1}))}
            onRemoveOne={() => {
                if (basket[id] > 1)
                  dispatch(changeBasket({id: id, count: -1}))
                else {
                  setIsVisible(true);
                }
              }
            }
          />
        }
        {
          !isReviewsLoading && !isReviewsError && reviews &&
          reviews.map((review) => (
            <Review review={review} key={review.id}/>))
        }
        {
          isReviewsLoading && 
          <div className={classes['spiner-wrapper-rev']}>
            <Spiner />
          </div>  
        }
      </div>
    </>

  )
}

export default Page;
