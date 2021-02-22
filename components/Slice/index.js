import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui';

const Slice = ({ children, ...props }) => {
  return (
    <Box
      as="div"
      __themeKey="slice"
      __css={{
        margin: '3rem auto',
        paddingX: ['xsmall', 'medium'],
        paddingY: ['small', 'large'],
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
      {...props}
    >
      {children}
    </Box>
  )
}


Slice.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slice
