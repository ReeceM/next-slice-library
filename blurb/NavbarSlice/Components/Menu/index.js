import React from 'react';
import { array, shape, object } from 'prop-types';
import { Box, Flex, NavLink } from 'theme-ui';
import { Button } from '../../../../components'
import { Link } from 'prismic-reactjs';

const Menu = ({ slice, linkResolver, show }) => {

  return (
    <Box as="div"
      id="menu"
      style={{
        display: show ? 'block' : 'none',
      }}
      sx={{
        maxWidth: '100%',
        width: '100%',
        padding: 'small',
        zIndex: 10,
      }}>

      <Flex
        id="skfjnskjfns"
        as="div"
        __themeKey="navbar"
        variant="mobile"
      >
        <Flex
          as="div"
        >
          <Flex
            as="div"
            sx={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'column'
            }}
          >
            {slice.items.map((item, index) => (
              <NavLink
                key={'navlink-' + index}
                py={'1rem'}
                href={Link.url(item.link, linkResolver)}
                sx={{
                  '&:hover': {
                    borderTop: 'transparent',
                    textDecoration: 'none',
                  }
                }}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
            {
              slice.primary.ctaLabel && slice.primary.ctaLink && (
                <Box
                  as='div'
                  __css={{
                    width: '100%'
                  }}
                  sx={{
                    alignSelf: 'center',
                    justifySelf: 'end',
                    marginLeft: '1rem'
                  }}
                >
                  <Button
                    label={slice.primary.ctaLabel}
                    link={slice.primary.ctaLink}
                    variant="navbar.primary"
                  />
                </Box>
              )
            }
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

Menu.propTypes = {
  slice: shape({
    primary: shape(object).isRequired,
    items: array.isRequired,
  }),
};

export default Menu;
