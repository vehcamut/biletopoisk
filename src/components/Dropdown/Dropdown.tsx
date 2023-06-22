'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './dropdown.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
// import Input, { InputProps } from '../Input/Input';

interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: { label: string, value: string }[];
}

const Dropdown: FunctionComponent<DropdownProps> = ({ name, label, options, ...rest }) => {
  const dropdownInput = useRef<HTMLInputElement>(null);
  const dropdownMenu = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<{label: string, value: string} | undefined>(undefined);
  const checkIfClickedOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      isOpen && 
      dropdownMenu.current && 
      !dropdownMenu.current.contains(target) &&
      dropdownInput.current && 
      !dropdownInput.current.contains(target)
    ) {
      setIsOpen(false);
    }
  }
  document.addEventListener("click", checkIfClickedOutside);
  return (
    <>
      <div 
        className={classes['input-wrapper']}
      >
        {<div className={classes['input-label']}>
          {/* <ArrowOutlined className={classes['input-icon']}/> */}
          {label}
        </div>}
        <input
          { ...rest }
          value={value?.label || ''}
          readOnly
          ref={dropdownInput} 
          className={
            classnames(
              classes.input,
              isOpen ? classes["input_opened"] : classes["input_closed"]
            )
          }
          id={ name }
          onClick={() => setIsOpen(!isOpen)}
        />
        
      </div>
      {
        createPortal(
          <div
            ref={dropdownMenu}
            className={classes["dropdown-menu"]}
            style={ dropdownInput.current ? {
              top: 
                dropdownInput.current.offsetTop + 
                dropdownInput.current.getBoundingClientRect().height,
              left: dropdownInput.current.offsetLeft,
              display: isOpen ? 'block' : 'none'
            } : {
              display: isOpen ? 'block' : 'none'
            }
          }
          >
              <>
              <div
                className={classes["dropdown-item"]}
                key={undefined}
                onClick={() => {
                  setValue(undefined);
                  setIsOpen(false);
                } }
              >
                Не выбран
              </div>
              {options.map(
                (option) => 
                  <div
                    className={classes["dropdown-item"]}
                    key={option.value}
                    onClick={() => {
                      setValue(option);
                      setIsOpen(false);
                    } }
                  >
                    {option.label}
                  </div>
              )}
            </>
          </div>, 
        document.body)
      }
    </>
  )
}

export default Dropdown;
