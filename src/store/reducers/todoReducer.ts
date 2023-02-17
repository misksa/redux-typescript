/**
 * Редюсер который отвечает за работу со списком дел
 */

import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo/todo";

/**
 * Начальное состояние стейта
 */
const initialState: TodoState = {
	todos: [],
	loading: false,
	page: 0,
	limit: 10,
	error: null,
}

/**
 * Сам редюсер который принимает параметры:
 * @param state - состояние, это начальное состояние
 * @param action - объект экшен
 */
export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODO:
			return {...state, loading: true}
		case TodoActionTypes.FETCH_TODO_SUCCESS:
			return {...state, loading: false, todos: action.payload}
		case TodoActionTypes.FETCH_TODO_ERROR:
			return {...state, loading: false, error: action.payload}
		case TodoActionTypes.SET_TODO_PAGE:
			return {...state, page: action.payload}
		default: return state
	}
}