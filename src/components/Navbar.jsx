import { Link } from "react-router-dom";


 export const Navbar=()=>{
    return(
        <div className="link">
             <Link to='/' className="links">Home</Link>
            <Link to='/my' className="links">myJournal</Link>
          
          
        </div>
    )
 }          