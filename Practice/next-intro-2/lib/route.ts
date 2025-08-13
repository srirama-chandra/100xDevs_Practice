import CredentialsProvider from "next-auth/providers/credentials"

export const NEXT_AUTH_CONFIG = {

    providers:[

        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email: {label:'email',type:'text',placeholder:'email'},
                password: {label:'password',type:'text',placeholder:'password'}
            },
            async authorize(credentials:any)
            {
                return {
                    id:"1",
                    email:"harkirat@gmail.com",
                    name:"Harkirat",
                    place:"noida"
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user,account,profile}:any){
            if(user){
                token.place=user.place
            }
            return token 
        },
        async session({session,token,user}:any){
            if(session.user){
                session.user.place=token.place
            }
            return session
        }
    }

}