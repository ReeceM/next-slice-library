/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { array, shape, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { jsx, Box } from 'theme-ui';
import { Button } from '../../components'


const FeatureSlice = ({ slice, linkResolver}) => (
  <section sx={{
    margin: '3em auto',
    padding: ['small', 'medium'],
    textAlign: 'center',
    maxWidth: 'full',
  }}>
    <figure
      // className="relative md:flex md:flex-row-reverse"
      sx={{
        display: ['block', 'flex'],
        position: 'relative',
        flexDirection: slice.primary.placeLeft ? ['row', 'row-reverse'] : ['row-reverse', 'row']
      }}
    >
      <div
        // className="md:w-1/2 m-auto md:m-0 overflow-visible"
        sx={{
          width: [null, null, '50%'],
          margin: 'auto',
          overflow: 'visible',
        }}
      >
        <div
          sx={{
            width: ['83.33%', null, '140%'],
            left: slice.primary.placeLeft ? ['3rem', '-15rem'] : [null, 'calc(100% - 45vw)'],
            maxWidth: [null, null, '80rem'],
            position: 'relative'
          }}
        // className="w-5/6 left-12 md:max-w-7xl md:w-140 md:-left-60 relative"
        >
          <img src={slice.primary.featureImage.url} alt={slice.primary.featureImage.alt} />
        </div>
      </div>
      <Box
        as="figcaption"
        __themeKey="captions"
        variant="feature"
        sx={{
          left: slice.primary.placeLeft ? null : ['3rem', null],
          zIndex: '10',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'start',
          position: 'relative'
        }}
      // className="md:m-0 m-auto flex md:w-1/2 -mt-10 md:mt-12 items-start justify-start z-10 relative"
      >
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
                : <p>start by editing this slice from inside the SliceMachine builder!</p>
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
      </Box>
    </figure>
  </section>
);

FeatureSlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      featureImage: object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FeatureSlice;

