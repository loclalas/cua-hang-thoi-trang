import CategoriesItem from "../category-item/components-item";
import "./directory.slytes.scss";

const Directory = (props) => {
  const { categories } = props;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
