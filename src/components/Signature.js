import React from 'react';
import Zdog from 'zdog';
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import styled from 'styled-components';
gsap.registerPlugin(MotionPathPlugin);

let dur = 3220;

const StyledSVG = styled.svg`
  .blog_B{stroke-dasharray:425 427;stroke-dashoffset:426;animation:blog_draw 1084ms ease-out 0ms forwards;}
  .blog_l{stroke-dasharray:258 260;stroke-dashoffset:259;animation:blog_draw 659ms ease-out 1084ms forwards;}
  .blog_o{stroke-dasharray:206 208;stroke-dashoffset:207;animation:blog_draw 526ms ease-out 1743ms forwards;}
  .blog_g{stroke-dasharray:364 366;stroke-dashoffset:365;animation:blog_draw 929ms ease-out 2270ms forwards;}
  @keyframes blog_draw{100%{stroke-dashoffset:0;}}
  @keyframes blog_fade{0%{stroke-opacity:1;}94.5945945945946%{stroke-opacity:1;}100%{stroke-opacity:0;}}
`;

const Signature = React.forwardRef((props, ref) => {
  console.log('Props From Signature ', props);
// return <div class="container">
  {/* <canvas class="zdog-canvas"></canvas> */}
  return <StyledSVG xmlns="http://www.w3.org/2000/svg" ref={ref} stroke="#002A24"  fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" clipRule="evenodd" height={480} width={480} viewBox="0 0 1024 1024">
    <g id="blog" fill="none" stroke="#002A24" strokeLinecap="round" strokeWidth="7">
        <path id="path1" fill="none" stroke="#002A24" strokeLinecap="round" strokeWidth="7" d="M372.23 541.68c6.32 5.4 17.9 2.02 25.86.47 23.09-4.46 48.16-17.12 46.3-44.04-1.25-18.1-29.17-20.06-42.36-20.81-6.3-.36-14.38-2.01-20.43.19-.47.17-1.67.39-1.31.75 1.42 1.41 19.78-1.28 21.74-1.88 16.14-4.97 42.73-29.03 27.55-47.23-6.64-7.98-33.32-13.7-42.36-9.19-.08.05 0 1.17 0 1.31 0 4.55-1.06 8.82-1.68 13.31-.34 2.44-.7 4.87-.94 7.31-2.34 22.75-6.54 44.82-9.37 67.48-.55 4.37-5.87 29.89-3 32.33z" className="blog_B" />
        <path id="path2" fill="none" stroke="#002A24" strokeLinecap="round" strokeWidth="7" d="M470.63 494.54c4.8-6.22 11.13-10.64 16.12-16.68 8.85-10.7 17.31-26.4 21-39.92.76-2.81 2.5-9.63 1.12-12.38-2.7-5.41-15.15-5.54-19.5-3.37-7.83 3.92-14.47 14.42-16.67 22.68-2.16 8.08-1.99 16.8-2.25 25.12-.59 18.11-3.47 46.4 11.06 60.92 6.54 6.54 17.64 7.3 26.43 7.3 1.2 0 8.8-.35 8.8-2.05" className="blog_l" />
        <path id="path3" fill="none" stroke="#002A24" strokeLinecap="round" strokeWidth="7" d="M521.43 494.73c-1.3 12.96-9.1 39.83 11.62 41.05 2.63.15 7.58.9 10.12 0 5.55-1.98 8.28-8.81 10.31-13.68 1.96-4.71 2.06-9.97 2.06-15 0-7.22-1.73-21.13-11.24-22.5-6.11-.86-20.3 4.16-14.81 12.94 7.98 12.77 28.15 7.91 38.24 1.31 4.01-2.62 8.47-5.31 12-8.62.28-.26 3.56-3.8 3.56-3.75" className="blog_o" />
        <path id="path4" fill="none" stroke="#002A24" strokeLinecap="round" strokeWidth="7" d="M605.6 521.16c-1.24 4.52-3.2 10.58-6.38 14.25-4.35 5-16.82 11.3-22.68 5.43-2.28-2.28-1.76-8.73-1.88-11.43-.6-13.72 2.24-23.55 11.25-34.5 2.72-3.29 12.6-15.42 18.18-11.24 5.53 4.15 5.98 19.75 6.19 25.68.5 14-2.87 27.06-3.56 40.86-.6 12.03-.5 25.22-4.5 36.74-3.32 9.54-14.63 29.05-27 16.68-3.03-3.03-1.5-10.95-1.5-14.62 0-21.58 30.1-29.3 45.18-37.48 5.95-3.24 11.7-7.1 17.06-11.25.52-.41 7.37-6.37 5.43-6.37" className="blog_g" /> 
    </g> 
  </StyledSVG>
{/* </div> */}
})

export default Signature;