import API_KEYWORD from 'consts/apiKeyword'
import { atom } from 'recoil'

export const selectApiTypeAtom = atom({
	key: 'selectApiTypeAtom',
	default: API_KEYWORD.NOW_PLAYING,
})
