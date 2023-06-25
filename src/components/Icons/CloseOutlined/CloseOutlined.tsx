import React, { FunctionComponent } from 'react'
import classes from './closeOutlined.module.scss';
import Icon from '../Icon/Icon';

interface CloseOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const CloseOutlined: FunctionComponent<CloseOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['close-outlined'], className]} direction={direction}/>     
  )
}

export default CloseOutlined;
