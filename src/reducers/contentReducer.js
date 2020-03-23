import {GET_POSTS, GET_LABELS, GET_REPORTS} from '../actions/types'

const initialState = {
    posts: [],
    labels: [],
    reports: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts:action.payload.posts,
            }
        case GET_LABELS :
            return {
                ...state,
                labels:action.payload.labels,
            }
        case GET_REPORTS :
            return {
                ...state,
                reports:action.payload.reports,
            }
        default: return state
    }
};