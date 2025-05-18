import React from "react";

const ProductItem = React.memo(({ product }) => {
  return (
    <li>
      {product.name} - ${product.price.toFixed(2)}
    </li>
  );
});

ProductItem.displayName = "ProductItem";

export default ProductItem;
