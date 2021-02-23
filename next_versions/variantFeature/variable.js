/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import { Slice } from '../../components'
import { array, bool, shape, string, object } from 'prop-types';
import LeftCard from './Variant/LeftCard';
import RightCard from './Variant/RightCard';


const FeatureSlice = ({ slice, linkResolver }) => (
  <Slice>
    {
      slice.primary.placeLeft
        ? <LeftCard slice={slice} linkResolver={linkResolver} />
        : <RightCard slice={slice} linkResolver={linkResolver} />
    }
  </Slice>
);

FeatureSlice.propTypes = {
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

export default FeatureSlice;

