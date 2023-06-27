import React, { FunctionComponent } from 'react'
import classes from './icon.module.scss';
import classnames from 'classnames'

interface IconProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className: string[];
}

const Icon: FunctionComponent<IconProps> = ({ direction, className }) => {
  return (
    <div
      className={
        classnames(
          classes['icon'],
          classes[`icon_${direction}`],
          ...className,
        )
      }
    />
  )
}

Icon.defaultProps = {
  direction: 'up',
}

export default Icon;
