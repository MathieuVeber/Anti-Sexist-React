import {LOGIN} from './types';
import axios from 'axios';

export const login = (user,password) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        user:user,
        password:password,
    },/*{
        headers:{
            'auth-token':token
        }
    },*/{crossdomain: true} )
    .then(
        res => {
            dispatch({
            type: LOGIN,
            payload: {user:res.data, token:res.headers['auth-token']}
        })}
    )
};
