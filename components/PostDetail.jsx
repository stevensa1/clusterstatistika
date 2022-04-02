import React from 'react'
import { getPosts } from '../services'

const PostDetail = () => {
  return (
    <div>PostDetail</div>
  )
}

export default PostDetail

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    }
}