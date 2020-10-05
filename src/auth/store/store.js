import { readable } from 'svelte/store'
import { authorize } from '../api/endpoints'

export const authToken = readable(null, async (set) => {
  const response = await authorize()
  set(response.Token)
})
