"use client"; 

import React, {  } from 'react'
import classes from './spiner.module.scss';


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
