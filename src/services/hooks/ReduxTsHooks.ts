import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../redux/store/store'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
