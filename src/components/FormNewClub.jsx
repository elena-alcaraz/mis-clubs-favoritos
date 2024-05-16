import React, { useState } from 'react';

function FormNewClub({ addNewClub, addNewClubArray }) {
    const [name, setClubName] = useState('');
    const [openOnWeekdays, setopenOnWeek] = useState(false);
    const [openOnWeekend, setopenOnWeekend] = useState(false);

const handleInput = (ev) => {
    setClubName(ev.target.value)
    addNewClub(ev.target.id, ev.target.value);
}

const handleWeekChange = (ev) => {
    setopenOnWeek(ev.target.checked);
    addNewClub('openOnWeekdays',  ev.target.checked);
  };

  const handleWeekendChange = (ev) => {
    setopenOnWeekend(ev.target.checked)
    addNewClub('openOnWeekend',  ev.target.checked);
  };

  const handleSubmit = (ev) => {
    console.log(name, openOnWeekdays, openOnWeekend);
    ev.preventDefault();
    addNewClubArray();
  };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del Club</label>
        <input type="text" name="name" id="name" onChange={handleInput}/>
        <br/>
        <label htmlFor="openOnWeekdays">Abierto entre semana: </label>
        <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" checked={openOnWeekdays} onChange={handleWeekChange}/>
        <br/>
        <label htmlFor="openOnWeekend">Abierto el fin de semana: </label>
        <input type="checkbox" name="openOnWeekend" id="openOnWeekend" checked={openOnWeekend} onChange={handleWeekendChange}/>
        <br/>
        <input type="submit" value="Agregar un nuevo club" />
    </form>

  )
}

export default FormNewClub