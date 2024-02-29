import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        })
    ],
    callbacks: {
        // invoked on successful sign in
       async signIn({profile}) {
        // ! connect to db and check if user exists if not add user to db and true to sign in
       },
       // modifies sec
       async session({session}) {
        
       }
    }

}