import {RECEIVE_TWEET, TOGGLE_TWEET} from "../actions/tweets";

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEET:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    likes: action.hasLiked
                        ? state[action.id].likes.filter((id) => id !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        default:
            return state
    }
}