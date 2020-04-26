import React from 'react'

export default ({
  label,
  onClick,
  gray,
  href,
  focus,
}: {
  label: string
  href?: string
  gray?: boolean
  focus?: boolean
  onClick?: () => void
}) => (
  <a
    tabIndex={0}
    onKeyUp={(e) => {
      if (onClick && (e.key === 'Enter' || e.keyCode === 13)) {
        onClick()
      }
    }}
    className={`
      font-bold
      shadow
      tracking-wide
      uppercase
      text-center
      cursor-pointer
      text-white
      text-sm
      ${gray ? 'bg-pink-700' : 'bg-purple-700'}
      flex-shrink-0
      py-4
      rounded
    `}
    ref={(el) => {
      if (el && focus) {
        el.focus()
      }
    }}
    style={{ width: `calc(50% - 1rem)` }}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault()
        onClick()
      }
    }}
    href={href}
    target="_blank"
    rel="nofollow noopener"
  >
    {label}
  </a>
)