/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'
import FortyTwoProvider from 'next-auth/providers/42-school'

const generateURI = async userId => {
  const { GH_URL, GH_SCHOOL_ID, GH_SECRET_KEY } = process.env
  const result = await fetch(
    `${GH_URL}?school_id=${GH_SCHOOL_ID}&student_id=${userId}&secret_key=${GH_SECRET_KEY}`,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )

  const data = await result.json()
  return data.url
}

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    FortyTwoProvider({
      clientId: process.env.FT_UID,
      clientSecret: process.env.FT_SECRET
    })
  ],
  callbacks: {
    async signIn({ profile, user }) {
      if (!profile || !user) return false

      const campusId = profile.campus_users.find(cu => cu.is_primary)?.campus_id

      if (campusId.toString() !== process.env.CAMPUS_ID) return false

      return user
    },
    async session({ session, token }) {
      delete session.user
      session.login = token.login
      session.user_id = token.user_id
      session.link = await generateURI(token.user_id)
      return session
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.user_id = profile.id
        token.login = profile.login
      }
      return token
    }
  }
}

export default NextAuth(authOptions)
