import React from 'react'

const UKFlag = (props) => {
    return (
<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
  <g transform="scale(.05 .06667)">
    <clipPath id="a">
      <path d="M0 0h1200v600H0z"/>
    </clipPath>
    <g clip-path="url(#a)">
      <path fill="#012169" fillRule="nonzero" d="M0 0h1200v600H0z"/>
      <path d="M0 0l1200 600m0-600L0 600" fillRule="nonzero" stroke="#fff" strokeWidth="120"/>
      <g transform="matrix(2 0 0 2 -600 -300)">
        <clipPath id="b">
          <path d="M600 300h600v300L600 300z"/>
        </clipPath>
        <g clip-path="url(#b)">
          <path d="M0 0l1200 600m0-600L0 600" fillRule="nonzero" stroke="#c8102e" strokeWidth="80"/>
        </g>
      </g>
      <path d="M600 0v600M0 300h1200" fillRule="nonzero" stroke="#fff" strokeWidth="200"/>
      <path d="M600 0v600M0 300h1200" fillRule="nonzero" stroke="#c8102e" strokeWidth="120"/>
    </g>
  </g>
</svg>
    )
}

export default UKFlag