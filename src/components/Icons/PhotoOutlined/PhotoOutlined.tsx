import React, { FunctionComponent } from 'react'
import classes from './photoOutlined.module.scss';
import Icon from '../Icon/Icon';

interface PhotoOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const PhotoOutlined: FunctionComponent<PhotoOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['photo-outlined'], className]} direction={direction}/>     
  )
}

export default PhotoOutlined;
