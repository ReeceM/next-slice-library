import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Head from 'next/head';
import resolver from '../sm-resolver.js'
import SocialMeta from '../components/SocialMeta'

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

      </Head>
      <SliceZone {...props} resolver={resolver} />
    </>
  )
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => process.env.HOMEPAGE_UID ? process.env.HOMEPAGE_UID : 'home',
});

export default Page;
