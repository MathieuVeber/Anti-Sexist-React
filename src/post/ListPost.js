import React, {useState,useEffect} from "react"
import Post from "./Post"
import {get} from"../http"


function ListPost() {

    const [listPostState , setListPostState] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {

            setIsLoaded(false);
            const data = await get("%API_URL%/posts");
            setListPostState(data.parsedBody);
            setIsLoaded(true);
        };
        fetchData();
    });

    return(
    isLoaded ? (
        <section>
            {listPostState.map(item => <Post {...item}/>)}
        </section>
    ):( 
        <div>Chargement</div>
    ))
}

export default ListPost;