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

const Conseils = () => (
  <Layout>
  <div className="background-hono">



    <div className="bigbox">
      <div className="bleft">
       <h1> CONSEILS PRATIQUES </h1>



       <div className="blue2">

  <Link to="/conseils-aux-victimes/" ><div className="indemn2 ">
    <img  src={pic2} className="picindex3" alt="fireSpot" />
   <h3> CONSEILS AUX VICTIMES</h3>
  </div></Link>

   <Link to="/conseils-aux-salaries/"> <div className="salar2 ">
   <img  src={pic2} className="picindex3" alt="fireSpot" />
  <h3> CONSEILS AUX SALARIÉS </h3>


  </div></Link>

  </div>



      </div>

      <VisitCard />
    </div>


    </div>




  </Layout>
)

export default Conseils;


