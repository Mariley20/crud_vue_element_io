import axios from 'axios'

const HOST = 'http://localhost:8000/api'

export default {
  get (payload = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/users`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  getDetail (payload = {}) {
    const userId = payload.userId || {}
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}/users/${userId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  login (payload = {}) {
    const vForm = payload.vForm || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/login`,
        method: 'post',
        data: vForm
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  verification (payload = {}) {
    const params = payload.params || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/verification`,
        method: 'post',
        params
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  loginAuthy (payload = {}) {
    const params = payload.params || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/login-authy`,
        method: 'post',
        params
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  post (payload = {}) {
    const vForm = payload.vForm || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/users`,
        method: 'post',
        data: vForm
      })
        .then(response => resolve(response))
        .catch(error => {
          vForm.errors.set(vForm.extractErrors(error.response))
          reject(error)
        })
    })
  },

  update (payload = {}) {
    const userId = payload.userId || {}
    const vForm = payload.vForm || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/users/${userId}`,
        method: 'put',
        data: vForm
      })
        .then(response => resolve(response))
        .catch(error => {
          vForm.errors.set(vForm.extractErrors(error.response))
          reject(error)
        })
    })
  },

  delete (payload = {}) {
    const userId = payload.userId || {}

    return new Promise((resolve, reject) => {
      axios({
        url: `${HOST}/users/${userId}`,
        method: 'delete'
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}
