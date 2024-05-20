import "../styles/App.scss";
import initialData from "../services/data.json"
import { useState } from "react";
import Clubs from "./Clubs";
import FormNewClub from "./FormNewClub";
import Filter from "./Filter";


function App() {

  const [clubList, setClubList] = useState(initialData);
  const [newClub, setNewClub] = useState ({name: "", openOnWeekdays: "", openOnWeekend: ""})

  //variable de estado para el filter
  const [filter, setFilter] = useState ("all");

  //añadimos los datos de un nuevo club
  const addNewClub = (key, value) => {
    const newObject = { ...newClub, [key]: value };
    setNewClub(newObject);
  }

  //añadir la nueva flor al array del gallery
  const addNewClubArray = () => {
    setClubList([...clubList, newClub])
  }

  //Función para filtrar (in progess)
  const filteredClubs = () => {
    return clubList.filter((club) => {
      if (filter === "weekend") {
        //return club.openOnWeekend
        return club.openOnWeekend === true
      } else if (filter === "weekdays") {
        return club.openOnWeekdays === true
      }
      //return club
      return true
    })
  }

  
  return (
    <>
      <h1>Mis Clubs</h1>
      <Filter setFilter={setFilter}/>
      <br/>
      <Clubs clubList={filteredClubs()} />
      <br/>
      <FormNewClub addNewClub={addNewClub} addNewClubArray={addNewClubArray}/>

    </>
  )
}

export default App
