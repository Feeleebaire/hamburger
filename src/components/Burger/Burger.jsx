import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  let transformeIngredient = Object.keys(props.ingredients)
    .map(igKey => {
       return [...Array(props.ingredients[igKey])].map((_, i) => {
         console.log(igKey);
         return <BurgerIngredient key={igKey + i} type={igKey}/>;
       });
    })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
   console.log(transformeIngredient);
   if (transformeIngredient.length === 0){
      transformeIngredient = <p>ajoute un ingredient tocard !</p>
   }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
        {transformeIngredient}
      <BurgerIngredient type="bread-bottom"/>
    </div>
 );
}

export default burger;
