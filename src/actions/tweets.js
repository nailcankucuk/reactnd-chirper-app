import {saveLikeToggle} from "../utils/api";

export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEET,
        tweets
    }
}

function toggleTweet({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))
        saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
                dispatch(toggleTweet(info))
                alert('There was an error liking the tweet. Please try again later..')
            })
    }
}