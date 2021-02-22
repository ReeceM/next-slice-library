/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { array, shape, string } from 'prop-types';
import { Box, Flex, NavLink } from 'theme-ui';
import { Slice, Container } from '../../components'
import { jsx } from 'theme-ui';
import { Link, RichText } from 'prismic-reactjs';


const SimpleFooter = ({ slice, linkResolver }) => (
  <Slice
    __themeKey="footer"
    variant="colors"
    sx={{
      paddingBottom: ['small', '0px !important;'],
      margin: 'auto !important'
    }}
  >
    <Container>
      <Box
        as="hr"
        sx={{
          border: '1px solid',
          borderColor: 'inverse(currentColor)',
        }}
      />
      <Flex
        as="footer"
        __themeKey="footer"
        variant="simple"
        __css={{
          alignItems: 'center',
          marginY: ['small', 'medium'],
          marginX: ['small', 'medium'],
        }}
      >
        <Flex
          as="div"
          __css={{
            alignItems: 'center',
            flexDirection: ['column', 'row']
          }}
        >
          <img
            src={slice.primary.logo.url}
            alt={slice.primary.logo.alt}
            width={48}
            style={{
              marginRight: '0.75rem',
            }}
          />
          <RichText render={slice.primary.copyright} />
        </Flex>


        <Box
          as="div"
          __themeKey="footer"
          variant="simple.links"
        >
          {
            slice?.items?.map((item, index) => (
              <span>
                <a
                  href={Link.url(item.policyLink, linkResolver)}
                  sx={{
                    color: 'white',
                    textDecoration: 'none'
                  }}
                >{item.policyText}</a>
              </span>
            ))
          }
        </Box>
      </Flex>
    </Container>
  </Slice>
);

SimpleFooter.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
    items: shape({
      policyText: string.isRequired,
      policyLink: array.isRequired,
    })
  }).isRequired,
};

export default SimpleFooter;
