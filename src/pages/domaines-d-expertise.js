import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/footer.css'
import pic1 from '../images/parispic.png';
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi.png';

const DomainesDexpertise = () => (
  <Layout>

  <div className="background-hono">
    <h1> DOMAINES D'EXPERTISES </h1>


 </div>

  <div className="blue2">
  <Link to="indemnisation-des-victimes"><div className="indemn2 ">
    <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> INDEMNISATION DES VICTIMES </h3>



  </div></Link>
 <Link to="defense-des-salaries"><div className="salar2 ">
   <img  src={pic4} className="picindex3" alt="fireSpot" />
  <h3> DÉFENSE DES SALARIÉS </h3>


</div></Link>
  <Link to="defense-des-personnes-malades-handicap"><div className="ass2">
   <img  src={pic5} className="picindex4" alt="fireSpot" />
  <h3> DÉFENSE EN MATIÈRE DE SÉCURITE ET D’AIDE SOCIALES </h3>

  </div></Link>

  </div>



  </Layout>
)

export default DomainesDexpertise;
