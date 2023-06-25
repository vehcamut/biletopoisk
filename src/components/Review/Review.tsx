'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './review.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Image from 'next/image'
import Button from '../Button/Button';
import PlusOutlined from '../Icons/PlusOutlined/PlusOutlined';
import MinusOutlined from '../Icons/MinusOutlined/MinusOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
