import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: '/static/car.jpg', id: 'adfg', title: 'Meetup in Berlin', date: '2017-09-18', location: 'Germany', description: 'Welcome to Germany'},
      {imageUrl: '/static/car1.jpg', id: 'adfg1', title: 'Meetup in London', date: '2017-09-20', location: 'UK', description: 'Welcome to UK'},
      {imageUrl: '/static/car2.jpg', id: 'adfg3', title: 'Meetup in Singapore', date: '2017-09-28', location: 'Asia', description: 'Welcome to Singapore'}
    ],
    user: {
      id: 'adfg',
      registeredMeetups: ['adfg']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'agth'
      }
      // reaching out to firebase
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetup (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
