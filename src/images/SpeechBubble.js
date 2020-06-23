import React from 'react';

const SpeechBubble = (props) => <svg xmlns="http://www.w3.org/2000/svg" id="speech" version="1.0" viewBox="0 0 85.7 64.54" width="180" height="150">
  <defs/>
  <g transform="matrix(.9487 0 0 .9487 2.48 1.84)" fill="#4864AB">
    <path id="bubble" fill="#4864AB" d="M45.67 0C67.78 0 85.7 12.47 85.7 27.86c0 15.39-17.92 27.86-40.03 27.86a54.14 54.14 0 01-19.13-3.38C15.32 56.56 0 64.54 0 64.54s9.99-5.65 14.1-12.52a16.73 16.73 0 002.03-5.36C9.62 41.7 5.64 35.1 5.64 27.86 5.64 12.48 23.57 0 45.67 0m0 2.22c-20.85 0-37.8 11.5-37.8 25.64 0 6.27 3.4 12.32 9.6 17.03l1.1.84-.27 1.36a18.98 18.98 0 01-3.4 7.75c3.62-1.65 7.41-3.28 10.86-4.58l.78-.3.79.3a52.24 52.24 0 0018.34 3.25c20.85 0 37.81-11.5 37.81-25.65 0-14.14-16.96-25.64-37.8-25.64z"/>
      <text 
        fontFamily="Vibur" x="12" y="30"
            fontSize = "8"> {
                props.text === "2 la Fortune !" ? props.text : (props.text === 'Ananas' || props.text === 'Avocat' || props.text === 'Kiwi') ? 'Tu gagnes un ' + props.text + '!!!' : 'Tu gagnes une ' + props.text + '!!!'
            }
  </text>
  </g>
</svg>;

export default SpeechBubble;