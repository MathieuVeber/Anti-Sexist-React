import React from 'react'

function Post(props) {
    return(
        <article>
            <header>
                <h1>{props.title}</h1>
            </header>
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