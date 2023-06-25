import React, { FunctionComponent, PropsWithChildren } from 'react'
import classes from './button.module.scss';
import classnames from 'classnames'

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  type?: 'primary' | 'default' | 'text';
  icon?: React.ReactNode | undefined;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({ type, icon, children, disabled, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        classnames(
          classes.button, 
          classes[`button_${type}`],
          !children ? classes[`button_empty`] : null,
          className
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
