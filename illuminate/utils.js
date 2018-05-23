import { SCROLL_BREAKED_CLASSNAME, SCROLL_BREAKED_TARGET_ATTR } from '@@/illuminate/config'

export const navigate = (activity, path) => {
  activity.$router.push({ path: path })
}

export const setFocus = htmlEltName => {
  setTimeout(() => {
    let field = document.getElementsByName(htmlEltName)[0]

    field.focus()
    field.select()
  }, 100)
}

export const requestApiKey = () => {
  return 'AIzaSyAYisMRVTrYKBSSRMt0z8QVgmIkEWJpBPM'
}

export const toArray = obj => {
  return Object.keys(obj).map(key => {
    return obj[key]
  })
}

export const animateElements = (parent) => {
  const $ = require('jquery')
  const $targets = $(parent).find(`[${SCROLL_BREAKED_TARGET_ATTR}]`)

  Array.from($targets).forEach((element, index) => {
    setTimeout(() => {
      $(element).addClass(SCROLL_BREAKED_CLASSNAME)
    }, parseInt($(element).attr(SCROLL_BREAKED_TARGET_ATTR)))
  })
}
