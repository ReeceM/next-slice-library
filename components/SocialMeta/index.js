import Head from 'next/head'
import React from 'react'

/**
 * My Social cars solution.
 * @author ReeceM (@iexistin3d)
 */

const SocialMeta = ({ social_card, index }) => {

  const { social_card_image, social_card_title, social_card_description } = social_card

  if (social_card.og_type === 'og') {

    return (
      <Head key={index}>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.SITE_URL} />
        <meta property="og:title" content={social_card_title} />
        <meta property="og:description" content={social_card_description} />
        {social_card_image ? (
          <meta property="og:image" content={social_card_image.url} />
        ) : null}
      </Head>
    )
  }

  if (social_card.og_type === 'twitter') {
    return (
      <Head key={index}>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.SITE_URL} />
        <meta property="twitter:title" content={social_card_title} />
        <meta property="twitter:description" content={social_card_description} />
        {social_card_image ? (
          <meta property="twitter:image" content={social_card_image.url} />
        ) : null}
      </Head>
    )
  }
}

export default SocialMeta
