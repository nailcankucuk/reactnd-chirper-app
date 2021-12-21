import {receiveTweets} from "./tweets";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";
import {showLoading, hideLoading} from "react-redux-loading";

const AUTHED_ID = 'tylermcginnes'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({tweets, users}) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}