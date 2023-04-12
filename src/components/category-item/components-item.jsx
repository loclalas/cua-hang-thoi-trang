import "./components-item.styles.scss";
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
  const { category } = props;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <Link to={category.title}>Shop now</Link>
      </div>
    </div>
  );
};

export default CategoriesItem;
