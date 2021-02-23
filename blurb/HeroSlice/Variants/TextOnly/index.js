import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui'
import { Button } from '../../../../components'

const TextOnly = ({ slice, linkResolver}) => (
  <Flex sx={{
    flex: '1',
    flexDirection: ['column'],
    alignItems: ['center', 'left'],
  }}>
    <Box
      sx={{
        maxWidth: [null, "83%"],
        margin: 'auto',
        textAlign: slice.primary.image !== undefined ? ['left'] : ['center']
      }}
    >
      <RichText
        render={slice.primary.title}
      />

      <Box
        sx={{
          fontSize: 'kicker'
        }}
        >
        <RichText render={slice.primary.description} />
      </Box>
    </Box>
    {
      slice.primary.primaryLabel || slice.primary.primaryLabel ? (
        <Flex
          sx={{
            marginTop: ['small', 'medium'],
            justifyContent: 'space-evenly',
            flexDirection: ['column', 'row'],
            alignItems: 'start'
          }}
        >
          {
            slice.primary.primaryLink && slice.primary.primaryLabel && (
              <Box
                as="div"
                sx={{
                  marginTop: ['medium', null],
                }}
              >
                <Button
                  link={slice.primary.primaryLink}
                  label={slice.primary.primaryLabel}
                  variant='primary'
                  resolver={linkResolver}
                />
              </Box>
            )
          }

          {
            slice.primary.secondaryLink && slice.primary.secondaryLabel && (
              <Box
                as="div"
                sx={{
                  marginTop: ['medium', null],
                  marginLeft: [null, 'small']
                }}
              >
                <Button
                  link={slice.primary.secondaryLink}
                  label={slice.primary.secondaryLabel}
                  variant='secondary'
                  resolver={linkResolver}
                />
              </Box>
            )
          }
        </Flex>
      ) : null
    }
  </Flex>
);

TextOnly.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      items: array,
    }).isRequired,
  }).isRequired,
};

export default TextOnly;
