import { GetStaticProps } from 'next'

import { getAllPosts } from '../lib/api'

export default function Index({ allPosts, preview }) {
  let heroPost = allPosts.filter(p => decodeURIComponent(p.slug) == "the-great-indian-travelogue")[0]
  if (!heroPost) {
    heroPost = allPosts[0]
  }
  const morePosts = allPosts.filter(p => decodeURIComponent(p.slug) != heroPost.slug)

  return (
    <>thuoc</>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
