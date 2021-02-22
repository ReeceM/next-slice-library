import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui';

const Slice = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      __themeKey="slice"
      __css={{
        margin: '3em auto',
        padding: ['small', 'medium'],
        textAlign: 'center',
        maxWidth: 'full',
      }}
    >
      {children}
    </Box>
  )
}


Slice.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slice
