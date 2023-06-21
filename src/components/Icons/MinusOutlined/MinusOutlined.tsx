import React, { FunctionComponent } from 'react'
import classes from './minusOutlined.module.scss';
import Icon from '../Icon/Icon';

interface MinusOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const MinusOutlined: FunctionComponent<MinusOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['minus-outlined'], className]} direction={direction}/>     
  )
}

export default MinusOutlined;
