/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { array, shape } from 'prop-types';
import { Slice, Container } from '../../components'
import { jsx } from 'theme-ui';
import { TextOnly, ImageAndText } from './Variants'

const HeroSlice = ({ slice, linkResolver }) => (
  <Slice
    sx={{
      // overflowX: 'clip',
      backgroundColor: slice.backgroundColor,
      display: 'flex',
      justifyItems: 'center',
      alignItems: slice.primary.image == undefined ? 'start' : 'center'
    }}
  >
    <Container>
      {
        slice.primary.image !== undefined ? (
          <ImageAndText slice={slice}>
            <TextOnly
              slice={slice}
              linkResolver={linkResolver}
            />
          </ImageAndText>
        )
          : (
            <TextOnly slice={slice} linkResolver={linkResolver} />
          )
      }
    </Container>
  </Slice>
);

HeroSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HeroSlice;
