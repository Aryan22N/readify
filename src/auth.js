// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
// });
// // console.log("GOOGLE ID:", process.env.AUTH_GOOGLE_ID);

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  secret: process.env.AUTH_SECRET,
});
