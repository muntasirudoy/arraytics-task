const AddProductForm = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={""} onChange={""} />
      <input type="number" placeholder="Price" value={""} onChange={""} />
    </form>
  );
};

AddProductForm.displayName = "AddProductForm";
export default AddProductForm;
