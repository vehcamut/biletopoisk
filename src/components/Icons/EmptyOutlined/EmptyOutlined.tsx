import React, { FunctionComponent } from 'react'
import classes from './emptyOutlined.module.scss';
import Icon from '../Icon/Icon';

interface EmptyOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const EmptyOutlined: FunctionComponent<EmptyOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['close-outlined'], className]} direction={direction}/>     
  )
}

export default EmptyOutlined;
