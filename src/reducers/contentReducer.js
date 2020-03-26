import {
    GET_POSTS,
    POST_COMMENT,PATCH_COMMENT,DELETE_COMMENT,POST_LIKE_COMMENT,DELETE_LIKE_COMMENT,POST_REPORT_COMMENT,
    GET_LABELS,POST_LABEL,PUT_LABEL,DELETE_LABEL,
    GET_REPORTS,DELETE_REPORT,
    SHOW_CONFIRMATION,HIDE_CONFIRMATION,
} from '../actions/types';

const initialState = {
    posts: [],
    labels: [],
    reports: [],
    confirmation: {
        display:false,
        type:null,
        post:null,
        comment:null,
    }
};

export default function(state = initialState, action) {
    switch (action.type) {

        //POSTS
        case GET_POSTS :
            return {
                ...state,
                posts:action.payload.posts,
            }
        
        // COMMENTS
        case POST_COMMENT:
            return {
                ...state,
                posts:action.payload.posts,
            }
        case PATCH_COMMENT :
            return {
                ...state,
            }
        case DELETE_COMMENT :
            return {
                ...state,
            }

        case POST_LIKE_COMMENT :
            return {
                ...state,
            }
        case DELETE_LIKE_COMMENT :
            return {
                ...state,
            }
        case POST_REPORT_COMMENT :
            return {
                ...state,
            }

        // LABELS
        case GET_LABELS :
            return {
                ...state,
                labels:action.payload.labels,
            }
        case POST_LABEL :
            return {
                ...state,
                labels:action.payload.labels,
            }
        case PUT_LABEL :
            return {
                ...state,
                labels:action.payload.labels,
            }
        case DELETE_LABEL :
            return {
                ...state,
                labels:action.payload.labels,
            }

        // REPORTS
        case GET_REPORTS :
            return {
                ...state,
                reports:action.payload.reports,
            }
        case DELETE_REPORT :
            return {
                ...state,
            }

        // CONFIRMATION
        case SHOW_CONFIRMATION :
            return {
                ...state,
                confirmation:{
                    display:true,
                    type:action.payload.type,
                    post:action.payload.post,
                    comment:action.payload.comment,
                }
            }

            case HIDE_CONFIRMATION :
                return {
                    ...state,
                    confirmation:{
                        ...state.confirmation,
                        display:false,
                    }
                }
        
        default: return state
    }
};