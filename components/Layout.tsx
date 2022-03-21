import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import styles from '@/styles/Layout.module.css'

export interface LayoutProps extends PropsWithChildren<{}> {
    title: string
    keywords: string
    description: string
}

export default function Layout({
    title,
    keywords,
    description,
    children
}: LayoutProps) {
    const router = useRouter()

  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <Header />
        <div className={styles.container}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: 'Blog App',
    description: 'an example blog app',
    keywords: 'blog, authentication',
}
