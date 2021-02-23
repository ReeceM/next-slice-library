/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui'
import { Button, Eyebrow } from '../../../../components'


const DefaultSlice = ({ slice, linkResolver }) => (
  <Flex sx={{
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    {
      slice.primary.eyebrow ? (<Eyebrow>{slice.primary.eyebrow}</Eyebrow>) : null
    }
    <Box
      __themeKey="slice"
      variant="cta"
      __css={{
        textAlign: 'center',
      }}
    >
      <RichText
        render={slice.primary.title}
      />

      {
        slice.primary.description
          ? (
            <Box
              sx={{
                fontSize: 'kicker'
              }}
            >
              <RichText render={slice.primary.description} />
            </Box>
          )
          : null
      }
    </Box>
    {
      slice.primary.link && slice.primary.label && (
        <Box
          as="div"
          sx={{
            marginTop: ['small', 'medium'],
          }}
        >
          <Button
            link={slice.primary.link}
            label={slice.primary.label}
            variant={slice.primary.buttonType}
            resolver={linkResolver}
          />
        </Box>
      )
    }
  </Flex>
)

export default DefaultSlice;
