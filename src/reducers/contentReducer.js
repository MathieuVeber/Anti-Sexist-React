import {
    GET_POSTS,POST_POST,PATCH_POST,DELETE_POST,POST_LIKE_POST,DELETE_LIKE_POST,POST_REPORT_POST,
    POST_COMMENT,PATCH_COMMENT,DELETE_COMMENT,POST_LIKE_COMMENT,DELETE_LIKE_COMMENT,POST_REPORT_COMMENT,
    GET_LABELS,POST_LABEL,PUT_LABEL,DELETE_LABEL,
    GET_REPORTS,DELETE_REPORT
} from '../actions/types';

const initialState = {
    posts: [],
    labels: [],
    reports: [],
};

export default function(state = initialState, action) {
    switch (action.type) {

        //POSTS
        case GET_POSTS :
            return {
                ...state,
                posts:action.payload.posts,
            }
        case POST_POST :
            return {
                ...state,
                posts:action.payload.posts,
            }
        case PATCH_POST :
            return {
                ...state,
                posts:action.payload.posts,
            }
        case DELETE_POST :
            return {
                ...state,
                posts:action.payload.posts,
            }
        
        case POST_LIKE_POST :
            return {
                ...state,
            }
        case DELETE_LIKE_POST :
            return {
                ...state,
            }
        case POST_REPORT_POST :
            return {
                ...state,
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
        
        default: return state
    }
};