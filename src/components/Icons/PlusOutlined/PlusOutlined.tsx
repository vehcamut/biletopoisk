import React, { FunctionComponent } from 'react'
import classes from './plusOutlined.module.scss';
import Icon from '../Icon/Icon';

interface PlusOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const PlusOutlined: FunctionComponent<PlusOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['plus-outlined'], className]} direction={direction}/>     
  )
}

export default PlusOutlined;
