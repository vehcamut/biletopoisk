import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren } from 'react'
import classes from './input.module.scss';
import classnames from 'classnames'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
  name: string;
  label?: string;
}

const Input: FunctionComponent<InputProps> = ({ name, label, ...rest }) => {
  console.log(rest)
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
