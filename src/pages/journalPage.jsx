import { JournelItem,Header } from "../components/journal"
import { Data } from "../data"
export const Journel=()=>{
  
    // console.log(Data);
    // console.log(JournelItem);
    const original=Data.map((data)=>{
        return(
            <JournelItem    
            key={data.id}
            img={data.imageUrl}
            location={data.location}
            map={data.googleMapsUrl}
            title={data.title}
            start={data.startDate}
            end={data.endDate}
            description={data.description}
            imageLocation={data.imageLocation}
            />
        )
    })

    return(
        <div className="containAll">
            <Header/>
            {original}
        </div>
    )
}