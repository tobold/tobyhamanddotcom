export type themeType = { [key: string]: string }

const colors = {
  black: '#000000',
  black10: '#191919',
  white10: '#e5e5e5',
  white: '#ffffff',
  pink: 'hotpink',
  green: 'green',
};

export const lightTheme = {
  primary: colors.black,
  primaryHover: colors.black10,
  secondary: colors.white,
  secondaryHover: colors.white10,
  background: colors.white10,
};

export const darkTheme = {
  primary: colors.white,
  primaryHover: colors.white10,
  secondary: colors.black,
  secondaryHover: colors.black10,
  background: colors.black10,
};
