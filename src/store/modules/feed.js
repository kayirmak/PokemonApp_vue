/* eslint-disable */
import apiFeed from '@/api/feed'

const state = {
    data: [],
    isSubmitting: false
}


const mutations = {
    getFeedStart(state) {
        state.data = null
    },
    getFeedSuccess(state, payload) {
        state.data = payload
    },
    getFeedFailure(state) {
        
    },

    addItemStart(state) {
        state.isSubmitting = true
    },
    addItemSuccess(state, payload) {
        state.isSubmitting = false
        state.data.push(payload)
    },
    addItemFailure(state) {
        state.isSubmitting = false
    },

    deleteItemStart() {

    },
    deleteItemSuccess(state, payload) {
      state.data = payload
    },
    deleteItemFailure() {
      
    },

    changeFavoriteStatusStart() {

    },
    changeFavoriteStatusSuccess(state, payload) {
        state.favoriteList.push(payload)
    },
    changeFavoriteStatusFailure() {
        
    }
}

const actions = {
    getFeed({commit}) {
        return new Promise(resolve => {
            commit('getFeedStart')
            apiFeed.getFeed()
                .then(response => {
                    const payload = []
                    for(let key in response.data) {
                        payload.push({...response.data[key], id: key})
                    }
                    commit('getFeedSuccess', payload)
                    resolve(payload)
                })
                .catch(() => {
                    commit('getFeedFailure')
                })
        })
    },

    addItem({commit}, credentials) {
        return new Promise(resolve => {
            commit('addItemStart')
         apiFeed.addItem(credentials)
           .then(response => {
             const payload = {...credentials, id: response.data.name}
             commit('addItemSuccess', payload)
             resolve(payload)
           })
        })
      },

      deleteItem({commit, state}, id) {
        return new Promise(() => {
           apiFeed.deleteItem(id)
             .then(() => {
                const payload = state.data.filter(el => el.id !== id)
                commit('deleteItemSuccess', payload)
             })
        })
      },

      changeFavoriteStatus({state}, id) {
          return new Promise(() => {
              for(let i = 0; i < state.data.length; i++) {
                  if(state.data[i].id === id){
                    if(state.data[i].isLike === false) {
                        state.data[i].isLike = true
                    }
                    else state.data[i].isLike = false
                    apiFeed.changeFavoriteStatus(id, {isLike: state.data[i].isLike})
                  }
              }
          })
      }
}

export default {
    state,
    mutations,
    actions
}