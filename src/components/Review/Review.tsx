'use client';

import React, { FunctionComponent } from 'react'
import classes from './review.module.scss';
import Image from 'next/image'
import PhotoOutlined from '../Icons/PhotoOutlined/PhotoOutlined';
// import Input, { InputProps } from '../Input/Input';

interface IReview {
  id: string;
  name: string;
  text: string;
  rating: number;
  imgSrc?: string;
}

interface IReviewProps {
  review: IReview;
}

const Review: FunctionComponent<IReviewProps> = ({ review }) => {
  return (
    <article className={classes['card']}>
      <div className={classes['avatar']}>
        {review.imgSrc ?
          <Image 
          className={classes['avatar-image']}
          src={review.imgSrc}
          alt='Потсер фильма'
          fill={true}
          //style={{objectFit: 'fill'}}
          //width={}
          />
        :
          <PhotoOutlined className={classes['avatar-empty']}/>
        }
      </div>
      <div className={classes['body']}>
        <div className={classes['header']}>
          <div className={classes['name']} >
            {review.name}
          </div>
          <div className={classes['rating']}>
            Оценка: <span>{review.rating}</span>
          </div>
        </div>
        <div className={classes['text']}>
          {review.text}
        </div>
      </div>
    </article>
  )
}

export default Review;
