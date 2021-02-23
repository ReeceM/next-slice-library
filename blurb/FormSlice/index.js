/** @jsxRuntime classic */
/** @jsx jsx */
import { Button, jsx } from 'theme-ui';
import React, { useState } from 'react';
import { array, shape, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui'
import { Slice, Eyebrow, Container } from '../../components'
import Input from './Input';

const FormSlice = ({ slice, linkResolver }) => {
  const [hasError, setHasError] = useState(false);

  const formFields = {
    'data-netlify': slice?.primary?.formType || true,
    name: slice.primary.formName,
    'netlify-honeypot': slice.primary.honeyPotField,
  }

  return (
    <Slice style={{
      backgroundColor: slice?.primary?.backgroundColor
    }}>
      <Container>
        <Flex sx={{
          flex: '1',
          flexDirection: ['column'],
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

            <Box
              sx={{
                fontSize: 'kicker'
              }}
            >
              <RichText render={slice.primary.description} />

            </Box>
          </Box>

          <form
            name={slice.primary.formName}
            netlify-honeypot={slice.primary.honeyPotField}
            {...formFields}
            method="post"
          >
            {slice?.items?.map((input) => <Input {...input}/>)}
            <div style={{ marginTop: '1rem' }}>
              <Button
                variant="primary"
                px={'small'}
                py={'xsmall'}
                type="submit">
                {slice.primary.submitLabel}
              </Button>
            </div>
          </form>
        </Flex>
      </Container>
    </Slice>
  )
};

FormSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      items: array,
      submitLabel: string,
    }).isRequired,
  }).isRequired,
};

export default FormSlice;
