// CSS import
import "./ProductList.css";

// Image import
import ProductBox from "../../components/ProductBox/ProductBox";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts } from "../../apis/fakeStoreProdApis";

function ProductList() {
  const [productList, setProductList] = useState(null);

  async function downloadAllProducts() {
    const response = await axios.get(getAllProducts());
    setProductList(response.data);
  }

  useEffect(() => {
    downloadAllProducts();
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
