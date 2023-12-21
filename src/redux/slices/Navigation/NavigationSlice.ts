import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpenLanguage: false,
	activeLanguage: 'EN',
	isBurger: false,
	isBurgerOpen: false,
	navigationData: [],
}
const NavigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setIsOpenLanguage: (state, action: PayloadAction<boolean>) => {
			state.isOpenLanguage = action.payload
		},
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.activeLanguage = action.payload
		},
		setIsBurger: (state, action: PayloadAction<boolean>) => {
			state.isBurger = action.payload
		},
		setIsBurgerOpen: (state, action: PayloadAction<boolean>) => {
			state.isBurgerOpen = action.payload
		},
		setNavigationData: (state, action) => {
			state.navigationData = action.payload
		},
	},
})

export const {
	setIsOpenLanguage,
	setActiveLanguage,
	setIsBurger,
	setIsBurgerOpen,
	setNavigationData,
} = NavigationSlice.actions
export default NavigationSlice.reducer
