import React from 'react';
import { useLocation } from 'react-router-dom'
import style from './Information.module.scss'

export const Information = () => {
  const location = useLocation();
  const {image, title, summary, extendedIngredients, nutrition, analyzedInstructions} = location.state;

  return(
    <>
      <figure className={style.recipeImg}>
        <img src={image} alt='Immage Recipe' />
        <figcaption>{title}</figcaption>
      </figure>
      <section className={style.recipeDescription}>
        <h2>Summary</h2>
        <div className={style.summary}
          dangerouslySetInnerHTML={{__html: summary}}
        />
      </section>
      <main className={style.recipeInformation}>
        <section>
          <h2>Ingredients</h2>
          <ul>
            {extendedIngredients.map(prova => (
              <li key={prova.original}>{prova.original}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Nutritious</h2>
          <ul>
            {nutrition.nutrients.map(nutritious => (
              <li key={nutritious.name}>
                <span className={style.features}>{nutritious.name}: </span>
                <span>{nutritious.amount} {nutritious.unit}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <section className={style.recipeDescription}>
        <h2>Steps</h2>
        <ol >
          {analyzedInstructions.map(instruction => instruction.steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          )))}
       </ol>
      </section>
    </>
  )
}
