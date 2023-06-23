'use client';

import React, { FunctionComponent, InputHTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import classes from './ticketCard.module.scss';
import classnames from 'classnames'
import ArrowOutlined from '../Icons/ArrowOutlined/ArrowOutlined';
import Image from 'next/image'
import Button from '../Button/Button';
import PlusOutlined from '../Icons/PlusOutlined/PlusOutlined';
import MinusOutlined from '../Icons/MinusOutlined/MinusOutlined';
// import Input, { InputProps } from '../Input/Input';

interface TicketCardProps {
  imageSrc: string;
  title: string;
  genre: string;
  // name: string;
  // label?: string;
  // options: { label: string, value: string }[];
}

const TicketCard: FunctionComponent<TicketCardProps> = ({ imageSrc, genre, title }) => {
  const [counter, setCounter] = useState(0);
  // const dropdownInput = useRef<HTMLInputElement>(null);
  // const dropdownMenu = useRef<HTMLDivElement>(null);
  // const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState<{label: string, value: string} | undefined>(undefined);
  // const checkIfClickedOutside = (e: MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   if (
  //     isOpen && 
  //     dropdownMenu.current && 
  //     !dropdownMenu.current.contains(target) &&
  //     dropdownInput.current && 
  //     !dropdownInput.current.contains(target)
  //   ) {
  //     setIsOpen(false);
  //   }
  // }
  // document.addEventListener("click", checkIfClickedOutside);
  return (
    <article className={classes['ticketcard']}>
      <div className={classes['ticketcard-leftbar']}>
        {/* <Image 
          className={classes['ticketcard-image']}
          src={imageSrc}
          alt='Потсер фильма'
          fill={true}
          //style={{objectFit: 'fill'}}
          //width={}
        /> */}
      </div>
      <div className={classes['ticketcard-body']}>
        <div className={classes['ticketcard-title']}>
          {title}
        </div>
        <div className={classes['ticketcard-genre']}>
          {genre}
        </div>
      </div>
      <div className={classes['ticketcard-rightbar']}>
        <Button type='primary' disabled={!counter} icon={<MinusOutlined className={classes['ticketcard-button']}/>}/>
        <div>
          {counter}
        </div>
        <Button type='primary' disabled={counter === 30} icon={<PlusOutlined className={classes['ticketcard-button']}/>}/>
      </div>
    </article>
    // <>
    //   <div 
    //     className={classes['input-wrapper']}
    //     style={{position:'relative'}}
    //   >
    //     {<div className={classes['input-label']}>
    //       {/* <ArrowOutlined className={classes['input-icon']}/> */}
    //       {label}
    //     </div>}
    //     <input
    //       { ...rest }
    //       value={value?.label || ''}
    //       readOnly
    //       ref={dropdownInput} 
    //       className={
    //         classnames(
    //           classes.input,
    //           isOpen ? classes["input_opened"] : classes["input_closed"]
    //         )
    //       }
    //       id={ name }
    //       onClick={() => setIsOpen(!isOpen)}
    //     />
        
    //   </div>
    //   {
    //     createPortal(
    //       <div
    //         ref={dropdownMenu}
    //         className={classes["dropdown-menu"]}
    //         style={ dropdownInput.current ? {
    //           top: 
    //             dropdownInput.current.getBoundingClientRect().top + 
    //             dropdownInput.current.getBoundingClientRect().height,
    //           left: dropdownInput.current.getBoundingClientRect().left,
    //           display: isOpen ? 'block' : 'none'
    //         } : {
    //           display: isOpen ? 'block' : 'none'
    //         }
    //       }
    //       >
    //           <>
    //           <div
    //             className={classes["dropdown-item"]}
    //             key={undefined}
    //             onClick={() => {
    //               setValue(undefined);
    //               setIsOpen(false);
    //               window.scroll(0, 0); 
    //             } }
    //           >
    //             Не выбран
    //           </div>
    //           {options.map(
    //             (option) => 
    //               <div
    //                 className={classes["dropdown-item"]}
    //                 key={option.value}
    //                 onClick={() => {
    //                   setValue(option);
    //                   setIsOpen(false);
    //                 } }
    //               >
    //                 {option.label}
    //               </div>
    //           )}
    //         </>
    //       </div>, 
    //     document.body)
    //   }
    // </>
  )
}

export default TicketCard;
