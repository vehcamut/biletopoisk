"use client"; 

import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import classes from './footer.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Button from '../Button/Button';
import BasketOutlined from '../Icons/BasketOutlined/BasketOutlined';
import Link from 'next/link';

interface FooterProps extends PropsWithChildren {
  //header: string;
}

const Footer: FunctionComponent<FooterProps> = ({ children }) => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <footer className={classes['footer']}>
        <Link
          className={classes['footer-button']}
          href={'/qa'}
        >
          Вопросы-ответы
        </Link>
        <Link
          className={classes['footer-button']}
          href={'/about'}
          scroll={true}
        >
          О нас
        </Link>
        {/* <Button type='text' >
          Впросы-ответы
        </Button>
        <Button type='text' className={classes['footer-button']}>
          О нас
        </Button> */}
      </footer>
        {/* <div className={classes['header-title']}>
          Билетопоиск
        </div>
        <div className={classes['header-right']}>
          {!!counter && 
            <div className={classes['header-counter']}>
              {counter}
            </div>
          }
          <Button
            className={classes['header-button']}
            type='text'
            icon={
              <BasketOutlined
                className={classes['header-button-icon']}
              />
            }     
          />
        </div>
      </а>
      <div className={classes['header-pug']}/> */}
    </>
  )
}

export default Footer;
