/**
 *
 */
export const baseColors = {
  primary: "#710921",
  secondary: "#080b29",
  jam: "#a00f66",
  shiraz: "#aa0a36",
  denim: "#0f4fb9",
  point: "#192669",
  blue: "#61a0ea",
  squeeze: "#eef4f9",
  powder: "#3c3c54",
  grey0: '#000000',
  grey20: '#333333',
  grey90: '#e6e6e6',
  grey53: '#878787',
  white: '#fff',
}

export const colors = {
  ...baseColors,
  textGrey: baseColors.grey53,
  transparent: 'transparent',
  dark: baseColors.grey0,
  background: "#fff",
  text: "#000",
  body: baseColors.grey0,
  border: '#ccc',
  modes: {
    dark: {
      background: baseColors.grey0,
      text: baseColors.white,
    },
  },
}
