/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { array, shape, string } from 'prop-types';
import { Slice, Container, FAQ, Eyebrow } from '../../components'
import { jsx, Box } from 'theme-ui';
import { RichText } from 'prismic-reactjs';

const FaqSlice = ({ slice }) => (
  <Slice>
    <Container>
      {slice.primary.eyebrow ? (<Eyebrow children={slice.primary.eyebrow} />) : null}

      {slice.primary.title ? (<h1>{RichText.asText(slice.primary.title)}</h1>) : null}

      <Box
        as="div"
        sx={{
          margin: 'auto',
          width: [null, '84%'],
        }}
      >
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : null}
      </Box>

      <Box as="div" sx={{ marginTop: '3rem' }}>
          {slice?.items ? slice.items.map((item, index) => (
            <FAQ faq={item} key={index} />
          )) : null}
      </Box>
    </Container>
  </Slice>
)


FaqSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      eyebrow: string,
      description: array,
    }).isRequired
  }).isRequired,
};

export default FaqSlice;
