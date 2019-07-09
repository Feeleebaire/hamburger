import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];


const buildControls = (props) => (
  <div className={classes.BuildControls}>
      <p>Current price : <strong>{props.price.toFixed(2)}$</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.type}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          remove={()=> props.ingredientDeleted(ctrl.type)}
          disablo={props.disable[ctrl.type]}/>
        ))}
      <button
        onClick= {props.ordered}
        className={classes.OrderButton}
        disabled={!props.purchasable}
        >ORDER NOW</button>
  </div>

);

export default buildControls;
