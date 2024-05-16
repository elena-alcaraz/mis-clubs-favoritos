import React from 'react'

function Card({ club, numberOfClub }) {
  return (
    <div>
        <h2>#{numberOfClub}: {club.name}</h2>
        <h6>Abierto entre semana: {club.openOnWeekdays ? "Sí" : "No"} </h6>
        <h6>Abierto el fin de semana: {club.openOnWeekend ? "Sí" : "No"}</h6>
    </div>
  )
}

export default Card