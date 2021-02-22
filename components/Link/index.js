import React from 'react'
import { default as NextLink } from 'next/link'
import { Link as PrismicLink } from 'prismic-reactjs'

/**
 * Document Link Resolver that works off the configs
 */

// Main DocLink component function for generating links to other pages on this site
const Link = ({ children, link, linkClass, linkResolver, hrefResolver }) => {
  if (link) {
    const linkUrl = PrismicLink.url(link, linkResolver)
    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === 'Document') {
      return (
        <NextLink
          as={linkUrl}
          href={PrismicLink.url(link, hrefResolver)}
        >
          <a className={linkClass}>{children}</a>
        </NextLink>
      )
    }

    // Otherwise return a normal anchor element
    return (
      <a className={linkClass} href={linkUrl}>{children}</a>
    )
  }
  return null
}

export default Link
