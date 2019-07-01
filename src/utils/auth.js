import { getData, setData, removeData } from './localStorage'
import {TOKEN_KEY} from './config.js'

export function getToken() {
  return getData(TOKEN_KEY)
}

export function setToken(token) {
  return setData(TOKEN_KEY, token)
}

export function removeToken() {
  return removeData(TOKEN_KEY)
}
