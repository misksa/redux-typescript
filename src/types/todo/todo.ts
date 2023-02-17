/**
 * В этом файле описываются типы для списка дел и его стейта
 */

// интерфейс для состояния туду, описывает поля и их типы в стейте туду
export interface TodoState {
	todos: any[]
	loading: boolean
	error: null | string
	page: number
	limit: number
}

// перечесление для типов экшенов туду, описывает типы экшенов
export enum TodoActionTypes {
	FETCH_TODO = "FETCH_TODO",
	FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
	FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
	SET_TODO_PAGE = "SET_TODO_PAGE"
}

// Описывает из чего состоит FetchTodoAction
interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODO
}
// Описывает из чего состоит FetchTodoSuccessAction
interface FetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_TODO_SUCCESS
	payload: any[]
}

// Описывает из чего состоит FetchTodoErrorAction
interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODO_ERROR
	payload: string
}

// Описывает из чего состоит FetchTodoPage
interface FetchTodoPage {
	type: TodoActionTypes.SET_TODO_PAGE
	payload: number
}

// объединяем все экшены в один тип
export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | FetchTodoPage


