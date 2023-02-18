const fonts = {
  poppins: {
    regular: "poppins-regular",
    medium: "poppins-medium",
    semiBold: "poppins-semibold",
  },
  inter: {
    regular: "inter-regular",
    medium: "inter-medium",
    semiBold: "inter-semibold",
    bold: "inter-bold",
  },
};

export const typography = {
  ...fonts,
  primary: fonts.poppins,
  secondary: fonts.inter,
};
