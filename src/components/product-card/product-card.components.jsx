import { CartContext } from "../contexts/cart.context";
import Button from "./../button/button.components";
import "./product-card.styles.scss";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const { setIsCartOpen } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsCartOpen(true);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonTypes="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
