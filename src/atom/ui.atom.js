import API_KEYWORD from 'consts/apiKeyword'
import { atom } from 'recoil'

export const toggleUiAtom = atom({
	key: 'toggleUiAtom',
	default: false,
})

export const selectApiTypeAtom = atom({
	key: 'selectApiTypeAtom',
	default: API_KEYWORD.POPULAR,
})
