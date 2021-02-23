import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'


const Page = (props) => <SliceZone {...props} resolver={resolver} />;

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => process.env.HOMEPAGE_UID ? process.env.HOMEPAGE_UID : 'home',
});

export default Page;
