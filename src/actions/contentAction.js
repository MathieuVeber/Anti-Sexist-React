import {GET_POSTS, GET_LABELS, GET_REPORTS} from './types';
import axios from 'axios';

export const getPosts = (page=1,sort="latest",label="all") => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts?page=${page}&sort=${sort}&label=${label}`, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_POSTS,
            payload: {posts:res.data, page:page, sort:sort, label:label}
        })}
    )
};

export const getLabels = (of) => dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/labels/${of}`, {crossdomain: true} )
    .then(
        res => {dispatch({
            type: GET_LABELS,
            payload: {labels:res.data, of:of }
        })}
    )
};

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
