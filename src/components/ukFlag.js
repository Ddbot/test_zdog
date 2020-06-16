import React from 'react'

const UKFlag = () => {
  return (
    <svg id="uk" viewBox="10 0 40 40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <g transform="scale(.05, .06667)">
        <clipPath id="a">
          <path d="M0 0h1200v600H0z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path fill="hsla(222, 98%, 21%,1)" fillRule="nonzero" d="M0 0h1200v600H0z" />
          <path d="M0 0l1200 600m0-600L0 600" fillRule="nonzero" stroke="hsla(0, 0%, 100%,1)" strokeWidth="120" />
          <g transform="matrix(2 0 0 2 -600 -300)">
            <clipPath id="b">
              <path d="M600 300h600v300L600 300z" />
            </clipPath>
            <g clipPath="url(#b)">
              <path d="M0 0l1200 600m0-600L0 600" fillRule="nonzero" stroke="hsla(350, 85%, 42%,1)" strokeWidth="80" />
            </g>
          </g>
          <path d="M600 0v600M0 300h1200" fillRule="nonzero" stroke="hsla(0, 0%, 100%,1)" strokeWidth="200" />
          <path d="M600 0v600M0 300h1200" fillRule="nonzero" stroke="hsla(350, 85%, 42%,1)" strokeWidth="120" />
        </g>
      </g>
    </svg>
  )
}

export default UKFlag