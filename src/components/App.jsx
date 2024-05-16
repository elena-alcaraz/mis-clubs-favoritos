import "../styles/App.scss";
import initialData from "../services/data.json"
import { useState } from "react";
import Clubs from "./Clubs";
import FormNewClub from "./FormNewClub";


function App() {

  const [clubList, setClubList] = useState(initialData);
  const [newClub, setNewClub] = useState ({name: "", openOnWeekdays: "", openOnWeekend: ""})

  //añadimos los datos de un nuevo club
  const addNewClub = (key, value) => {
    const newObject = { ...newClub, [key]: value };
    setNewClub(newObject);
  }

  //añadir la nueva flor al array del gallery
  const addNewClubArray = () => {
    setClubList([...clubList, newClub])
  }
  

  return (
    <>
      <h1>Mis Clubs</h1>
      <br/>
      <Clubs clubList={clubList} />
      <br/>
      <FormNewClub addNewClub={addNewClub} addNewClubArray={addNewClubArray}/>

    </>
  )
}

export default App
