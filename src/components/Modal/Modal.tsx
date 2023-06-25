'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './modal.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Button from '../Button/Button';
import CloseOutlined from '../Icons/CloseOutloned/CloseOutlined';
// import Input, { InputProps } from '../Input/Input';

interface ModalProps extends PropsWithChildren {
  text: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  onOk: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ text, title, isOpen, onClose, onCancel, onOk }) => {
//   window.addEventListener('scroll',()=> console.log(window.scrollY)
// )
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(".modal-container")
    //document.addEventListener('scroll', (e) => e.preventDefault())
    // const checkIfClickedOutside = (e: MouseEvent) => {
    //   const target = e.target as HTMLElement;
    //   if (
    //     isOpen && 
    //     dropdownMenu.current && 
    //     !dropdownMenu.current.contains(target) &&
    //     dropdownInput.current && 
    //     !dropdownInput.current.contains(target)
    //   ) {
    //     onCancel();
    //     //setIsOpen(false);
    //   }
    // }
    // document.addEventListener("click", checkIfClickedOutside);
    setMounted(true)
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    //document.body.style.position = isOpen ? 'fixed' : '';
    //document.body.style.overflowY = isOpen ? 'scroll' : '';
  })
  const plugRef = useRef<HTMLInputElement>(null);
  const dropdownMenu = useRef<HTMLDivElement>(null);
  //const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<{label: string, value: string} | undefined>(undefined);
  
  //
  return (mounted && ref.current) ? 
    createPortal(
      <div className={ classnames(
        classes['plug'],
        isOpen ? classes['plug_visible'] : ''
        )}
        onClick={(e) => {
          console.log('1');
          if (e.target as HTMLElement === plugRef.current)
            onClose()
        }}
        ref={plugRef}
      >
        <div className={classes['modal']}>
          <div className={classes['header']}>
            <h4>
              {title}
            </h4>
            <Button 
              type='text'
              icon={<CloseOutlined className={classes['close-icon']}/>}
              onClick={onCancel}
            />
          </div>
          <div className={classes['body']}>
            {text}
          </div>
          <div className={classes['footer']}>
            <Button type='primary' onClick={onOk}>
              Да
            </Button>
            <Button onClick={onCancel}>
              Нет
            </Button>
          </div>
        </div>
      </div>, 
    ref.current
    ) : 
    null;
}

export default Modal;
