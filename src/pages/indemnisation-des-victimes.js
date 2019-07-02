import React from "react"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import '../components/footer.css'
import pic3 from '../images/prejudice.png';

const Indemnisation = () => (
  <Layout>


  <div className="background-hono">


  <div className="salaries2">




          <h2 className="title">
        <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#F2DC17"/>
        </svg>
       INDEMNISATION DES VICTIMES</h2>

        <p className="desc">
        Vous avez un litige avec votre employeur, l’employeur a commis des manquements graves dans l’exécution de votre contrat de travail, vous venez d’être licencié, vous souhaitez rompre votre contrat aux torts de l’employeur, vous envisagez une rupture conventionnelle ….

Me MAMERI vous conseillera utilement et assurera la défense de vos intérêts tant par la voie amiable que par la voie judiciaire notamment devant le Conseil de Prud’hommes.


          </p>




    </div>



    </div>


   <div className="blue2">
  <div className="indemn b"><Link to="indemnisation-des-victimes">
    <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> ACCIDENT DE LA ROUTE </h3>



  </Link></div>
 <div className="salar b"> <Link to="defense-des-salaries">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> AGRESSION ET DELITS ROUTIERS </h3>


  </Link></div>
  <div className="ass b"><Link to="defense-des-personnes-malades-handicap">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> ACCIDENTS MEDICAUX</h3>

  </Link></div>

  </div>


   <div className="blue2">
  <div className="indemn b"><Link to="indemnisation-des-victimes">
    <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> ACCIDENT DE SPORT </h3>



  </Link></div>

   <div className="salar b"> <Link to="defense-des-salaries">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> ACCIDENTS DU TRAVAIL </h3>


  </Link></div>


 <div className="salar b"> <Link to="defense-des-salaries">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> ACCIDENTS DE LA VIE PRIVÉE </h3>


  </Link></div>


  </div>








  </Layout>
)

export default Indemnisation;
