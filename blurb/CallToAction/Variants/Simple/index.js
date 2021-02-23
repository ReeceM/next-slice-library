/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Grid, Box } from 'theme-ui'
import { Button, Eyebrow } from '../../../../components'


const SimpleSlice = ({ slice, linkResolver }) => (
  <Box
    as="section"
    sx={{
      display: 'flex',
      flexDirection: 'column'
    }}
    >
      {
        slice.primary.eyebrow ? (<Eyebrow mb={'small'}>{slice.primary.eyebrow}</Eyebrow>) : null
      }
    <Grid
      gap={2}
      columns={[null, '2fr 1fr']}
      sx={{
        alignItems: 'center'
      }}
    >
      <Box
        __themeKey="slice"
        variant="cta"
        __css={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
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
                  fontSize: 'base'
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
    </Grid>
  </Box>
)

export default SimpleSlice;
