import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './basketOutlined.module.scss';
import classnames from 'classnames'
import Icon from '../Icon/Icon';

interface BasketOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const BasketOutlined: FunctionComponent<BasketOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['basket-outlined'], className]} direction={direction}/>     
  )
}

export default BasketOutlined;
