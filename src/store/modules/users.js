import * as types from '../mutation-types'
import userAPI from '../../api/user'

export const state = {
  users: [],
  loadingUsers: false,
  currentUser: null
}

export const getters = {}

export const actions = {
  replaceCurrentUser({ commit }, payload) {
    commit(types.REPLACE_CURRENT_USER, payload)
  },

  getUsers({ commit }, payload) {
    commit(types.REPLACE_LOADING_USERS, { status: true })
    userAPI
      .get(payload)
      .then(response => {
        commit(types.REPLACE_LOADING_USERS, { status: false })
        commit(types.REPLACE_USERS, { users: response.data.data })
      })
      .catch(() => {
        commit(types.REPLACE_LOADING_USERS, { status: false })
        this.commit('snackbar/UPDATE_SNACKBAR', {
          status: true,
          color: 'error',
          text: 'The user list could not be obtained, please try again'
        })
      })
  },

  getUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userAPI
        .getDetail(payload)
        .then(response => {
          commit(types.REPLACE_CURRENT_USER, {
            currentUser: response.data.data
          })
          resolve(response)
        })
        .catch(error => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'error',
            text: 'The user list could not be obtained, please try again'
          })
          reject(error)
        })
    })
  },

  createUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userAPI
        .post(payload)
        .then(response => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'success',
            text: 'The User was created successfully'
          })
          resolve(response)
        })
        .catch(error => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'error',
            text: 'There was an error creating User, please try again later'
          })
          reject(error)
        })
    })
  },

  updateUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userAPI
        .update(payload)
        .then(response => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'success',
            text: 'The User was updated successfully'
          })
          resolve(response)
        })
        .catch(error => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'error',
            text: 'There was an error updating User, please try again later'
          })
          reject(error)
        })
    })
  },

  deleteUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userAPI
        .delete(payload)
        .then(response => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'success',
            text: 'The User was deleted successfully'
          })
          resolve(response)
        })
        .catch(error => {
          this.commit('snackbar/UPDATE_SNACKBAR', {
            status: true,
            color: 'error',
            text: 'There was an error deleting User, please try again later'
          })
          reject(error)
        })
    })
  }
}

export const mutations = {
  [types.REPLACE_LOADING_USERS](state, { status }) {
    state.loadingUsers = status
  },
  [types.REPLACE_USERS](state, { users }) {
    state.users = users
  },
  [types.REPLACE_CURRENT_USER](state, { currentUser }) {
    state.currentUser = currentUser
  }
}
