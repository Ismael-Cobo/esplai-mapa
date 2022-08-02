import { InputFilter, ContentTable } from "./components"
import { Mapa } from "./components/map/Mapa"
import { useForm, useGetBicis } from "./hooks"

const formData = {
  emptySlots: ''
}

function App() {

  const { emptySlots, onInputChange } = useForm(formData)
  const { data, isLoading } = useGetBicis()


  return (
    <>
      <InputFilter onInputChange={onInputChange} value={emptySlots} />
      <Mapa lat={41.3850639} long={2.1734035} data={data.filter(station => station.free_bikes >= emptySlots)} />
      {
        isLoading
          ? <p>Loading...</p>
          : <ContentTable data={data.filter(station => station.free_bikes >= emptySlots)} />
      }

    </>
  )
}

export default App