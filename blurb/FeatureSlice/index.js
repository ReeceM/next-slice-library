/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { array, shape, object } from 'prop-types';
import { jsx, Box } from 'theme-ui';
import { Slice } from '../../components'
import { FeatureCard } from './Components';


const FeatureSlice = ({ slice, linkResolver }) => (
  <Slice style={{
    backgroundColor: slice?.primary?.backgroundColor
  }}>
    <figure
      // className="relative md:flex md:flex-row-reverse"
      sx={{
        display: ['block', 'flex'],
        position: 'relative',
        margin: 0,
        flexDirection: slice.primary.placeLeft !== false ? ['row', 'row-reverse'] : ['row-reverse', 'row']
      }}
    >
      <div
        // className="md:w-1/2 m-auto md:m-0 overflow-visible"
        sx={{
          width: [null, null, '50%'],
          margin: ['auto', 0],
          overflow: 'visible',
        }}
      >
        <div
          sx={{
            width: ['83.33%', null, '140%'],
            left: slice.primary.placeLeft !== false ? ['3rem', '-15rem'] : [null, 'calc(100% - 45vw)'],
            maxWidth: [null, null, '80rem'],
            position: 'relative'
          }}
        // className="w-5/6 left-12 md:max-w-7xl md:w-140 md:-left-60 relative"
        >
          <img
            src={slice.primary.featureImage.url}
            alt={slice.primary.featureImage.alt}
            about={slice.primary.copyright}
          />
        </div>
      </div>
      <Box
        as="figcaption"
        __themeKey="captions"
        variant="feature"
        sx={{
          left: slice.primary.placeLeft !== false ? null : ['3rem', null],
          zIndex: '10',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'start',
          position: 'relative'
        }}
      // className="md:m-0 m-auto flex md:w-1/2 -mt-10 md:mt-12 items-start justify-start z-10 relative"
      >
        <FeatureCard slice={slice} linkResolver={ linkResolver}/>
      </Box>
    </figure>
  </Slice>
);

FeatureSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      featureImage: object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FeatureSlice;

