import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { convertStringToCompare } from '../helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    error: '',
    users: [],
    githubUser: null
  },
  getters: {
    users: state => state.users,
    githubUser: state => state.githubUser,
    isLoading: state => state.isLoading,
    error: state => state.error,
  },
  mutations: {
    SET_LOADING: (state, loading) => state.isLoading = loading,
    SET_ERROR: (state, error) => {
      state.githubUser = null;
      state.error = error;
    },
    CLEAR_ERROR: state => state.error = '',
    SET_NEW_USER: (state, user) => {
      state.users.unshift(user);
      state.githubUser = user;
    },
    SET_EXIST_USER: (state, user) => state.githubUser = user
  },
  actions: {
    async fetchGithubUser({ state, commit }, term) {
      commit('SET_LOADING', true);
      const userExists = state.users.find(user => convertStringToCompare(user.login) === convertStringToCompare(term));
      if (userExists) {
        commit('CLEAR_ERROR');
        commit('SET_LOADING', false);
        return commit('SET_EXIST_USER', userExists);
      }

      try {
        const response = await axios.get(`https://api.github.com/users/${term}`);
        const resRepos = await axios.get(`https://api.github.com/users/${term}/repos?sort=updated`);
        const newUser = response.data;
        newUser.repos = resRepos.data; 
        commit('SET_NEW_USER', newUser);
        commit('CLEAR_ERROR');
        commit('SET_LOADING', false);
      } catch (error) {
        commit('SET_ERROR', error.response.data.message);
        commit('SET_LOADING', false);
      }
    },
  },
  modules: {
  }
})
