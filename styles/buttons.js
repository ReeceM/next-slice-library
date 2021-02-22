export const buttons = {
  default: {
    bg: 'shiraz',
    color: 'white',
    '&:hover': {
      backgroundColor: 'secondary',
    },
  },
  primary: {
    bg: 'primary',
    color: 'white',
    '&:hover': {
      backgroundColor: 'shiraz',
    },
  },
  secondary: {
    bg: 'white',
    color: 'black',
    border: '1px solid currentColor',
    lineHeight: '1.15',
    '&:hover': {
      backgroundColor: 'secondary',
      color: 'white'
    },
  },
  light: {
    bg: 'white',
    color: 'grey0',
    border: '1px solid',
    borderColor: 'grey0',
    '&:hover': {
      backgroundColor: 'grey90',
    },
  },
  text: {
    bg: 'transparent',
    color: 'primary',
    fontWeight: 'normal',
    fontSize: 'base',
    '&:hover': {
      color: 'shiraz',
      textDecoration: 'underline',
    },
  },
  navbar: {
    primary: {
      padding: '1rem',
      lineHeight: '0.3',
      borderRadius: '23px',
      fontSize: 'small',
      boxShadow: 'shadow',
      bg: 'shiraz',
      color: 'white',
      '&:hover': {
        backgroundColor: 'secondary',
      },
    }
  }
}
