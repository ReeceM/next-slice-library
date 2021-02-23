/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from 'react';
import { array, shape, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Button, Flex, Box, Message, Close, jsx } from 'theme-ui';
import { Slice, Eyebrow, Container } from '../../components'
import Input from './Input';

const FormSlice = ({ slice, linkResolver }) => {
  const [hasError, setHasError] = useState(false);

  const formFields = {
    'data-netlify': slice?.primary?.formType || true,
    name: slice.primary.formName,
    'netlify-honeypot': slice.primary.honeyPotField,
  }

  function handleSubmit(e) {
    e.preventDefault();
    // check all fields are done
    setHasError({
      message: `For the privacy reasons, the is disabled at the moment, but feel free to reach out at @iexistin3d`,
      color: "white",
      backgroundColor: "rgba(243, 56, 108, 1)"
    })
  }

  return (
    <Slice>
      <Container>
        <Flex sx={{
          flex: '1',
          flexDirection: slice?.items?.length >= 2 ? ['column'] : ['row'],
          alignItems: 'center',
        }}>
          {
            slice.primary.eyebrow ? (<Eyebrow>{slice.primary.eyebrow}</Eyebrow>) : null
          }
          {
            slice.primary.description
              || slice.primary.title
              ? (
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
              )
              : null
          }

          <Box
            as="div"
            css={{
              width: ['100%', '60%']
            }}
          >
            {
              hasError ?
                <Message
                  style={{
                    color: hasError.color,
                    backgroundColor: hasError.backgroundColor,
                  }}
                  sx={{
                    display: 'flex',
                    margin: 'small',
                    justifyContent: 'space-between'
                  }}
                >
                  {hasError.message}

                  <Close onClick={ () => setHasError(false)}/>
                </Message> : null
            }
            <form
              name={slice.primary.formName}
              netlify-honeypot={slice.primary.honeyPotField}
              {...formFields}
              method="post"
              onSubmit={handleSubmit}
            >

              {
                slice?.items?.map((input, index) => <Input {...input} key={'index-'+index}/>)
              }

              <div style={{ marginTop: '1rem' }}>
                <Button
                  variant="form"
                  px={'medium'}
                  py={'xsmall'}
                  type="submit">
                  {slice.primary.submitLabel}
                </Button>
              </div>
            </form>
          </Box>
        </Flex>
      </Container>
    </Slice>
  )
};

FormSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array,
      items: array,
      submitLabel: string,
    }).isRequired,
  }).isRequired,
};

export default FormSlice;
