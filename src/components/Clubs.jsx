import Card from './Card'

function Clubs({ clubList }) {
  return (
    <ul>
       {clubList.map((club, index) => <li key={index} className="li"> <Card club={club} numberOfClub={index} /> </li> )} 
    </ul>
  )
}

export default Clubs