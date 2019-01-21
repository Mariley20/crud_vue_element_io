import * as types from '../mutation-types'

export const state = {
  showModalCreateUser: false,
  showModalEditUser: false,
  showModalDeleteUser: false
}

export const actions = {
  replaceShowModalCreateUser({ commit }, payload) {
    commit(types.REPLACE_SHOW_MODAL_CREATE_USER, payload)
  },

  replaceShowModalEditUser({ commit }, payload) {
    commit(types.REPLACE_SHOW_MODAL_EDIT_USER, payload)
  },

  replaceShowModalDeleteUser({ commit }, payload) {
    commit(types.REPLACE_SHOW_MODAL_DELETE_USER, payload)
  }
}

export const mutations = {
  [types.REPLACE_SHOW_MODAL_CREATE_USER](state, { status }) {
    state.showModalCreateUser = status
  },

  [types.REPLACE_SHOW_MODAL_EDIT_USER](state, { status }) {
    state.showModalEditUser = status
  },

  [types.REPLACE_SHOW_MODAL_DELETE_USER](state, { status }) {
    state.showModalDeleteUser = status
  }
}
