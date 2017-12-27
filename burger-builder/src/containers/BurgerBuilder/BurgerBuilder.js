import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger></Burger>
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
