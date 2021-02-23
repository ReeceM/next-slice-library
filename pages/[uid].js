import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import Head from 'next/head';
import SocialMeta from '../components/SocialMeta'

import resolver from '../sm-resolver.js'

const Page = (props) => {
  let data = props?.data;

  return (
    <>
      {
        data?.social_cards
            .map((social_card, index) => (
              <SocialMeta social_card={social_card} key={index} />
            ))
      }
      <Head>
        <title>{data?.page_title || 'Blurb SliceMachine'}</title>
        <meta
          name="title"
          content={data?.meta_title}
        />
        <meta
          name="description"
          content={data?.meta_description}
        />
        {/* https://banners.beyondco.de/_Blurb_%20SliceMachine%20Library.jpeg?theme=light&packageManager=npm+install&packageName=%40reecem%2Fblurb&pattern=bamboo&style=style_2&description=%23SliceContest+Entry+SliceMachine&md=1&showWatermark=0&fontSize=175px&images=scissors&widths=auto */}

      </Head>
      <SliceZone {...props} resolver={resolver} />
    </>
  )
}


// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  fallback: process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid } })
})

export default Page
