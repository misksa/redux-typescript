/**
 * Редюсер который отвечает за работу с пользователями
 */
import {UserAction, UserActionTypes, UserState} from "../../types/users/users";

/**
 * Начальное состояние стейта
 */
const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

/**
 * Сам редюсер
 * @param state
 * @param action
 */
export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USERS:
			return {loading: true, error: null, users: []}
		case UserActionTypes.FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		case UserActionTypes.FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users: []}
		default:
			return state
	}
}