import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No products added yet.</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </ul>
  );
};

ProductList.displayName = "ProductList";
export default ProductList;
