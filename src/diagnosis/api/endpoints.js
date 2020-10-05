export const getSymptoms = async ({ authToken }) => {
  const response = await fetch(
    `${API_URL}/symptoms?token=${authToken}&language=en-gb`,
    {
      method: 'GET',
    }
  )
  return response.json()
}

export const getDiagnosis = async ({ authToken, params }) => {
  const { yearOfBirth, symptoms, gender } = params
  const stringifiedParams = `symptoms=[${symptoms
    .map((s) => s.value)
    .join(',')}]&gender=${gender}&year_of_birth=${yearOfBirth}`
  const response = await fetch(
    `${API_URL}/diagnosis?token=${authToken}&language=en-gb&${stringifiedParams}`,
    {
      method: 'GET',
    }
  )
  return response.json()
}
