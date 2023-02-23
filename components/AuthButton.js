import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        type="button"
        className="text-sm text-left text-neutral-600 md:text-center hover:underline hover:underline-offset-4"
      >
        Sign out
      </button>
    )
  }
  return (
    <button
      onClick={() => signIn()}
      type="button"
      className="rounded-md inline-flex px-6 py-2.5 bg-[hsl(123,30%,50%)] text-white hover:bg-[hsl(123,35%,50%)]"
    >
      Sign in with 42
    </button>
  )
}
