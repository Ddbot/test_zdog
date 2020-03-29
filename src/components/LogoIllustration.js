// import ReactDOM from 'react-dom'
import React, { useEffect } from 'react';

import { Illustration, Cone } from 'react-zdog';
import gsap from 'gsap';


let cone_seq = [{
        x: Math.PI / 2,
        y: -Math.PI / 16
    }, {
        x: 0,
        y: -Math.PI / 16
    },
    // celui-ci napparaitra meme pas
    {
        x: 0,
        y: -Math.PI / 16
    },
    // celui ci non plus, il sagira dun svg en SIGNATURE
    {
        x: 0,
        y: -Math.PI / 4
    },
    // celui ci non plus, il sagira dun svg en ENVELOPPE
    {
        x: 0,
        y: -Math.PI / 2
    }
];

  // if index = 0, pas d'animation
  // startValue = cone_seq[0]
  // endValue = cone_seq[0]
  // progress = 0
  // gsap.utils.interpolate(startValue, endValue, progress);

  // if index = 1
  //startValue = cone_seq[index-1]
  //endValue = index,
  // progress = ???

// let lerp = (i, prog) => {
//     let frame = gsap.utils.interpolate(cone_seq[i - 1], cone_seq[i], prog);
//     gsap.to(coneRef, {
//         autoAlpha: 0
//     });
// }

let illuTweenDuration = 1;
let dummyTween = gsap.to(".dummy", {
    backgroundColor: "red",
    duration: this.illuTweenDuration
});

const LogoIllustration = (props) => {
    let [index, setIndex] = useState(undefined);
    let [rotation, setRotation] = useState({       x: Math.PI / 2,        y: -Math.PI / 16  });
    let [tl, setTl] = useState(gsap.timeline({ defaults: { duration: illuTweenDuration, paused: true }}));
        
    let ref = useRef();
    let coneRef = useRef();        

    useEffect(() => {
        this.props.index !== this.state.index && this.setState(prevState => {
            return { ...this.state, index: this.props.index, rotation: cone_seq[this.props.index] }
        });
    });


    // let animate = () => {
    //     // rotate illo each frame
    //     this.ref.rotate.y += 0.03;
    //     this.ref.updateRenderGraph();
    //     // animate next frame
    //     requestAnimationFrame(this.animate);
    // }
    return (
        <Illustration ref={el => el = this.ref.current} zoom={10}>
            <Cone
                ref={el => el = this.coneRef.current}
                diameter={24}
                length={24}
                stroke={false}
                color={'rebeccapurple'}
                backface={'#C25'}
                width={24}
                rotate={this.state.rotation}
            />
            <div className="dummy"></div>
        </Illustration>
    );
}
export default LogoIllustration
