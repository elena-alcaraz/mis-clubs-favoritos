
function Filter({ setFilter }) {

  /*  const handleChange = (event) => {
    setFilter(event.target.value)
   } */

  return (
    <div>
        <label htmlFor="">Mostrar</label>
        <select onChange={(ev) => setFilter(ev.target.value)}>
            <option value="all">Todos</option>
            <option value="weekend">Abren los fines de semana</option>
            <option value="weekdays">Abren entre semana</option>
        </select>
    </div>
  )
}

export default Filter