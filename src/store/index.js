import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: '/static/car.jpg', id: 'adfg', title: 'Meetup in Berlin', date: '2017-09-18'},
      {imageUrl: '/static/car1.jpg', id: 'adfg', title: 'Meetup in London', date: '2017-09-20'},
      {imageUrl: '/static/car2.jpg', id: 'adfg', title: 'Meetup in Singapore', date: '2017-09-28'}
    ],
    user: {
      id: 'adfg',
      registeredMeetups: ['adfg']
    }
  },
  mutations: {},
  actions: {},
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
