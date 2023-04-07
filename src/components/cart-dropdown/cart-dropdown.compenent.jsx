import Button from "./../button/button.components";

import "./cart-dropdown.styles.scss";
import CartItem from "./../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;