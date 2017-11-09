import Vuex from 'vuex'
import axios from 'axios'
import config from '@/data/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      blogTitle: 'Irfan Maulana',
      blogDesc: 'Pelajari, Tulis, Kemudian Bagikan'
    },
    getters: {
      blogTitle (state) {
        return state.blogTitle
      },
      blogDesc (state) {
        return state.blogDesc
      }
    },
    mutations: {
      setBlogTitle (state, data) {
        state.blogTitle = data
      },
      setBlogDesc (state, data) {
        state.blogDesc = data
      },
    },
    actions: {
      getBlogData ({commit}) {
        axios
        .get(config.api.base)
        .then(function(response) {          
          commit('setBlogTitle', response.data.name)
          commit('setBlogDesc', response.data.description)
        })
        .catch(function(error) {
          console.log('error', error)
        })
      }
    }
  })
}

export default createStore