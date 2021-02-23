import React from 'react';
const Links = () => {
  return (
    <>
      <link rel="preconnect" href="https://prismic-io.s3.amazonaws.com"></link>
      <link rel="dns-prefetch" href="https://prismic-io.s3.amazonaws.com"></link>

      <link rel="preconnect" href="https://images.prismic.io"></link>
      <link rel="dns-prefetch" href="https://images.prismic.io"></link>

      <link rel="preconnect" href="https://rsms.me"></link>
      <link rel="dns-prefetch" href="https://rsms.me"></link>

      <link rel="preload" as="style" href="https://rsms.me/inter/inter.css"></link>
    </>
  )
}

export default Links;
