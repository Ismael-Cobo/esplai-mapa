
export const getBicis = async() => {

  const response = await fetch('https://api.citybik.es/v2/networks/bicing')
  const data = await response.json()
  return data
}