import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './arrow.module.scss';
import classnames from 'classnames'
import Icon from '../Icon/Icon';

interface ArrowOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ArrowOutlined: FunctionComponent<ArrowOutlinedProps> = ({ direction }) => {
  return (
    <Icon className={classes['arrow-outlined']} direction={direction}/>
  )
}

export default ArrowOutlined;
