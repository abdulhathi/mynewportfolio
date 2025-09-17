import http from './httpClient'

export const getSkills = async (): Promise<string[]> => {
  const { data } = await http.get('/skills')
  return data
}
