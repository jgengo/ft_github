import React from 'react'

const typeClasses = {
  colored:
    'rounded-md inline-flex px-6 py-2.5 bg-[hsl(123,30%,50%)] text-white hover:bg-[hsl(123,35%,50%)]',
  default:
    'text-sm text-left text-neutral-600 md:text-center hover:underline hover:underline-offset-4'
}

export default function Component({ type, onClick, children }) {
  return (
    <button type="button" className={typeClasses[type]} onClick={onClick}>
      {children}
    </button>
  )
}
