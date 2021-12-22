import {saveLikeToggle, saveTweet} from "../utils/api";
import {showLoading, hideLoading} from "react-redux-loading";

export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEET, tweets
    }
}

function toggleTweet({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET, id, authedUser, hasLiked
    }
}

function addTweet(tweet) {
    return {
        type: ADD_TWEET, tweet
    }
}

export const handleAddTweet = (text, replyingTo) => {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState();
    
        return saveTweet({
            text: text.text,
            author: authedUser.authedUser,
            replyingTo,
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()));
    };
};

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