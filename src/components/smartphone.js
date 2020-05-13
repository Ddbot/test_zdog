import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


const Smartphone = (props) => {

  let smartphoneRef = useRef();
  useEffect(() => {
    gsap.from(smartphoneRef.current, {
      scale: .4,
      x: 500,
      autoAlpha: 0.5,
      duration: 1
    });
  })

  return (<svg id="smartphone" ref={el => el = smartphoneRef} viewBox="0 0 215 444" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeMiterlimit="10">

    <path d="M197.84 443.86H16.5A16.5 16.5 0 010 427.36V16.5A16.5 16.5 0 0116.5 0h181.34a16.5 16.5 0 0116.5 16.5v410.86a16.5 16.5 0 01-16.5 16.5" fill="rgb(33, 128, 160)" fillRule="nonzero" />

    <path d="M189.55 425.64H24.78a12.18 12.18 0 01-12.18-12.18V30.4c0-6.73 5.45-12.18 12.18-12.18h164.77c6.73 0 12.18 5.45 12.18 12.18v383.06c0 6.72-5.45 12.18-12.18 12.18" fill="hsla(188, 15%, 59%,1)" fillRule="nonzero" />

    <path d="M133.86 30.99H80.47a19.2 19.2 0 01-19.19-19.2h91.77c0 10.6-8.6 19.2-19.2 19.2" fill="hsla(250, 48%, 18%,1)" fillRule="nonzero" />

    <path d="M185.33 58.94h-45.19a4.2 4.2 0 01-4.2-4.2v-8.49a4.2 4.2 0 014.2-4.2h45.19a4.2 4.2 0 014.2 4.2v8.49a4.2 4.2 0 01-4.2 4.2" fill="hsla(255, 14%, 95%,1)" fillRule="nonzero" />

    <path d="M86.06 92.78H31.28a4.2 4.2 0 01-4.2-4.2v-9.6a4.2 4.2 0 014.2-4.2h54.78a4.2 4.2 0 014.2 4.2v9.6a4.2 4.2 0 01-4.2 4.2" fill="hsla(255, 14%, 95%,1)" fillRule="nonzero" />

    <path d="M81.84 53.71H35.5a3.22 3.22 0 110-6.44h46.34a3.22 3.22 0 110 6.44" fill="hsla(255, 14%, 95%,1)" fillRule="nonzero" />

    <path d="M174.87 328.84H39.47a7.07 7.07 0 01-7.08-7.08V110.5c0-3.9 3.17-7.07 7.07-7.07h135.4c3.91 0 7.08 3.16 7.08 7.07v211.27c0 3.91-3.16 7.08-7.07 7.08" fill="hsla(255, 14%, 95%,1)" fillRule="nonzero" />

    <path d="M174.87 389.52H39.47a7.07 7.07 0 01-7.08-7.07V356.7c0-3.9 3.17-7.07 7.07-7.07h135.4c3.91 0 7.08 3.16 7.08 7.07v25.75c0 3.9-3.16 7.07-7.07 7.07" fill="hsla(255, 14%, 95%,1)" fillRule="nonzero" />
    <g transform="matrix(0 -1 -1 0 107.17 120.93)">
      <circle cx="-54.78" fill="none" stroke="hsla(0, 0%, 100%,1)" strokeWidth="6" r="54.78" />
    </g>

    <path d="M159.75 275.92H54.58a7.41 7.41 0 01-7.41-7.42v-14.36c0-4.1 3.32-7.42 7.41-7.42h105.17c4.1 0 7.41 3.32 7.41 7.42v14.36c0 4.1-3.32 7.42-7.41 7.42" fill="hsla(0, 0%, 100%,1)" fillRule="nonzero" />

    <path d="M159.75 317.1H54.58a7.42 7.42 0 01-7.41-7.41v-14.37c0-4.1 3.32-7.41 7.41-7.41h105.17c4.1 0 7.41 3.32 7.41 7.41v14.37c0 4.1-3.32 7.41-7.41 7.41" fill="hsla(0, 0%, 100%,1)" fillRule="nonzero" />
  </svg>);
}

export default Smartphone;