import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren } from 'react'
import classes from './input.module.scss';
import classnames from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: FunctionComponent<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div 
      className={classes['input-wrapper']}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input 
        className={classes.input}
        id={ name }
        { ...rest }
      />
    </div>
  )
}

Input.defaultProps = {
  label: undefined,
}

export default Input;
