import {
    GET_POSTS,PATCH_POST,DELETE_POST,POST_LIKE_POST,DELETE_LIKE_POST,POST_REPORT_POST,
    POST_COMMENT,PATCH_COMMENT,DELETE_COMMENT,POST_LIKE_COMMENT,DELETE_LIKE_COMMENT,POST_REPORT_COMMENT,
    GET_LABELS_COMMENT, GET_LABELS_POST, POST_LABEL_COMMENT, POST_LABEL_POST, PUT_LABEL_COMMENT, PUT_LABEL_POST ,DELETE_LABEL_COMMENT,DELETE_LABEL_POST,
    GET_REPORTS,DELETE_REPORT
} from '../actions/types';

const initialState = {
    posts: [],
    labelsPost: [],
    labelsComment: [],
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

        // LABELS COMMENT
        case GET_LABELS_COMMENT :
            return {
                ...state,
                labelsComment:action.payload.labelsComment,
            }
        case POST_LABEL_COMMENT :
            return {
                ...state,
                labelsComment:action.payload.labelsComment,
            }
        case PUT_LABEL_COMMENT :
            return {
                ...state,
                labelsComment:action.payload.labelsComment,
            }
        case DELETE_LABEL_COMMENT:
            return {
                ...state,
                labelsComment:action.payload.labelsComment,
            }
        //LABELS POST
        case GET_LABELS_POST :
            return {
                ...state,
                labelsPost:action.payload.labelsPost,
            }
        case POST_LABEL_POST :
            return {
                ...state,
                labelsPost:action.payload.labelsPost,
            }
        case PUT_LABEL_POST :
            return {
                ...state,
                labelsPost:action.payload.labelsPost,
            }
        case DELETE_LABEL_POST:
            return {
                ...state,
                labelsPost:action.payload.labelsPost,
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