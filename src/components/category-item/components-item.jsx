import "./components-item.styles.scss";

const CategoriesItem = (props) => {
  const { category } = props;
  console.log(category);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
