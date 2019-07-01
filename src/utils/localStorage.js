/**
 * @author: zhanghan
 * @date: 2018/11/27
 * @desc: localStorage Data formate
 */
function checkSupport() {
  if (!window.localStorage || !window.JSON || !key) 
    return false
  return true
}

export function setData(key, data) {
  if (!checkSupport) 
    return
  localStorage.setItem(key, JSON.stringify(data))
}

export function getData(key) {
  if (!checkSupport) 
    return
  let data = localStorage.getItem(key)
  if (!data) 
    return
  return JSON.parse(data)
}

export function removeData(key) {
  if (!checkSupport) 
    return
  localStorage.removeItem(key)
}