'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './dropdown.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import { IOption } from '@/models/IOption';
// import Input, { InputProps } from '../Input/Input';

interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: IOption[];
  initValue?: IOption;
  onSelectOption: (option: IOption | undefined)=> void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ name, label, options, onSelectOption, initValue, ...rest }) => {
//   window.addEventListener('scroll',()=> console.log(window.scrollY)
// )
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(".modal-container")
    const checkIfClickedOutside = (e: MouseEvent) => {
      console.log(isOpen);
      const target = e.target as HTMLElement;
      if (
        //isOpen && 
        dropdownMenu.current && 
        !dropdownMenu.current.contains(target) &&
        dropdownInput.current && 
        !dropdownInput.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", checkIfClickedOutside);
    setMounted(true)
  }, [])
  const dropdownInput = useRef<HTMLInputElement>(null);
  const dropdownMenu = useRef<HTMLDivElement>(null);
  
  const [value, setValue] = useState<{label: string, value: string} | undefined>(initValue);
  
  //
  return (
    <>
      <div 
        className={classes['input-wrapper']}
        style={{position:'relative'}}
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
        (mounted && ref.current) ? createPortal(
          <div
            ref={dropdownMenu}
            className={classes["dropdown-menu"]}
            style={ dropdownInput.current ? {
              top: 
                dropdownInput.current.getBoundingClientRect().top + 
                dropdownInput.current.getBoundingClientRect().height,
              left: dropdownInput.current.getBoundingClientRect().left,
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
                  onSelectOption(undefined);
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
                      onSelectOption(option);
                      setIsOpen(false);
                    } }
                  >
                    {option.label}
                  </div>
              )}
            </>
          </div>, 
        ref.current) : null
      }
    </>
  ) 
}

export default Dropdown;
