import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui';

const Container = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      __themeKey="container"
      __css={{
        position: 'relative',
        maxWidth: ['640px', '768px', '1024px', '1280px'],
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
