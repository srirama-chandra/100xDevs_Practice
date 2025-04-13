import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXTAUTH_CONFIG = {

    providers:[
            CredentialsProvider({
                                name:'Credentials',
                                credentials:{
                                    email: { label : 'Email',type:'email',placeholder:'Email'},
                                    password: { label : 'Password',type:'password',placeholder:'Password'}
                                },
                                async authorize(credentials:any)
                                {

                                    return {
                                        id:"1",
                                        email:"user1@gmail.com",
                                        name:"User1"
                                    }
                                }
            }),
            GitHubProvider({
                clientId: process.env.GITHUB_ID || "",
                clientSecret: process.env.GITHUB_SECRET || ""
            })
        ],
        secret:process.env.NEXTAUTH_SECRET,
        callbacks:{
           session({ session, token,user }:any){
                //@ts-ignore
                session.user.id=token.sub;
                return session;
           }
        },
        pages:{
            signIn:'/signin'
        }

}