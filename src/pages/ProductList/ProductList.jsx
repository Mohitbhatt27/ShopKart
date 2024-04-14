// CSS import
import "./ProductList.css";

// Image import
import ProductBox from "../../components/ProductBox/ProductBox";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts, getAllProductsByCategory } from "../../apis/fakeStoreProdApis";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [productList, setProductList] = useState(null);
  const [query] = useSearchParams();

  async function downloadAllProducts(category) {
    const downloadURL = category?getAllProductsByCategory(category):getAllProducts();
    const response = await axios.get(downloadURL);
    setProductList(response.data);
  }

  useEffect(() => {
    const category=(query.get("category"));
    downloadAllProducts(category);
    
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          <FilterProducts />

          {/* list of products */}

          <div className="product-list-box" id="productList">
            {productList &&
              productList.map((product) => (
                <ProductBox
                  productImage={product.image}
                  name={product.title}
                  price={product.price}
                  key={product.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
