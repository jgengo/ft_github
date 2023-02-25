import Head from 'next/head'
import Link from 'next/link'

// import { useSession } from 'next-auth/react'
import { useSession, signIn, signOut } from 'next-auth/react'

import AuthButton from '../components/AuthButton'

const Home = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>ft_github</title>
        <meta name="description" content="Get your Github's student benefit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid mt-5 md:justify-center">
        {session ? (
          <div className="px-11 py-8 rounded-md md:border-2 flex flex-col gap-y-7 md:w-96 md:border-gray-100 md:shadow-lg md:shadow-gray-400/80">
            <h1 className="text-blue-500 text-lg">
              {session.login} / <strong>student_developer_pack</strong>
            </h1>
            <div>
              <p className="text-neutral-700">Hello {session.login}!</p>
              <p className="text-neutral-600 mt-2">
                It looks like you are eligible to get the Github Student Pack.
              </p>
            </div>
            <div>
              <div className="text-center">
                <Link
                  type="button"
                  className="rounded-md w-4/5 px-6 py-2.5 bg-[hsl(123,30%,50%)] text-white hover:bg-[hsl(123,35%,50%)]"
                  href={session.link || ''}
                >
                  Activate
                </Link>
              </div>
              <div className="mt-2 text-center">
                <AuthButton type="default" onClick={() => signOut()}>
                  Sign out
                </AuthButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-11 py-8 rounded-md md:border-2 flex flex-col gap-y-7 md:w-96 md:border-gray-100 md:shadow-lg">
            <h1 className="text-blue-500 text-lg">
              github / <strong>student_developer_pack</strong>
            </h1>
            <p className="text-neutral-600">
              You firt need to login with your 42 account to check if you are eligible for the
              Github student developer pack.
            </p>
            <div className="md:text-center">
              <AuthButton type="colored" onClick={() => signIn()}>
                Sign in with 42
              </AuthButton>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default Home
