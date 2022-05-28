import theme from ".";

const dark = {
  ...theme,
  title: "dark",
  colors: {
    ...theme.colors,
    background: "#1c1c1c",
  },
  borders: {
    default: "1px solid #ffffff",
  },
  text: {
    ...theme.text,
    default: {
      ...theme.text.default,
      color: "#ffff",
    },
    brand: {
      ...theme.text.brand,
      color: "#ffff",
    },
    price: {
      ...theme.text.price,
      color: "#ffff",
    },
  },
  shadows: {
    default: "0px 4px 20px rgba(36,36,36,255);",
  },
};

export default dark;
