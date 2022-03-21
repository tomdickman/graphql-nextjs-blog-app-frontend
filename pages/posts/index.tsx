import Layout from '@/components/Layout'
import React, { useContext, useEffect, useState } from 'react'
import slugify from 'slugify'

import { getPosts } from '@/adapters/posts'

import styles from '@/styles/Posts.module.css'
import { AuthContext } from '@/context/Auth'

export type Post = { 
    title: string
    content: string 
}

const PostsPage = () => {
    const authContext = useContext(AuthContext)
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        if (authContext.token.length > 0) {
            getPosts(authContext.token).then(posts => {
                console.log(posts)
                setPosts(posts)
            })
        }
    }, [authContext])

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

export default PostsPage
