"use client"; 

import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import classes from './collapse.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';

interface CollapseProps extends PropsWithChildren {
  header: string;
}

const Collapse: FunctionComponent<CollapseProps> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes['collapse']}>
      <div className={classes['collapse-header']} onClick={() => setIsOpen(!isOpen)}>
        {header}
        <ArrowOutlined direction={isOpen ? 'down' : 'up'} className={classes['collapse-icon']}/>
      </div>
      <div 
        className={
          classnames(
            classes['collapse-body'],
            isOpen ? classes['collapse-body_opened'] : classes['collapse-body_closed']
          )
        }
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse;
