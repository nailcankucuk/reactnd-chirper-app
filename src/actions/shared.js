import {receiveTweets} from "./tweets";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";

const AUTHED_ID = 'tylermcginnes'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({tweets, users}) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}