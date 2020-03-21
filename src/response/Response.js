import React from 'react'
import ReactionButton from "../element/ReactionButton"
function Reponse(props) {
    return(
        <article>
            <p>
                {props.message}
            </p>
            <footer>
                <p>{props.created}</p>
                <p>Ça m'est arrivé aussi: <ReactionButton {...{numberReaction : props.reaction, url: "%API_URL%/" + props.id}}/>
                </p>
            </footer>
        </article>
    ) 
}

export default Reponse