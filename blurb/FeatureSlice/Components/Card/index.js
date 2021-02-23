/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { jsx, Box } from 'theme-ui';
import { Button } from '../../../../components'
import { shape, array, string } from 'prop-types';

const Card = ({ slice, linkResolver }) => (
  <Box
    as="div"
    __themeKey="cards"
    variant="feature"
  // className="w-5/6 bg-black text-white p-8 text-left"
  >
    <div style={{ display: "inline" }}>
      {
        slice.primary.title ?
          <h3
            sx={{
              fontWeight: '600',
              fontSize: ['base', null, 'xl'],
              lineHeight: 'heading',
              overflowWrap: 'break-word',
              letterSpacing: '0.025rem',
            }}
          // className="font-semibold text-3xl md:text-5xl break-words tracking-wide"
          >
            {RichText.asText(slice.primary.title)}
          </h3>
          : null
      }
    </div>
    <div
      sx={{
        marginTop: '0.75rem',
        fontSize: ['0.875rem', null, '1.125rem'],
        lineHeight: ['1.25rem', null, '1.75rem'],
      }}
    // className="mt-3 text-sm md:text-lg text-gray-200"
    >
      {
        slice.primary.description ?
          <RichText render={slice.primary.description} />
          : null
      }
    </div>
    {
      slice.primary.actionText &&
      slice.primary.actionLink && (
        <div id="cta"
          style={{
            marginTop: '2.5rem'
          }}
        // className="mt-10"
        >
          <Button
            link={slice.primary.actionLink}
            label={slice.primary.actionText}
            variant="primary"
            resolver={linkResolver}
          />
        </div>
      )
    }
  </Box>
)

Card.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      description: string,
      actionText: string,
      actionLink: array,
    }).isRequired
  }).isRequired
}

export default Card;
