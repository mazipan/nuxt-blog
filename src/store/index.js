import Vuex from 'vuex'
import axios from 'axios'
import config from '@/data/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      blogTitle: 'Irfan Maulana',
      blogDesc: 'Pelajari, Tulis, Kemudian Bagikan',
      posts: []
    },
    getters: {
      blogTitle (state) {
        return state.blogTitle
      },
      blogDesc (state) {
        return state.blogDesc
      },
      posts (state) {
        return state.posts
      }
    },
    mutations: {
      setBlogTitle (state, data) {
        state.blogTitle = data
      },
      setBlogDesc (state, data) {
        state.blogDesc = data
      },
      setPosts (state, data) {
        state.posts = data
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
          console.log('error getting blog desc : ', error)
        })
      },
      getPosts ({commit}) {
        axios
        .get(config.getApiPath('posts') + '?per_page=9')
        .then(function(response) {          
          commit('setPosts', response.data)
        })
        .catch(function(error) {
          console.log('error getting posts : ', error)
        })
      }
    }
  })
}

export default createStore