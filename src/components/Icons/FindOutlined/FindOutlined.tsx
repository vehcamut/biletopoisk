import React, { FunctionComponent } from 'react'
import classes from './findOutlined.module.scss';
import Icon from '../Icon/Icon';

interface FindOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const FindOutlined: FunctionComponent<FindOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['close-outlined'], className]} direction={direction}/>     
  )
}

export default FindOutlined;
