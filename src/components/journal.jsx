import { IMAGE } from "./image"
export const Header=()=>{
  return(
<div className="title">
  <header>

            <img src={IMAGE.image1}alt="logo" className="global" />
            <p className="titleChild">my travel journal.</p>
  </header>
          </div>
  )
}
export const JournelItem=(props)=>{
    console.log(props);
    return(
        <div className="allAbove">
          
          <div className="eachJournal">
            <img src={props.img} alt="journal image" className="image" />
            <div className="words">
            <img src={props.imageLocation} alt="locationTag" className="locationTag" /> 
            <p className="location">{props.location}</p>
            <a href={props.map} className="mapLink">view on Google maps</a>
            <h2 className="Journaltitle">{props.title}</h2>
            <p className="startAndEnd">{props.start}-{props.end}</p>
            <p className="journalDescription">{props.description}</p>
            </div>
            
          </div>  
        </div>
    )
}
