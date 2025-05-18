const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = () => {
    onAddProduct({
      name,
      price: parseFloat(price),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

AddProductForm.displayName = "AddProductForm";
export default AddProductForm;
