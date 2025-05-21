import AddProductForm from "./components/Add-Product-Form";
import ProductList from "./components/Product-List";
import useProducts from "./hooks/useProducts";

const App = () => {
  const { products, addProduct } = useProducts();
  return (
    <div>
      <h1>Product Manager</h1>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};
export default App;
