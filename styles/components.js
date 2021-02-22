export const pricingCard = {
  padding: 2,
  borderRadius: 'card',
  bg: 'squeeze',
  color: 'secondary',
  boxShadow: 'shadow',
  width: ['100%', '83%'],
  maxWidth: '100%',
}

export const slider = {
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
}

export const tabs = {
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
}
