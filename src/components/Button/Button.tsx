import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './Button.module.scss';
import classnames from 'classnames'

interface ButtonProps extends PropsWithChildren {
  type?: 'primary' | 'default';
  icon?: React.ReactNode | undefined;
}

const Button: FunctionComponent<ButtonProps> = ({ type, icon, children }) => {
  return (
    <button 
      className={
        classnames(
          classes.button, 
          classes[`button_${type}`],
          !children ? classes[`button_empty`] : null
        )
      }
    >
      {!!icon && icon}
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  icon: undefined,
}

export default Button;
