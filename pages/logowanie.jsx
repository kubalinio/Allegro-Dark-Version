import React from 'react'
import AuthForm from '../components/auth/auth-form'
import AuthLayout from '../components/auth/auth-layout'

const AuthPage = () => {
    return <AuthForm />

}

export default AuthPage

AuthPage.getLayout = function getLayout(authPage) {
    return (
        <AuthLayout>
            {authPage}
        </AuthLayout>
    )
}