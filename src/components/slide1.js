import React from "react"

const Slide1 = (props) => {

  let printMarkup = () => {
    return {
      __html: props.content
    }    
  }

  return <div dangerouslySetInnerHTML={printMarkup()} />
  
}


export default Slide1
