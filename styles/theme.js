import { colors } from './';
import { buttons } from './'
import { forms } from './';
import {
  fonts, fontSizes, fontWeights, headings, lineHeights
} from './typography';

export const breakpoints = [
  `640px`, // 40rem
  `896px`, // 56rem
  `1280px`, // 80rem
]

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
    ...buttons
  },

  colors: {
    ...colors
  },
  fonts: {
    ...fonts,
  },
  fontSizes: {
    ...fontSizes,
  },
  fontWeights: {
    ...fontWeights,
  },

  lineHeights: {
    ...lineHeights
  },

  forms: {
    ...forms,
  },

  container: {
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

  radii: {
    button: '2px',
    card: '8px',
  },

  sizes: {
    full: '100%',
    screen: '100vh'
  },

  space: {
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
      container: {
        width: ['90%', '80%',],
        // maxWidth: ['640px', '768px', '1280px'],
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
      fontSize: 'base',
      letterSpacing: '0.01em',
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
