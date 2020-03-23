import React from 'react'
import ArticleElement from '../element/ArticleElement'

function Reponse(props) {
    return(
        <article>
            <ArticleElement {...props}/>
        </article>
    ) 
}

export default Reponse