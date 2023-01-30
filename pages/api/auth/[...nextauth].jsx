import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

import GoogleProvider from 'next-auth/providers/google';
// import FacebookProvider from 'next-auth/providers/facebook';

// Mongo DB 
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

// Logowanie
export const AuthOptions = {
    session: {
        jwt: true,
    },

    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'credentials',

            async authorize(credentials) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({ email: credentials.email });

                if (!user) {
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('Could not log you in!');
                }

                client.close();
                return { name: user.login, email: user.email }
            },
        }),
        //  Google provider
        GoogleProvider({
            name: 'google',
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // FacebookProvider({
        // 	clientId: process.env.GOOGLE_ID,
        // 	clientSecret: process.env.GOOGLE_SECRET,
        // }),
        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(AuthOptions);
