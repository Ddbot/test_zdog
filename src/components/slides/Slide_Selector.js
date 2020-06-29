import React, {
    useEffect, useState
} from "react";

const Slide_Selector = (props) => {   

    let [edge, setEdge] = useState({});

    let renderData = () => {
        // document.title = data[props.lang].title;
        return {
            __html: JSON.parse(edge).node.content
        }
    }
        
    // useEffect(() => {
    //     setTitle(prev => {
    //         return props.edge.node.title
    //     });
    // }, [props]);

    // useEffect(() => {
    //     setContent(prev => {
    //         return props.edge.node.content
    //     });
    // }, [props])

    // console.log('OUtside effect: ', props.edges, props.edge, edge, props.slideId);

    useEffect(() => {
        setEdge(prev => {
            return JSON.stringify(props.edge);
        });
    }, [props.edge]);

    return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
    // return <h1>Hello</h1>
}

export default Slide_Selector