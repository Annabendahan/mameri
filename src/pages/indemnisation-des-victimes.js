import React from "react"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import pic3 from '../images/prejudice.png';
import pic4 from '../images/image.png';
import pic5 from '../images/image 2.png';
import pic6 from '../images/image 3.png';
import pic7 from '../images/image 4.png';
import pic8 from '../images/image 5.png';
import pic9 from '../images/image 7.png';
import pic2 from '../images/quentinmameripic.png';
import pic10 from '../images/image 16.png';

import pic11 from '../images/ar.jpeg';
import pic12 from '../images/am.jpeg';
import pic13 from '../images/as.jpeg';
import pic14 from '../images/avp.jpeg';

import pic16 from '../images/ip.jpeg';
import pic17 from '../images/agg.jpeg';
import pic18 from '../images/image 16.png';



const Indemnisation = () => (
  <Layout>


  <div className="background-hono">
    <div className="bigbox">

      <div className="bleft">
        <h1> DÉFENSE DES VICTIMES  </h1>
        <p className="desc"> Vous avez un litige avec votre employeur, l’employeur a commis des manquements graves dans l’exécution de votre contrat de travail, vous venez d’être licencié, vous souhaitez rompre votre contrat aux torts de l’employeur, vous envisagez une rupture conventionnelle ….
        Me MAMERI vous conseillera utilement et assurera la défense de vos intérêts tant par la voie amiable que par la voie judiciaire notamment devant le Conseil de Prud’hommes.
        </p>
        <div className="blue2">

          <Link to="/accidents-de-la-route/"><div className="indemn2 ">
          <img  src={pic11} className="picindex3" alt="fireSpot" />
          <h3> ACCIDENT DE LA ROUTE </h3>
          </div></Link>

          <Link to="/accidents-medicaux/"><div className="ass2 ">
          <img  src={pic12} className="picindex3" alt="fireSpot" />
          <h3> ACCIDENTS MEDICAUX</h3>
          </div></Link>
        </div>


        <div className="blue2">
          <Link to="/accidents-de-sport/"><div className="indemn2 ">
          <img  src={pic13} className="picindex3" alt="fireSpot" />
          <h3> ACCIDENT DE SPORT </h3>



          </div></Link>

          <Link to="/accidents-de-la-vie-privee/"><div className="ass2 ">
          <img  src={pic14} className="picindex3" alt="fireSpot" />
          <h3> ACCIDENTS DE LA VIE PRIVÉE </h3>


          </div>  </Link>

          <Link to="/accidents-du-travail/"><div className="salar2 ">
          <img  src={pic8} className="picindex3" alt="fireSpot" />
          <h3> ACCIDENTS DU TRAVAIL </h3>

          </div></Link>

          <Link to="/infractions-penales/"><div className="salar2 ">
          <img  src={pic16} className="picindex3" alt="fireSpot" />
          <h3> INFRACTIONS PÉNALES</h3>
          </div> </Link>


          <Link to="/aggravation/"><div className="salar2 ">
          <img  src={pic17} className="picindex3" alt="fireSpot" />
          <h3> RÉOUVERTURE EN AGGRAVATION </h3>

          </div></Link>
        </div>
         </div>




      <VisitCard />


    </div>

  </div>

  </Layout>
)

export default Indemnisation;
