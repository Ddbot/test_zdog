// import ReactDOM from 'react-dom'
import React from 'react';

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


class LogoIllustration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: undefined,
            rotation: {
            x: Math.PI / 2,
                y: -Math.PI / 16
            },
            dummyTl: gsap.timeline({
                defaults: {
                    duration: illuTweenDuration,
                    paused: true
                }
            })
        }      
        
        this.ref = React.createRef();
        this.coneRef = React.createRef();        


        this.illuTweenDuration = 1;
        this.dummyTween = gsap.to(".dummy", {
            backgroundColor: "red",
            duration: this.illuTweenDuration
        });
    }

    componentDidMount() {
        this.props.index !== this.state.index && this.setState(prevState => {
                return { ...this.state, index: this.props.index, rotation: cone_seq[this.props.index] }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Prevprops: ', prevProps, 'Prevstate: ', prevState, 'this.props: ', this.props)
        this.props.index !== this.state.index && this.setState(prevState => {
                return { ...this.state, index: this.props.index, rotation: cone_seq[this.props.index] }
        });

    }

    UNSAFE_componentWillMount(prevState, prevProps) {
        this.state.dummyTl.add(this.dummyTween);
        this.state.dummyTl.play();
        console.log('Ref et conRef sont ', prevState, prevProps, this.ref, this.coneRef)
    }

    animate() {
        // rotate illo each frame
        this.ref.rotate.y += 0.03;
        this.ref.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(this.animate);
    }

    
    render() {
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
            )
    }
}

export default LogoIllustration
