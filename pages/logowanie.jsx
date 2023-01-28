import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import AuthForm from '../components/auth/auth-form'
import AuthLayout from '../components/auth/auth-layout'
import LoadingSpinner from '../components/LoadingSpinner';

const AuthPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                router.replace('/');
            } else {
                setIsLoading(false);
            }
        });
    }, []);

    if (isLoading) {
        return (
            <div role="status" className='flex flex-col items-center justify-center mt-32'>
                <LoadingSpinner />
            </div >
        );
    }

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