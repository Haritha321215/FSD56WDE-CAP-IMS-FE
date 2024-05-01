import productServices from "../services/productServices";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const products = await productServices.getProducts();
  return { products };
};
function Products() {
  const { products } = useLoaderData();
  return (
    <div>
      <ul>
        {products.data.products.length > 0 ? (
          products.data.products.map((product) => (
            <li key={product._id}>
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
}

export default Products;
