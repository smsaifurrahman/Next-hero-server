import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import Email from "next-auth/providers/email";
const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text", required: true, placeholder: "Your Email"},
                password: {label: "Password", type: "password", required: true, placeholder: "Your Password"},
                // username: {label: "User name", type: "text", required: true, placeholder: "Enter your Name"}
            },
            async authorize(credentials) {
                if(!credentials){
                    return null;
                }
                return true
            }
        })
    ],
    pages: {

    }

})

    export {handler as GET, handler as POST }