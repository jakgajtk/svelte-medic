import { readable } from 'svelte/store'
import { authorize } from '../api/endpoints'

export const authToken = readable(null, (set) => {
  authorize().then((response) => {
    set(response.Token)
  })
})
