import { useContext } from "react";

import "./product-card.styles.scss";

import Button from "./../button/button.components";
import { CartContext } from "./../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart, setIsCartOpen } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonTypes="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
