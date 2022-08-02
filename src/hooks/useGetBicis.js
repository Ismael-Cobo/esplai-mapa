import { useEffect, useState } from "react"
import { getBicis } from "../services"


export const useGetBicis = (emptySlots = '') => {


  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    getBicis()
      .then( data => setData(data.network.stations))
      .finally( () => setIsLoading(false))

  }, [])


  return {
    data,
    isLoading
  }

}