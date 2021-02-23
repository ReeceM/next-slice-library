/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import { FeatureCard, RightImage } from '../../Components'
import { array, bool, shape, string, object } from 'prop-types';


const RightCard = ({ slice, linkResolver }) => (
  <Box
    as="figure"
    // className="relative md:flex md:flex-row-reverse"
    sx={{
      display: ['block', 'flex'],
      position: 'relative',
      margin: 0,
      flexDirection: ['row-reverse', 'row']
    }}
  >
    <RightImage slice={slice} />
    <Box
      as="figcaption"
      __themeKey="captions"
      variant="feature"
      sx={{
        left: ['3rem', null],
        zIndex: '10',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'start',
        position: 'relative'
      }}
    // className="md:m-0 m-auto flex md:w-1/2 -mt-10 md:mt-12 items-start justify-start z-10 relative"
    >
      <FeatureCard slice={slice} linkResolver={linkResolver} />
    </Box>
  </Box>
);

RightCard.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      featureImage: object.isRequired,
      description: string,
      actionText: string,
      actionLink: array,
      placeLeft: bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RightCard;

