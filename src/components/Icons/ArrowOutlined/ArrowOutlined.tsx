import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './arrowOutlined.module.scss';
import classnames from 'classnames'
import Icon from '../Icon/Icon';

interface ArrowOutlinedProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string;
}

const ArrowOutlined: FunctionComponent<ArrowOutlinedProps> = ({ direction, className }) => {
  return (
      <Icon className={[classes['arrow-outlined'], className]} direction={direction}/>     
  )
}

export default ArrowOutlined;
