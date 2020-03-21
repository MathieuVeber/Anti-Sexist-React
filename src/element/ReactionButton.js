import React, { useState } from 'react'
import {post} from "../http"

export default function ReactionButton(props){
    const [liked, setLiked] = useState(false);

    function handleClick() {
        let message;
        liked ? (
            message = 'unlike'
        ) : (
            message = 'like'
        )
        const response = await post(
            props.url + "/" + message,
            ""
        );
        setLiked(!liked)
    }

    return(
        <button onClick={handleClick}>{props.numberReaction}</button>
    )
}