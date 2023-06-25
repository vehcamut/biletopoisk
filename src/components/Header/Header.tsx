"use client"; 

import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import classes from './header.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Button from '../Button/Button';
import BasketOutlined from '../Icons/BasketOutlined/BasketOutlined';
import Link from 'next/link';
import { useAppSelector } from '@/app/hooks';

interface HeaderProps extends PropsWithChildren {
  //header: string;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  const basket = useAppSelector((state) => state.basketReducer);

  return (
    <>
      <header className={classes['header']}>
        <Link 
          className={classes['header-title']}
          href={'/movies'}
        >
          Билетопоиск
        </Link>
        <div className={classes['header-right']}>
          {!!basket.counter && 
            <div className={classes['header-counter']}>
              {basket.counter}
            </div>
          }
          <Link 
            className={classes['header-button']}
            href={'/basket'}
            >
            <BasketOutlined
              className={classes['header-button-icon']}
            />
          </Link>
          {/* <Button
            className={classes['header-button']}
            type='text'
            icon={
              <BasketOutlined
                className={classes['header-button-icon']}
              />
            }     
          /> */}
        </div>
      </header>
      <div className={classes['header-pug']}/>
    </>
  )
}

export default Header;
