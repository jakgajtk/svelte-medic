import { writable } from 'svelte/store'
import { getIssueDetails } from '../api/endpoints'

const INITIAL_STATE = {
  issue: null,
  isLoading: false,
}

const IssueStore = () => {
  const { subscribe, update, set } = writable(INITIAL_STATE)
  return {
    subscribe,

    getIssue: async (authToken, id) => {
      update((state) => (state = { ...state, isLoading: true }))
      const response = await getIssueDetails({ authToken: authToken, id })
      update(
        (state) => (state = { ...state, issue: response, isLoading: false })
      )
    },

    clearIssue: () => {
      set(INITIAL_STATE)
    },
  }
}

export default IssueStore()
