import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import pic3 from '../images/work2.png';
import pic4 from '../images/image 14.png';
import pic5 from '../images/image 15.png';
import pic6 from '../images/image 10.png';
import pic2 from '../images/quentinmameripic.png';


const Salaries = () => (
  <Layout>


  <div className="background-hono">
    <div className="bigbox">

      <div className="bleft">
        <h1> DÉFENSE DES SALARIÉS </h1>
        <p className="desc"> Vous avez un litige avec votre employeur, l’employeur a commis des manquements graves dans l’exécution de votre contrat de travail, vous venez d’être licencié, vous souhaitez rompre votre contrat aux torts de l’employeur, vous envisagez une rupture conventionnelle ….

  Me MAMERI vous conseillera utilement et assurera la défense de vos intérêts tant par la voie amiable que par la voie judiciaire notamment devant le Conseil de Prud’hommes.</p>
        <div className="blue2">

  <Link to="/rupture-conventionnelle/"><div className="indemn2 ">
    <img  src={pic4} className="picindex3" alt="fireSpot" />
   <h3> RUPTURE CONVENTIONNELLE </h3>
  </div></Link>

 <Link to="/licenciements-abusifs/"><div className="salar2 ">
   <img  src={pic5} className="picindex3" alt="fireSpot" />
  <h3> LICENCIEMENTS ABUSIFS </h3>


  </div></Link>
  <Link to="/harcelement-moral/"><div className="ass2 ">
   <img  src={pic6} className="picindex3" alt="fireSpot" />
  <h3>  HARCÈLEMENT MORAL</h3>

  </div></Link>


   <Link to="/sanction-disciplinaire/"><div className="ass2 ">
   <img  src={pic6} className="picindex3" alt="fireSpot" />
  <h3> SANCTION DISCIPLINAIRE</h3>

  </div></Link>

  </div>
         </div>




      <VisitCard />



    </div>

  </div>























  </Layout>
)

export default Salaries;
