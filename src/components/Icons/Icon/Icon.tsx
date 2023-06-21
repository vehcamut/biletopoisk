import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './icon.module.scss';
import classnames from 'classnames'

interface IconProps extends PropsWithChildren {
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const Icon: FunctionComponent<IconProps> = ({ direction, className }) => {
  return (
    <div
      className={
        classnames(
          classes['icon'],
          classes[`icon_${direction}`],
          className,
        )
      }
    />
  )
}

Icon.defaultProps = {
  direction: 'up',
  className: undefined,
}

export default Icon;
