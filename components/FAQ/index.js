import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { Collapse } from 'react-collapse';
import { Box, Card, Flex } from 'theme-ui'

/**
 * A FAQ item
 *
 * @todo implement state management of the other ones
 * @param {Object} param0
 */
function FAQ({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  function slugify(str) {
    return str.replace(/^\s+|\s+$/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  return (
    <div style={{
      paddingBottom: '3rem'
    }}>
      <Flex
        as="section"
        sx={{
          justifyContent: 'center'
        }}
      >
        <Card
          sx={{
            overflow: 'hidden'
          }}
        >
          <Flex
            as="header"
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              padding: 'small',
              px: 'medium',
              justifyContent: 'space-between',
              alignItems: 'center',
              lineHeight: 'heading',
              cursor: 'pointer',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              mb: -3
            }}
          >
            <Box as="span" sx={{ fontSize: 'kicker', fontWeight: 'base' }}>
              {faq.question}
            </Box>
            <Box
              as="a"
              href={"#faq-" + slugify(faq.question)}
              sx={{
                color: 'dark'
              }}
              aria-label="more options"
            >
              <span className="icon" aria-hidden="true">
                {isOpen ? (<Opened />) : (<Collapsed />)}
              </span>
            </Box>
          </Flex>

          <Collapse isOpened={isOpen} style={{
            transition: 'all 0.1s ease-in-out'
          }}>

            <Box as="div" sx={{ padding: ['small', 'medium'] }} children={<RichText render={faq.answer} />} />

          </Collapse>

        </Card>
      </Flex>
    </div>
  )
}

function Opened() {
  return (
    <svg style={{
      width: '2rem',
      height: '2rem',
    }}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Collapsed() {
  return (
    <svg
      style={{
        width: '2rem',
        height: '2rem',
      }}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default FAQ;
