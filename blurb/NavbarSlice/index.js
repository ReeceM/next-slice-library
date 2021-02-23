/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { array, shape } from 'prop-types';
import { Box, Flex, NavLink } from 'theme-ui';
import { Button } from '../../components'
import { jsx } from 'theme-ui';
import { Menu } from './Components'
import { Link } from 'prismic-reactjs';

const NavbarSlice = ({ slice, linkResolver }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
          <Flex
            as="div"
            sx={{
              alignItems: 'center',
              marginRight: '2rem'
            }}
          >
            <Box
              as="img"
              sx={{
                maxWidth: '32px !important',
                marginRight: '0.5rem'
              }}
              src={slice.primary.icon.url}
              alt={slice.primary.icon.alt}
              width={slice.primary.icon?.dimensions.width}
            />

            <span
              sx={{
                visibility: ['hidden', 'visible'],
                fontWeight: '500',
                fontSize: 'kicker'
              }}
            >
              {slice.primary.name}
            </span>
          </Flex>
          <Flex
            as="div"
            sx={{
              display: ['none', 'flex']
            }}
          >
            <Flex
              as="div"
              sx={{
                justifyContent: 'space-evenly'
              }}
            >
              {slice.items.map((item) => (
                <NavLink
                  href={Link.url(item.link, linkResolver)}
                  px={'1rem'}
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </Flex>
            {
              slice.primary.ctaLabel && slice.primary.ctaLink && (
                <Button
                  label={slice.primary.ctaLabel}
                  link={slice.primary.ctaLink}
                  variant="navbar.primary"
                  sx={{
                    alignSelf: 'center',
                    marginLeft: '1rem'
                  }}
                />
              )
            }
          </Flex>
          <Box
            sx={{
              display: ['flex', 'none'],
              alignItems: 'center'
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                border: 'none',
                bg: 'transparent',
                cursor: 'pointer'
              }}
            >
              {
                !isOpen ? (
                  <svg
                    sx={{
                      color: 'black',
                      fill: 'black',
                      width: '1rem',
                      height: '1rem'
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )
                  : (
                    <svg sx={{
                      color: 'black',
                      fill: 'black',
                      width: '1rem',
                      height: '1rem'
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
              }
            </button>
          </Box>
        </Flex>
      </Flex>

      {/* Drop Down menu */}
      <Menu
        show={isOpen}
        slice={slice}
        linkResolver={linkResolver}
      />
    </>
  );
}

NavbarSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NavbarSlice;
