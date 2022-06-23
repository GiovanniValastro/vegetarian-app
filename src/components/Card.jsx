import React from 'react';
import style from './Card.module.scss';

export const Card = ({img, title}) => {
  return (
    <figure className={style.card}>
      <img src={img} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

