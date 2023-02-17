import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo/todo";

/**
 * Функция action-creator для получения списка дел, из неё должен возвращаться Promise.
 * @param page
 * @param limit
 */
export const fetchTodo = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			//дистпатчеру передаем экшен загрузки
			dispatch({type: TodoActionTypes.FETCH_TODO})
			//делаем запрос получаем данные
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: {
					_page: page,
					_limit: limit
				}
			})
			//если все прошло успешно передаем данные в экшен FETCH_TODO_SUCCESS
			dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS , payload: response.data})
		} catch (e) {
			//если возникла ошибка то передаем ошибку
			dispatch({
				type: TodoActionTypes.FETCH_TODO_ERROR,
				payload: 'Произошла ошибка при загрузке todo'
			})
		}
	}
}
// action-creator для установки страницы
export function setTodoPage (page: number): TodoAction {
	return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}

