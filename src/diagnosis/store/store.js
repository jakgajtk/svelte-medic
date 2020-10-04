import { derived, writable } from 'svelte/store'
import { authToken } from '../../auth/store/store'
import { getSymptoms, getDiagnosis } from '../api/endpoints'

export const symptoms = derived(authToken, ($authToken, set) => {
  if (!$authToken) return
  getSymptoms({ authToken: $authToken }).then((response) => {
    set(response)
  })
})

export const diagnosisParams = writable(undefined)

export const diagnosis = derived(
  [authToken, diagnosisParams],
  ([$authToken, $diagnosisParams], set) => {
    if (!$authToken || !$diagnosisParams) return
    return getDiagnosis({
      authToken: $authToken,
      params: $diagnosisParams,
    }).then((response) => {
      set(response)
    }) // todo - clean this up, it's not nice.
  }
)
