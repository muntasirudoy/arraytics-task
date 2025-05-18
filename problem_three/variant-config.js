export const variantStyles = new Map([
  ["icon-arrow-primary", { bg: "blue", color: "white", icon: true }],
  ["icon-arrow-secondary", { bg: "gray", color: "black", icon: true }],
  ["primary", { bg: "blue", color: "white", icon: false }],
  ["secondary", { bg: "gray", color: "black", icon: false }],
]);

export const getVariantStyle = (variant) =>
  variantStyles.get(variant) || {
    bg: "transparent",
    color: "black",
    icon: false,
  };
