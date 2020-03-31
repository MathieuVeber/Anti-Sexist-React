import {
    GET_POSTS,GET_LABELS,GET_REPORTS,GET_ADMINS,SHOW_CONFIRMATION,HIDE_CONFIRMATION,
} from '../actions/types';

const initialState = {
    posts: [],
    labels: {
        posts:[],
        comments:[],
    },
    reports: [],
    confirmation: {
        display:false,
        type:null,
        post:null,
        comment:null,
    },
    admins:[]
};

export default function(state = initialState, action) {
    switch (action.type) {

        //POSTS
        case GET_POSTS :
            return {
                ...state,
                posts:action.payload.posts,
            }

        // LABELS
        case GET_LABELS :
            // labels of posts
            if (action.payload.of === "posts") {
                return {
                    ...state,
                    labels:{
                        ...state.labels,
                        posts:action.payload.labels,
                    }
                }
            }
            // labels of comments
            else {
                return {
                    ...state,
                    labels:{
                        ...state.labels,
                        comments:action.payload.labels,
                    }
                }
            }

        // REPORTS
        case GET_REPORTS :
            return {
                ...state,
                reports:action.payload.reports,
            }

        // ADMINS
        case GET_ADMINS :
            return {
                ...state,
                admins:action.payload.admins,
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