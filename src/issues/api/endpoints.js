export const getIssueDetails = async ({ authToken, id }) => {
  const response = await fetch(
    `${API_URL}/issues/${id}/info?token=${authToken}&language=en-gb`,
    {
      method: 'GET',
    }
  )
  return response.json()
}
