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

export const slugify = str => {
  return str.toString().toLowerCase()
    .replace('ï', 'i')
    .replace('é', 'e')
    .replace('è', 'e')
    .replace('ê', 'e')
    .replace('à', 'a')
    .replace('â', 'a')
    .replace('ä', 'a')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
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

export const revealBannerExpandedTitle = () => {
  const $ = require('jquery')
  const fn = () => {
    $('.content-header-title').addClass('reveal-title')
  }

  setTimeout(fn, 850)
}

export const previousObject = (arr, objectKey, objectKeyValue) => {
  let response = null

  if (arr[0][objectKey] !== objectKeyValue) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][objectKey] === objectKeyValue) {
        response = arr[i - 1]
        break
      }
    }
  }

  return response
}

export const nextObject = (arr, objectKey, objectKeyValue) => {
  let response = null

  if (arr[arr.length - 1][objectKey] !== objectKeyValue) {
    for (let i = 0; i < (arr.length - 1); i++) {
      if (arr[i][objectKey] === objectKeyValue) {
        response = arr[i + 1]
        break
      }
    }
  }

  return response
}

export const ajaxGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(new Error(`Can't load activities. Status: ${xhr.status}`))
        }
      }
    }

    xhr.open('GET', url.toString().trim(), true)
    xhr.send()
  })
}

export const ajaxPost = (url, data) => {
  return new Promise((resolve, reject) => {
    const $ = require('jquery')

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
      success: response => {
        resolve(response)
      },
      error: error => {
        reject(error)
      }
    })
  })
}

export const unixTimestampToDate = str => {
  return new Date(parseInt(str) * 1000)
}
