import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './Button.module.scss';
import classnames from 'classnames'

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  type?: 'primary' | 'default' | 'text';
  icon?: React.ReactNode | undefined;
}

const Button: FunctionComponent<ButtonProps> = ({ type, icon, children, disabled }) => {
  return (
    <button
      disabled={disabled}
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
  disabled: false,
}

export default Button;
