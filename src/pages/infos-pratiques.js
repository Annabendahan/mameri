import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';
import pic16 from '../images/ip.jpeg';

const Infos = () => (
  <Layout>
  <div className="background-hono">



    <div className="bigbox">
      <div className="bleft">
       <h1> INFOS PRATIQUES </h1>



       <div className="blue2">

  <Link to="/reparation-dommage-corporel/" ><div className="indemn2 ">
    <img  src={pic16} className="picindex3" alt="fireSpot" />
   <h3> REPARATION DU DOMMAGE CORPOREL</h3>
  </div></Link>

   <Link to="/droit-du-travail/"> <div className="salar2 ">
   <img  src={pic2} className="picindex3" alt="fireSpot" />
  <h3> DROIT DU TRAVAIL </h3>

   </div></Link>

   <Link to="/protection-sociale/"> <div className="salar2 ">
   <img  src={pic2} className="picindex3" alt="fireSpot" />
  <h3> PROTECTION SOCIALE </h3>


  </div></Link>

  </div>



      </div>

     <VisitCard />
    </div>


    </div>




  </Layout>
)

export default Infos;


