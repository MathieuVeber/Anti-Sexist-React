import {REGISTER, LOGIN, LOGOUT} from '../actions/types'

const initialState = {
    id: null,
    pseudo:null,
    email:null,
    isAdmin:false,
    postReaction:[],
    commentReaction:[],
    token: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case REGISTER :
            return {
                ...state,
                id:action.payload.user._id,
                pseudo:action.payload.user.pseudo,
                email:action.payload.user.email,
                isAdmin:action.payload.user.isAdmin,
                postReaction:action.payload.user.postReaction,
                commentReaction:action.payload.user.commentReaction,
                token:action.payload.token,
            }
        case LOGIN :
            return {
                ...state,
                id:action.payload.user._id,
                pseudo:action.payload.user.pseudo,
                email:action.payload.user.email,
                isAdmin:action.payload.user.isAdmin,
                postReaction:action.payload.user.postReaction,
                commentReaction:action.payload.user.commentReaction,
                token:action.payload.token,
            }
        case LOGOUT :
            return {
                ...state,
                id: null,
                pseudo:null,
                email:null,
                isAdmin:false,
                postReaction:[],
                commentReaction:[],
                token: null,
            }
        default: return state
    }
};