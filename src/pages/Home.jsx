import React, {useEffect} from 'react';
import style from './Home.module.scss';
import { LoadingTrue, LoadingFalse } from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../features/users/recipesSlice';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom'

export const Home = () => {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&number=20&apiKey=${process.env.REACT_APP_API_KEY}`))
  }, [dispatch]);

  return (
    <>
      {loading ? <LoadingTrue /> : <LoadingFalse />}
      <ul className={style.container}>
        {recipes.map(card => (
          <Link to={`/recipe/${card.id}`} state={card} key={card.id} className={style.routerLink}>
            <Card
              id={card.id}
              title ={card.title}
              img ={card.image}
            />
          </Link>
        ))}
      </ul>
    </>
   );
}