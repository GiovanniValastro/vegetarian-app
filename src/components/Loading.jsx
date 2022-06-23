import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from  'react-loader-spinner';
import style from './Loading.module.scss'

export const LoadingTrue = () => {
  return(
    <div className={`${style.load} ${style.loadTrue}`}>
      <Circles height='70' color= '#00B4CC' />
    </div> 
    )
}

export const LoadingFalse = () => {
  return (
    <h1 className={`${style.load} ${style.loadFalse}`}>
      Enjoy Your Meal!
    </h1> 
  )
}