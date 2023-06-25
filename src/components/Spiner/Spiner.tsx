"use client"; 

import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import classes from './spiner.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Button from '../Button/Button';
import BasketOutlined from '../Icons/BasketOutlined/BasketOutlined';
import Link from 'next/link';


const Spiner = () => {
  return (
    <div>
      <div className={classes['spiner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        Загрузка...
      </div>
    </div>

    // <div className={classes['spiner']} />
  )
}

export default Spiner;
