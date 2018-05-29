import { unixTimestampToDate, slugify, ajaxGet } from '@@/illuminate/utils'

export const state = () => ({
  items: [],
})

export const actions = {

  // Fetch activities from file
  fetch (store, params) {
    ajaxGet('/data/activities.json')
      .then(response => {
        store.commit('UPDATE_ACTIVITIES', { payload: JSON.parse(response) })
      })
      .catch(error => {
        store.commit('UPDATE_ACTIVITIES', { payload: [] })
        console.error(error)
      })
  },
}

export const getters = {

  // Get all items
  items: state => state.items,

  // Get all items
  all: state => {
    return () => {
      return state.items
    }
  },
}

export const mutations = {

  // Sets activities
  UPDATE_ACTIVITIES (state, params) {
    state.items = params.payload.map(activityGroup => {
      activityGroup.entries.map(item => {
        // Slug
        item['slug'] = function () {
          return slugify(item.title)
        }

        // Build link URL
        item['link'] = function () {
          return `/projects/${slugify(item.title)}`
        }

        // Build dates
        item['startedAt'] = unixTimestampToDate(item['startedAt'])
        item['finishedAt'] = unixTimestampToDate(item['finishedAt'])

        // Reformat metadata
        item['metas'].map(meta => {
          if (meta.value === '__FUNCTION__') {
            switch (meta.title) {
              // Get auto the completed year
              case 'Completed':
                meta.value = function () {
                  return unixTimestampToDate(item.finishedAt).getFullYear()
                }
                break

              // Refer to techs to fill up tools
              case 'Tools':
                meta.value = function () {
                  return item.techs.join(', ')
                }
                break

              // Refer to type to fill scope
              case 'Scope':
                meta.value = function () {
                  return item.type
                }
                break
            }
          }

          return meta
        })

        return item
      })

      return activityGroup
    })
  },
}
