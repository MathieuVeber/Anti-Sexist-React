import {GET_POSTS} from './types';
import axios from 'axios';

export const getPosts = () => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_POSTS,
            payload: {posts:res.data}
        })}
    )
};
