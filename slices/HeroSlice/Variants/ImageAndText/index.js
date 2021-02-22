import React from 'react';
import { array, shape, object } from 'prop-types';
import { Box } from 'theme-ui'

const ImageAndText = ({ slice, children }) => (
  <Box
    as="div"
    sx={{
      display: 'flex',
      flexDirection: ['column', 'column', 'row'],
      alignItems: 'center'
    }}
  >
    <div>
      {children}
    </div>
    <Box
      as="figure"
      sx={{
        marginTop: ['medium', null],
        right: [null, null, '-2rem'],
        position: 'relative',
        maxWidth: ['640px', '50%']
      }}
    >
      <Box
        as="img"
        __themeKey="hero"
        variant="image"
        src={slice.primary.image?.url}
        alt={slice.primary.image?.alt}
        width={slice.primary.image?.dimensions.width}
      />
    </Box>
  </Box>
);

ImageAndText.propTypes = {
  slice: shape({
    primary: shape({
      image: object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ImageAndText;
