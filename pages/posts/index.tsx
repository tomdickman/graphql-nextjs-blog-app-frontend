import Layout from '@/components/Layout'
import React from 'react'
import slugify from 'slugify'

import { getPosts } from '@/adapters/posts'

import styles from '@/styles/Posts.module.css'

export type PostsPageProps = {
    posts: [{ 
        title: string
        content: string 
    }]
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
      <Layout>
            <div className={styles.page}>
                <h1>Posts</h1>
                    <div className={styles.cardStack}>
                        {posts.map(post => {
                            return (
                                <div className={styles.card} key={slugify(post.title)}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </div>
                            )
                        })}
                    </div>
            </div>
      </Layout>
  )
}

export const getStaticProps = async () => {
    let posts = []

    try {
        posts = await getPosts()
    } catch(error) {
        console.log(error)
    }

    return {
        props: { posts },
        revalidate: 10
    }
}

export default PostsPage
