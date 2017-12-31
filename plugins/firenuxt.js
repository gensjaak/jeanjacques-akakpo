import CONFIG from '~/illuminate/config.js'
import $ from 'jquery'

let Firebase = require('firebase')
let FirebaseIdGenerator = require('firebase-auto-ids')

class Firenuxt {
  constructor (config) {
    this.config = config
    this.app = Firebase.initializeApp(config, 'nkeleoFirebaseApp')
    this.db = this.app.database()
    this.storage = this.app.storage()
  }

  purge (item) {
    delete item['.firebaseToken']
    delete item['.validated']
    delete item['.token']
    delete item['.selected']
    delete item['.pushing']
    delete item['.pushed']
    delete item['.imageLoading']
    delete item['.imageLoaded']
    delete item['.file']
    delete item['.imageUploaded']
    delete item['.comments']

    return item
  }

  signOut () {
    return this.app.auth().signOut()
  }

  nkeleoEmailAuth (user) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: `${CONFIG.PUSHER_API_HOST()}/auth.php`,
        dataType: 'json',
        data: {
          email: user.email,
          password: user.password
        },
        complete: response => {
          if (response.responseJSON.success) {
            resolve(response.responseJSON.user)
          } else {
            reject(response.responseJSON.error)
          }
        }
      })
    })
  }

  emailAuth (user) {
    return this.app.auth().signInWithEmailAndPassword(user.email, user.password)
  }

  googleAuth (user) {
    let provider = new Firebase.auth.GoogleAuthProvider()
    this.app.auth().languageCode = 'fr'
    return this.app.auth().signInWithRedirect(provider)
  }

  checkGoogleAuth () {
    return new Promise((resolve, reject) => {
      this.app.auth().getRedirectResult()
        .then(response => {
          let candidate = {
            displayName: response.user.displayName,
            photoURL: response.user.photoURL,
            uid: response.user.uid,
            accessToken: response.credential.accessToken,
            idToken: response.credential.idToken
          }

          this.db.ref(`admins/${candidate.uid}`).once('value').then(dataSnap => {
            if (dataSnap.exists()) {
              resolve(candidate)
            } else {
              reject(new Error('Votre connexion n\'est pas autorisée'))
            }
          })
        })
        .catch(() => {
          reject(new Error('Délai d\'attente dépassé. Ressayez'))
        })
    })
  }

  upload (file) {
    return new Promise(resolve => {
      resolve(this.storage.ref().child(`upload/EventPics/${file.name}`).put(file, {
        contentType: file.type
      }))
    })
  }

  push (dest, token, item) {
    let destRef = this.db.ref().child(`${dest}`)

    item = this.purge(item)

    if (!token) {
      token = FirebaseIdGenerator(Date.now())
    }

    return new Promise(resolve => {
      destRef.child(`${token}`).set(item)
        .then(() => {
          resolve(item)
        })
    })
  }

  get (paths) {
    let firenuxt = this
    return new Promise(resolve => {
      let retrieve = path => {
        return new Promise(resolve => {
          firenuxt.db.ref(path).once('value')
            .then(dataSnap => {
              let response = []
              let jsonDataSnap = dataSnap.toJSON()

              if (jsonDataSnap) {
                response = Object.keys(jsonDataSnap).map(key => {
                  jsonDataSnap[key]['.token'] = FirebaseIdGenerator(Date.now())
                  jsonDataSnap[key]['.firebaseToken'] = key
                  jsonDataSnap[key]['.selected'] = false

                  if (path === CONFIG.DATABASE.SUBMIT_EVENTS[0]) {
                    jsonDataSnap[key]['.validated'] = false
                    jsonDataSnap[key]['.comments'] = []
                  } else if (path === CONFIG.DATABASE.ALL_EVENTS[0]) {
                    jsonDataSnap[key]['.validated'] = true
                    jsonDataSnap[key]['.comments'] = []
                  }

                  return jsonDataSnap[key]
                })
              }

              resolve(response)
            })
            .catch(err => {
              console.error(err)
            })
        })
      }

      let globalConcepts = []
      paths.forEach((singlePath, i) => {
        retrieve(singlePath).then(response => {
          globalConcepts = globalConcepts.concat(response)
          if (i === (paths.length - 1)) {
            resolve(globalConcepts)
          }
        })
      })
    })
  }

  move (src, dest, token, authorInfos) {
    let srcRef = this.db.ref().child(`${src}/${token}`)
    let destRef = this.db.ref().child(`${dest}/${token}`)

    return new Promise(resolve => {
      srcRef.once('value')
        .then(dataSnap => {
          if (dataSnap.val() !== null) {
            let value = dataSnap.val()

            if (authorInfos) {
              value.movedBy = authorInfos.authorName
              value.movedAt = authorInfos.timeStamp
            }

            return destRef.set(value)
          }
        })
        .then(() => {
          resolve(srcRef.remove())
        })
    })
  }

  batchMove (items, src, dest, authorInfos) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(items)) {
        items.forEach((item, k) => {
          this.move(src, dest, item['.firebaseToken'], authorInfos)
            .then(() => {
              if (k === items.length - 1) {
                resolve()
              }
            })
        })
      } else {
        reject(new Error(`First parameter should be an array. Got ${typeof items}`))
      }
    })
  }

  batchRemove (parent, items) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(items)) {
        items.forEach((item, k) => {
          this.remove(parent, item['.firebaseToken'])
            .then(() => {
              if (k === items.length - 1) {
                resolve()
              }
            })
        })
      } else {
        reject(new Error(`First parameter should be an array. Got ${typeof items}`))
      }
    })
  }

  remove (parent, token) {
    let itemRef = this.db.ref().child(`${parent}/${token}`)

    return new Promise(resolve => {
      resolve(itemRef.remove())
    })
  }

  // C'est tres mauvais
  update (parent, oldToken, newToken, item) {
    let parentRef = this.db.ref().child(`${parent}`)

    return new Promise(resolve => {
      this.remove(parent, oldToken)
        .then(() => {
          item = this.purge(item)

          resolve(parentRef.child(`${newToken}`).set(item))
        })
    })
  }
}

export default new Firenuxt({
  apiKey: 'AIzaSyC3zfkYUekjozkg2IidIqiehGT_o8dFxak',
  authDomain: 'nkeleoapi.firebaseapp.com',
  databaseURL: 'https://nkeleoapi.firebaseio.com/',
  storageBucket: 'nkeleoapi.appspot.com',
  messagingSenderId: '952432645184'
})
