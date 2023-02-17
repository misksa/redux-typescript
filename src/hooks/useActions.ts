import {useAppDispatch} from "./useAppDispatch";
import {bindActionCreators} from "redux";
import ActionCreator from '../store/action-creators'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(ActionCreator, dispatch)
}
