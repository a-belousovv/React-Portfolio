import { configureStore } from '@reduxjs/toolkit'
import NavigationSlice from '../slices/Navigation/NavigationSlice'

export const store = configureStore({
	reducer: { navigation: NavigationSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
