export const RECEIVE_TWEET = 'RECEIVE_TWEET'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEET,
        tweets
    }
}