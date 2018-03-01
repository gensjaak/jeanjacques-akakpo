export const state = () => ({
  menu_opened: false,
})

export const actions = {}

export const getters = {
  menu_opened: state => state.menu_opened,
}

export const mutations = {

  // Toggle menu
  TOGGLE_MENU (state) {
    state.menu_opened = !state.menu_opened
  },
}
