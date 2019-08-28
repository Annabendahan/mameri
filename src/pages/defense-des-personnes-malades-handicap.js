import React from "react"
import '../components/contact.css'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import pic3 from '../images/handi2.png';
import pic4 from '../images/image 12.png';
import pic5 from '../images/image 13.png';
import pic6 from '../images/Group 2.png';
import pic2 from '../images/quentinmameripic.png';

const Malade = () => (
  <Layout>

   <div className="background-hono">
    <div className="bigbox">

      <div className="bleft">
        <h1>  DÉFENSE DES MALADES  </h1>
        <p className="desc"> Vous avez un litige avec les organismes de sécurité sociale ou avec la MDPH concernant des prestations sociales en lien avec la santé ou le handicap (refus de pension d’invalidité, refus d’AAH, refus de carte d’invalidité, refus de prestation de compensation du handicap, refus d’indemnités journalières …).

Me MAMERI vous représentera et vous assistera dans l’ensemble des litiges de sécurité sociale et d’aide sociale en matière de santé et de handicap. </p>
       <div className="blue2">
  <Link to="/litige-secu/"><div className="indemn2 ">
    <img  src={pic4} className="picindex3" alt="fireSpot" />
  <h3> LITIGE AVEC LA SECURITE SOCIALE </h3>



 </div> </Link>
 <Link to="/litige-mdph/"><div className="salar2 ">
   <img  src={pic6} className="picindex3" alt="fireSpot" />
  <h3> LITIGE AVEC LA MDPH </h3>


  </div></Link>
 <Link to="/litige-assurances/"> <div className="ass2 ">
   <img  src={pic5} className="picindex3" alt="fireSpot" />
  <h3> LITIGE AVEC LES ASSURANCES</h3>

 </div> </Link>

  </div>

         </div>




      <VisitCard />



    </div>

  </div>



  </Layout>
)

export default Malade;
