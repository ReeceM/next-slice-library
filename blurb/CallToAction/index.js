/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { array, shape } from 'prop-types';
import {  Slice, Container } from '../../components'
import { DefaultSlice, SimpleSlice } from './Variants';

const CallToAction = ({ slice, linkResolver }) => (
  <Slice style={{
    backgroundColor: slice?.primary?.backgroundColor
  }}>
    <Container>
      {
        slice.primary.simple === true
          ? <SimpleSlice slice={ slice } linkResolver={ linkResolver } />
          : <DefaultSlice slice={ slice } linkResolver={ linkResolver } />
      }
    </Container>
  </Slice>
);

CallToAction.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      items: array,
    }).isRequired,
  }).isRequired,
};

export default CallToAction;
