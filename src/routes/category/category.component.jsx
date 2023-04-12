import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./category.styles.scss";
import ProductCard from "./../../components/product-card/product-card.components";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  //   const param = useParams();
  //   console.log(param);
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap[category]]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Category;
