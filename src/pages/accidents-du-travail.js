import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import pic1 from '../images/parispic.png';
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi3.png';
import pic8 from '../images/image 5.png';

const Travail = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS DU TRAVAIL</h1>
       <img  src={pic8} className="picdefense" alt="fireSpot" />
    <p className="desc">
Me MAMERI vous accompagne dans le cadre des procédures en accident du travail.

Il vous accompagne à tous les stades de la procédure : </p>

<p className="desc-s">-  Reconnaissance d’un accident du travail </p>
<p className="desc-s"> - Contestation du taux d’incapacité fixé par le médecin Conseil de la CPAM </p>
<p className="desc">- Reconnaissance de la faute inexcusable de l’employeur. </p>


<p className="desc"> <span className= "bold" > <Link to= "/reparation-dommage-corporel/#FIE"> En savoir plus sur la faute inexcusable de l'employeur  </Link> </span> </p>

<MotsClefs />

      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Travail;
