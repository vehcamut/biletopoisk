"use client"; 

import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import classes from './header.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Button from '../Button/Button';
import BasketOutlined from '../Icons/BasketOutlined/BasketOutlined';
import Link from 'next/link';

interface HeaderProps extends PropsWithChildren {
  //header: string;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <header className={classes['header']}>
        <div className={classes['header-title']}>
          Билетопоиск
        </div>
        <div className={classes['header-right']}>
          {!!counter && 
            <div className={classes['header-counter']}>
              {counter}
            </div>
          }
          <Link 
            className={classes['header-button']}
            href={'./'}
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
