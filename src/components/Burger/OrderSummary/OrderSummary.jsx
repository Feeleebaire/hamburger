import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key ={igKey}>{igKey}: {props.ingredients[igKey]}</li>
      )
  })
  return (
      <Aux>
        <h3>Your Order</h3>
        <p>Ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total price: {props.price} $</strong></p>
        <p>Continue to CO ?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceledHandler}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
      </Aux>

    )
}


export default orderSummary;
