const breakpoints = [
  `640px`, // 40rem
  `896px`, // 56rem
  `1280px`, // 80rem
]

const baseColors = {
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

const headings = {
  level: {
    1: {
      fontSize: [
        '1.625rem', // 26px
        '2rem', // 32px
        '2.5rem', // 40px
        '2.75rem', // 44px
      ],
      lineHeight: 1.3,
    },
    4: {
      lineHeight: 1.2,
    },
  },
}

export default {
  background: {
    default: {
      bg: 'white',
      color: 'dark',
    },
    dark: {
      bg: 'dark',
      color: 'white',
    },
    secondary: {
      bg: 'secondary',
      color: 'dark',
    },
  },
  breakpoints,
  buttons: {
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
  },
  slider: {
    arrow: {
      background: 'transparent',
      border: '2px dotted transparent',
      color: 'dark',
      '&:focus': {
        borderColor: 'dark',
      },
      '&:hover': {
        color: 'border',
      },
    },
  },
  colors: {
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
  },
  container: {
    inner: {
      py: '8vw',
      px: '2rem',
    },
    grid: {
      width: '100%',
    },
    wrapper: {
      maxWidth: ['90%', null, null, '75%'],
      m: '0 auto',
    },
    eyebrow: {
      color: 'primary',
    },
    description: {
      mr: 'auto',
      ml: 'auto',
      mb: 'hPadding',
      maxWidth: '38rem',
      fontSize: ['kicker', null, null, 'lg'],
      fontWeight: 'lean',
      p: {
        lineHeight: 'desc',
        display: 'inline-block',
      },
      'p:last-of-type': {
        mb: '0',
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Inter", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    tiny: '.875rem',
    base: '0.9rem',
    kicker: '1.15rem',
    lg: '1.4rem',
    xl: '2.75rem',
  },
  fontWeights: {
    lean: '350',
    body: '400',
    normal: '500',
    heading: '600',
  },
  boxShadow: {
    /**
     * TailwindCSS v1 shadows
     */
    'shadow-xs': '0 0 0 1px rgba(0, 0, 0, 0.05)',
    'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    'shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    'shadow-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'shadow-outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
    'shadow-none': 'none',
  },

  lineHeights: {
    heading: '1.25',
    button: '1.3',
    desc: '1.45',
    body: '1.625',
  },
  radii: {
    button: '2px',
    card: '8px',
  },
  width: {
    full: '100%',
  },
  height: {
    screen: '100vh'
  },
  space: {
    // Legacy vuejs scales.
    hPaddingHalf: '1rem',
    hPadding: '2rem',
    cPadding: '1.25rem',
    cMargin: '1rem',

    vMargin: '2.5rem',
    vMargin2x: '5rem',

    vSpace: '8vw',

    // New spaces scale.
    none: 0,
    xxsmall: '0.25rem', // 4px
    xsmall: '0.5rem', // 8px
    small: '1rem', // 16px
    medium: '2rem', // 32px
    large: '4rem', // 64px
    xlarge: '8rem', // 128px
    xxlarge: '16rem', // 256px
    xxxlarge: '32rem', // 512px
  },
  tabs: {
    default: {
      item: {
        '&::after': {
          height: 2,
          left: 0,
        },
      },
    },
    vertical: {
      display: [null, 'flex'],
      label: {
        pt: ['small', 0],
        display: 'block',
        ':focus': {
          outline: '3px solid currentColor',
          zIndex: '1',
        },
      },
      content: {
        width: '100%',
      },
      item: {
        width: '100%',
        mx: 0,
        pr: 'medium',
        borderTop: '1px solid',
        borderColor: 'grey90',
        ':last-of-type:not(.active)': {
          borderBottom: '1px solid',
          borderColor: 'grey90',
        },
      },
    },
  },

  hero: {
    image: {
      boxShadow: 'shadow-lg',
      width: ['75%', '100%'],
    }
  },

  navbar: {
    default: {
      bg: 'white',
      padding: ['none xsmall', 'none 5rem'],
      px: '3rem',
      container: {
        width: '100%',
        maxWidth: ['640px', '768px', '1280px'],
      }
    },
    mobile: {
      bg: 'white',
      borderRadius: 'card',
      maxHeight: '32rem',
      overflowY: 'scroll',
      boxShadow: 'shadow-2xl',
      flexDirection: 'column',
      justifyContent: 'start',
      padding: '1rem 2rem'
    }
  },

  footer: {
    colors: {
      bg: 'powder',
      text: 'white',
    },
    simple: {
      flexDirection: ['column', 'row'],
      justifyContent: 'space-between',
      color: 'white',
      links: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: [0, 'auto'],
        maxWidth: '100%',
        marginTop: ['small', null],
        width: ['100%', '43%'],
        '& > *': {
          marginLeft: 'small',
        },
      }
    },
  },

  // Default Components

  links: {
    nav: {
      // px: 20,
      py: 1,
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '0.2em',
      cursor: 'pointer',
      borderTop: '2px solid transparent',
      '&:hover': {
        borderTop: '2px solid',
        borderTopColor: 'jam'
      }
    }
  },

  cards: {
    default: {
      bg: 'secondary',
      color: 'dark',
    },
    primary: {
      padding: 2,
      borderRadius: 'card',
      bg: 'squeeze',
      color: 'secondary',
      boxShadow: 'shadow-md',
      width: ['100%', '50%'],
      maxWidth: '100%',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
    feature: {
      bg: 'black',
      color: 'white',
      boxShadow: 'shadow-md',
      textAlign: 'left',
      padding: ['small', 'medium'],
      width: ['83.33%', '95%']
      // borderRadius: 'card' // can use this for a softer layout
    }
  },

  captions: {
    feature: {
      width: [null, '50%'],
      margin: ['auto', null, '0'],
      marginTop: ['-3rem', null, 'large'],
    }
  },

  styles: {
    root: {
      color: 'text',
      bg: 'background',
      fontSize: 'base',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      m: 0,
      p: 0,
    },
    'h1, h2, h3, h4': {
      mt: 0,
      mb: '2rem',
    },
    h1: {
      ...headings.level[1],
    },
    p: {
      fontSize: 'body',
      mt: 0,
      mb: 0,
    },
    img: {
      maxWidth: '100%',
    },
  },
  text: {
    desc: {
      fontSize: 'lg',
      fontWeight: 'lean',
      lineHeight: 'desc',
      mx: 'auto',
      mt: 'vMargin',
      maxWidth: '42rem',
    },
  },
}
