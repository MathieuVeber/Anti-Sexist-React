import {
    GET_POSTS,GET_LABELS,GET_REPORTS,SHOW_CONFIRMATION,HIDE_CONFIRMATION,
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

export const patchPost = (idPost,title,message,location,token) => dispatch => {
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
        res => dispatch(getPosts())
    )
};

export const deletePost = (idPost,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};


export const postLikePost = (idPost,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/like`,{},
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};

export const deleteLikePost = (idPost,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/unlike`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};

export const postReportPost = (idPost,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/report`,{},
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};



/* COMMENTS */


export const postComment = (idPost,message,type,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/`,
    {
        message:message,
        type:type,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        dispatch(getPosts())
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
        res => dispatch(getPosts())
    )
};

export const deleteComment = (idPost,idComment,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};


export const postLikeComment = (idPost,idComment,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/like`, { },
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};

export const deleteLikeComment = (idPost,idComment,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/unlike`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
    )
};

export const postReportComment = (idPost,idComment,token) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/${idComment}/report`, { },
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getPosts())
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
        res => dispatch(getLabels(of))
    )
};

export const putLabel = (labels,of,oldName,newName,token) => dispatch => {
    axios.put(`${process.env.REACT_APP_API_URL}/labels/${of}/${oldName}/`,
    {
        name:newName,
    } , { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getLabels(of))
    )
};

export const deleteLabel = (labels,of,name,token) => dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}/labels/${of}/${name}/`,
    { 
        headers: { 'auth-token':token }
    }, {
        crossdomain: true
    }).then(
        res => dispatch(getLabels(of))
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
    }).then(() => {
        dispatch(getPosts())
        dispatch(getReports(of,token))
    })
};



/* Confirmation */


export const showConfirmation = (type, post, comment=null) => dispatch => {
    dispatch({
        type: SHOW_CONFIRMATION,
        payload: {type:type, post:post, comment:comment }
    })
};

export const hideConfirmation = () => dispatch => {
    dispatch({
        type: HIDE_CONFIRMATION,
        payload: {type:false}
    })
};