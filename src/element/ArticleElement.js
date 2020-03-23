import React from 'react'
import ReactionButton from "./ReactionButton"

function ArticleElement(props){

return(
    <React.Fragment>
    <p>
        {props.message}
    </p>
    <footer>
    <p>{props.created}</p>
    <p>Ça m'est arrivé aussi: <ReactionButton {...{numberReaction : props.reaction, url: "%API_URL%/" + props.id}}/></p>
    </footer>
    </React.Fragment>
)
}
export default ArticleElement;