import { derived, writable } from 'svelte/store'
import { authToken } from '../../auth/store/store'
import { getSymptoms, getDiagnosis as getDiagnosisEndpoint } from '../api/endpoints'

const INITIAL_STATE = {
  symptoms: [],
  diagnosis: null,
}

const DiagnosisStore = () => {
  const { subscribe, update, set } = writable(INITIAL_STATE);
  return {
    subscribe,
    getSymptoms: async (authToken) => {
      const response = await getSymptoms({ authToken: authToken })
      update(state => (state = { ...state, symptoms: response }));
    },
    getDiagnosis: async (authToken, params) => {
      const response = await getDiagnosisEndpoint({
        authToken,
        params,
      })
      update(state => (state = { ...state, diagnosis: response }));
    }
  }
}

export default DiagnosisStore();
