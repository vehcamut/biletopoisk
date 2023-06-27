'use client';

import React, { FunctionComponent } from 'react'
import classes from './bigTicketCard.module.scss';
import classnames from 'classnames'
import Image from 'next/image'
import Button from '../Button/Button';
import PlusOutlined from '../Icons/PlusOutlined/PlusOutlined';
import MinusOutlined from '../Icons/MinusOutlined/MinusOutlined';
// import Input, { InputProps } from '../Input/Input';


export interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
}
interface BigTicketCardProps {
  movie: Movie | undefined;
  counter: number;
  onAddOne: () => void;
  onRemoveOne: () => void;
  onRemove?: () => void;
}

const BigTicketCard: FunctionComponent<BigTicketCardProps> = ({ movie,counter, onAddOne, onRemoveOne }) => {
  //const [counter, setCounter] = useState(0);
  return (
    <article className={classes['card']}>
      {
        movie ?
        <>
          <div className={classes['poster']}>
            <Image 
              className={classes['poster-image']}
              src={movie.posterUrl}
              alt='Потсер фильма'
              fill={true}
            />
          </div>
          <div className={classes['body']}>
            <div className={classes['header']}>
              <div className={classes['title']}>
                {movie.title}
              </div>
              <div className={classes['buttonbar']}>
                <Button 
                  type='primary'
                  disabled={!counter}
                  icon={<MinusOutlined className={classes['button']}/>}
                  onClick={() => onRemoveOne()}
                />
                <div className={classes['counter']}>
                  {counter || 0}
                </div>
                <Button
                  onClick={() => onAddOne()}
                  type='primary'
                  disabled={counter === 30}
                  icon={<PlusOutlined className={classes['button']}/>}
                />
              </div>
            </div>
            <div className={classes['description']}>
              <div className={classes['description-item']}>
                <div className={classes['description-label']}>Жанр: </div>
                <div className={classes['description-text']}>{movie.genre}</div>
              </div>
              <div className={classes['description-item']}>
                <div className={classes['description-label']}>Год выпуска: </div>
                <div className={classes['description-text']}>{movie.releaseYear}</div>
              </div>
              <div className={classes['description-item']}>
                <div className={classes['description-label']}>Рейтинг: </div>
                <div className={classes['description-text']}>{movie.rating}</div>
              </div>
              <div className={classes['description-item']}>
                <div className={classes['description-label']}>Режиссер: </div>
                <div className={classes['description-text']}>{movie.director}</div>
              </div>
            </div>
            <div className={classes['description']}>
              <div className={classnames(classes['description-item'], classes['description-item_vertical'])}>
                <div className={classes['description-label']}>Описание </div>
                <div className={classes['description-text']}>{movie.description}</div>
              </div>
            </div>          
          </div>
        </>
        : null
      }
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

export default BigTicketCard;
