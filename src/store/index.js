import Vuex from 'vuex'
import axios from 'axios'
import config from '@/data/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      blogTitle: 'Irfan Maulana',
      blogDesc: 'Pelajari, Tulis, Kemudian Bagikan',
      posts: [],
      post: {}
    },
    getters: {
      blogTitle(state) {
        return state.blogTitle
      },
      blogDesc(state) {
        return state.blogDesc
      },
      posts(state) {
        return state.posts
      },
      post(state) {
        return state.post
      }
    },
    mutations: {
      setBlogTitle(state, data) {
        state.blogTitle = data
      },
      setBlogDesc(state, data) {
        state.blogDesc = data
      },
      setPosts(state, data) {
        state.posts = data
      },
      setPost(state, data) {
        state.post = data
      }
    },
    actions: {
      getBlogData({commit}) {
        axios
          .get(config.api.base)
          .then(function(response) {
            console.log('success getting blog data : ', response.data)
            commit('setBlogTitle', response.data.name)
            commit('setBlogDesc', response.data.description)
          })
          .catch(function(error) {
            console.log('error getting blog desc : ', error)
          })
      },
      getPosts({commit}) {
        axios
          .get(config.getApiPath('posts') + '?per_page=9')
          .then(function(response) {
            console.log('success getting posts : ', response.data)
            commit('setPosts', response.data)
          })
          .catch(function(error) {
            console.log('error getting posts : ', error)
          })
      },
      getPostByParam({commit}, data) {
        const params = {
          page: 1,
          per_page: 1,
          ...data
        }

        axios
          .get(config.getApiPath('posts') + '?per_page=1&page=1', {params})
          .then(function(response) {
            console.log('success getting post : ', response.data)
            commit('setPost', response.data)
          })
          .catch(function(error) {
            console.log('error getting post : ', error)
          })
      }
    }
  })
}

export default createStore
