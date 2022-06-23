import React from 'react';
import style from './Navbar.module.scss';
import home from '../imgs/home.png';
import github from '../imgs/github.png';
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';
import iconSearch from '../imgs/magnifying-glass.png';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipe } from '../features/users/recipesSlice'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {

  const { search } = useSelector(state => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`)
  }

  const handleChange = (e) => {
    dispatch(setRecipe(e.target.value));
  }

  return (
  <nav>
    <Link to='/'>
      <img className={style.home} src= {home} alt='Home' />
    </Link> 
    <form onSubmit={handleSubmit}>
      <img src={iconSearch} alt='search'/>
      <input 
        type='text' 
        value={search}
        onChange={handleChange} 
        className={style.searchTerm} 
        placeholder='Search Recipes...'
      />
    </form>
    <div className={style.link}>
      <a href='https://github.com/GiovanniValastro' target='_blank' rel='noopener noreferrer'>
        <img src= {github} className={style.github} alt="github" />
      </a>
      <a href='https://giovannivalastro.github.io/' target='_blank' rel='noopener noreferrer'>
        <img src= {logo} alt='Logo' />
      </a>
    </div>
  </nav>
  );
}

