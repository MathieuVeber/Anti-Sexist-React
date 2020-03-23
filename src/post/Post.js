import React from 'react'
import ArticleElement from "../element/ArticleElement"

function Post(props) {
    return(
        <article>
            <header>
                <h1>{props.title}</h1>
            </header>
        <ArticleElement {...props}/>
        </article>
            
    )
}
export default Post