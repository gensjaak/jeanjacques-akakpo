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
