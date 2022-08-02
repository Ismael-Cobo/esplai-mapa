import { Table } from "react-bootstrap"


export const ContentTable = ({ data }) => {
  return (
    <Table striped bordered hover variant="dark" className="w-75 mx-auto mt-5">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Bicis disponibles</th>
          <th>Slots vacios</th>
          <th>Lat</th>
          <th>Long</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(data => {
            const { empty_slots, free_bikes, latitude, longitude, name } = data
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{free_bikes}</td>
                <td>{empty_slots}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}
