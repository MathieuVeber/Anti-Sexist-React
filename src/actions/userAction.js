import {REGISTER, LOGIN, LOGOUT} from './types';
import axios from 'axios';

export const register = (pseudo,email,password) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        pseudo:pseudo,
        email:email,
        password:password,
    },{crossdomain: true} )
    .then(
        res => {
            dispatch({
            type: REGISTER,
            payload: {user:res.data, token:res.headers['auth-token']}
        })}
    )
};

export const login = (user,password) => dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        user:user,
        password:password,
    },{crossdomain: true} )
    .then(
        res => {
            dispatch({
            type: LOGIN,
            payload: {user:res.data, token:res.headers['auth-token']}
        })}
    )
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    })
};
