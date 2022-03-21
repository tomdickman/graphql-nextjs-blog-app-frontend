import React, { FormEvent, useContext } from 'react'
import { useRouter } from 'next/router'

import { login } from '@/adapters/login'
import Layout from '@/components/Layout'
import { AuthContext } from '@/context/Auth'

import styles from '@/styles/Login.module.css'

const LoginPage = () => {
    const authContext = useContext(AuthContext)
    const router = useRouter()

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const token = await login({ email, password })
            authContext.setToken(token)
            router.push('/')
            console.log(token)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Layout title="Login to application">
            <h1>Login</h1>
            <form className={styles.loginForm} onSubmit={handleFormSubmit}>
                <label htmlFor='emailInput'>Email</label>
                <input id='emailInput' type='email' name='email' />
                <label htmlFor='passwordInput'>Password</label>
                <input id='passwordInput' type='password' name='password' />
                <button className='btn' type='submit'>Submit</button>
            </form>
        </Layout>
    )
}

export default LoginPage
