import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 10,
  cheese: 5,
  bacon: 2
}


class BurgerBuilder extends Component {

  state= {
    ingredients: {
       salad: 0,
       bacon: 0,
       cheese: 0,
       meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients).map( igKey => {
      return ingredients[igKey]
    }).reduce((sum, el) => {
       return sum + el;
    }, 0)

    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    console.log(INGREDIENT_PRICES[type]);
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);

  }

  removeIngredientHandler = (type)=> {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0){
      return;
    }
    const updateCount = oldCount -1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;
     const priceAddition = INGREDIENT_PRICES[type];
    console.log(INGREDIENT_PRICES[type]);
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice,ingredients: updateIngredients});
    this.updatePurchaseState(updateIngredients);
  }

  purchaseHandler = ()  =>{
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    alert('you continue');
    this.setState({purchasing: true})

  }


  render(){

    const desableInfo = {
      ...this.state.ingredients
    };

    for (let key in desableInfo){
      desableInfo[key] = desableInfo <= 0
    }
    return(

      <Fragment>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <OrderSummary
            price = {this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCanceledHandler={this.purchaseCancelHandler}
            purchaseContinue = {this.purchaseContinueHandler}/>
           </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded= {this.addIngredientHandler}
            ingredientDeleted={this.removeIngredientHandler}
            disable={desableInfo}
            price = {this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered= {this.purchaseHandler}
          />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
