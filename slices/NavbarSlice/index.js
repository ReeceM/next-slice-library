/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { array, shape } from 'prop-types';
import { Link, RichText } from 'prismic-reactjs';
import { Box, Flex, NavLink } from 'theme-ui';
import { Container } from '../../components'
import { jsx } from 'theme-ui';

const NavbarSlice = ({ slice, linkResolver }) => (
  <Flex
    as="nav"
    variant="default"
    __themeKey="navbar"
    __css={{
      width: '100%',
      height: '3.2rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}
  >
    <Flex
      __themeKey="navbar"
      variant="default.container"
      as="div"
      sx={{
        justifyContent: 'space-between'
      }}
    >
      <img
        sx={{
          maxWidth: '32px',
          marginRight: '2rem'
        }}
        src={slice.primary.icon.url}
        alt={slice.primary.icon.alt}
      />

      <Flex
        as="div"
        sx={{
          justifyContent: 'space-evenly'
        }}
      >
        {slice.items.map((items) => (
          <NavLink
            px={'1rem'}
          >
            <span>{items.label}</span>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  </Flex>
);

NavbarSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NavbarSlice;
