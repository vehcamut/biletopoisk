'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './ticketCard.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Image from 'next/image'
import Button from '../Button/Button';
import PlusOutlined from '../Icons/PlusOutlined/PlusOutlined';
import MinusOutlined from '../Icons/MinusOutlined/MinusOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PhotoOutlined from '../Icons/PhotoOutlined/PhotoOutlined';
import CloseOutlined from '../Icons/CloseOutlined/CloseOutlined';
// import Input, { InputProps } from '../Input/Input';

interface TicketCardProps {
  id: string;
  imageSrc: string;
  title: string;
  genre: string;
  counter: number;
  onAddOne: () => void;
  onRemoveOne: () => void;
  onRemove?: () => void;
   //onClick1: (id: string) => void;
  // name: string;
  // label?: string;
  // options: { label: string, value: string }[];
}

const TicketCard: FunctionComponent<TicketCardProps> = (
  { imageSrc, 
    genre, 
    title, 
    id,
    counter,
    onAddOne,
    onRemoveOne,
    onRemove
  }) => {
  //const router = useRouter();
  //const [counter, setCounter] = useState(0);
  return (
    <article className={classes['ticketcard']}>
      <div className={classes['ticketcard-leftbar']}>
        <PhotoOutlined className={classes['poster-empty']}/>
        <Image 
          className={classes['ticketcard-image']}
          src={imageSrc}
          alt='Постер фильма'
          fill={true}
          //style={{objectFit: 'fill'}}
          //width={}
        />

      </div>
      <div className={classes['ticketcard-body']}>
        <Link 
          href={`movies/${encodeURIComponent(id)}`} 
          className={classes['ticketcard-title']} 
        >
          {title}
        </Link>
        <div className={classes['ticketcard-genre']}>
          {genre}
        </div>
      </div>
      <div className={classes['ticketcard-rightbar']}>
        <Button
          onClick={() => onRemoveOne()}
          type='primary'
          disabled={!counter}
          icon={<MinusOutlined className={classes['ticketcard-button']}/>}
        />
        <div>
          {counter || 0}
        </div>
        <Button
          onClick={() => onAddOne()}
          type='primary' 
          disabled={counter === 30} 
          icon={<PlusOutlined className={classes['ticketcard-button']}/>}
        />
      </div>
      {
        onRemove && <div className={classes['ticketcard-rightbar']}>
          <Button
            onClick={() => onRemove()}
            type='text' 
            icon={<CloseOutlined className={classes['ticketcard-close']}/>}
          />
        </div>
      }
    </article>
  )
}

export default TicketCard;
