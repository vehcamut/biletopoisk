import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import classes from './input.module.scss';

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

export default Input;
