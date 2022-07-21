const ParkCard = (props) => {

  return (
    <div>
      {props.parks.map((park)=>(
        <div key={parks.id} onClick={props.onClick}> 
          <div>
            <img src={park.image} alt='Theme Park Image' />
            <h2>{park.name}</h2>
            <h3>{park.location}</h3>
          </div>

       </div> 
      ))
      }
    </div>
  )
}

export default ParkCard

