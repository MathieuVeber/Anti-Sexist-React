import {
    GET_POSTS,PATCH_POST,DELETE_POST,POST_LIKE_POST,DELETE_LIKE_POST,POST_REPORT_POST,
    POST_COMMENT,PATCH_COMMENT,DELETE_COMMENT,POST_LIKE_COMMENT,DELETE_LIKE_COMMENT,POST_REPORT_COMMENT,
    GET_LABELS,POST_LABEL,PUT_LABEL,DELETE_LABEL,
    GET_REPORTS,DELETE_REPORT
} from './types';
import axios from 'axios';



/* POSTS */


export const getPosts = (page=1,sort="latest",label="all") => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts?page=${page}&sort=${sort}&label=${label}`, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_POSTS,
            payload: {posts:res.data, page:page, sort:sort, label:label}
        })}
    )
};

export const postPost = (title,message,location,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/`,
    {
        title:title,
        message:message,
        location:location,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};

export const patchPost = (posts,idPost,title,message,location,token) => dispatch => {
    axios.patch(`${process.env.REACT_APP_API_URL}/posts/${idPost}/`,
    {
        title:title,
        message:message,
        location:location,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: PATCH_POST,
            payload: {
                posts:posts.map(post => post._id === idPost ? res.data : post)
            }
        })}
    )
};

export const deletePost = (posts,idPost,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_POST,
            payload: {posts:posts.filter(post => {
                return (post._id === idPost) ? false : true ;
            })}
        })}
    )
};


export const postLikePost = (idPost,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/like`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_LIKE_POST,
            payload: {}
        })}
    )
};

export const deleteLikePost = (idPost,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/unlike`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_LIKE_POST,
            payload: {}
        })}
    )
};

export const postReportPost = (idPost,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/report`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_REPORT_POST,
            payload: {}
        })}
    )
};



/* COMMENTS */


export const postComment = (posts,idPost,message,location,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/`,
    {
        message:message,
        location:location,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_COMMENT,
            payload: {
                posts:posts.map(post => post._id === idPost ? post.comments.push(res.data) : post)
            }
        })}
    )
};

export const patchComment = (idPost,idComment,message,location,token) => dispatch => {
    axios.patch(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/`,
    {
        message:message,
        location:location,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: PATCH_COMMENT,
            payload: {}
        })}
    )
};

export const deleteComment = (idPost,idComment,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_COMMENT,
            payload: {}
        })}
    )
};


export const postLikeComment = (idPost,idComment,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/like`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_LIKE_COMMENT,
            payload: {}
        })}
    )
};

export const deleteLikeComment = (idPost,idComment,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/unlike`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_LIKE_COMMENT,
            payload: {}
        })}
    )
};

export const postReportComment = (idPost,idComment,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/report`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_REPORT_COMMENT,
            payload: {}
        })}
    )
};



/* LABELS */


export const getLabels = (of) => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/labels/${of}/`, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_LABELS,
            payload: {labels:res.data, of:of }
        })}
    )
};

export const postLabel = (labels,of,name,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/labels/${of}/`,
    {
        name:name,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: POST_LABEL,
            payload: {labels:labels.push(res.data)}
        })}
    )
};

export const putLabel = (labels,of,oldName,newName,token) => dispatch => {
    axios.patch(`${process.env.REACT_APP_API_URL}/labels/${of}/${oldName}/`,
    {
        name:newName,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: PUT_LABEL,
            payload: {
                labels:labels.map(label => label.name === oldName ? res.data : label)
            }
        })}
    )
};

export const deleteLabel = (labels,of,name,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/labels/${of}/${name}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_LABEL,
            payload: {labels:labels.filter(label => {
                return (label.name === name) ? false : true ;
            })}
        })}
    )
};



/* REPORTS */


export const getReports = (of,token,page=1) => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/reports/${of}?page=${page}`,{
        headers:{
            'auth-token':token
        }
    }, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_REPORTS,
            payload: {reports:res.data, of:of }
        })}
    )
};

export const deleteReport = (of,idContent,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/reports/${of}/${idContent}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => {dispatch({
            type: DELETE_REPORT,
            payload: {}
        })}
    )
};