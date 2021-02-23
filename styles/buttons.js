export const buttons = {
  default: {
    bg: 'shiraz',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      backgroundColor: 'secondary',
      boxShadow: 'shadow-md',
      transform: 'translateY(-2px)'
    },
  },
  primary: {
    bg: 'primary',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      backgroundColor: 'shiraz',
      boxShadow: 'shadow-md',
      transform: 'translateY(-2px)'
    },
  },
  form: {
    bg: 'shiraz',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '999px',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      backgroundColor: 'shiraz',
      boxShadow: 'shadow-md',
      transform: 'translateY(-2px)'
    },
  },
  secondary: {
    bg: 'white',
    color: 'black',
    border: '1px solid currentColor',
    lineHeight: '1.15',
    cursor: 'pointer',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      backgroundColor: 'secondary',
      color: 'white',
      boxShadow: 'shadow-md',
      transform: 'translateY(-2px)'
    },
  },
  light: {
    bg: 'white',
    color: 'grey0',
    border: '1px solid',
    borderColor: 'grey0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'grey90',
    },
  },
  text: {
    bg: 'transparent',
    color: 'primary',
    fontWeight: 'normal',
    fontSize: 'base',
    cursor: 'pointer',
    '&:hover': {
      color: 'shiraz',
      textDecoration: 'underline',
    },
  },

  close: {
    color: 'primary',
    cursor: 'pointer',
  },
  navbar: {
    primary: {
      padding: '1rem',
      lineHeight: '0.3',
      borderRadius: '23px',
      fontSize: 'small',
      boxShadow: 'shadow',
      cursor: 'pointer',
      bg: 'shiraz',
      color: 'white',
      transition: 'all 100ms ease-in-out',
      '&:hover': {
        backgroundColor: 'secondary',
        boxShadow: 'shadow-md',
        transform: 'translateY(-2px)'
      },
    }
  }
}
