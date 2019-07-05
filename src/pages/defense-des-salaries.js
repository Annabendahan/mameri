import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import '../components/footer.css'
import pic3 from '../images/work2.png';

const Salaries = () => (
  <Layout>


   <div className="background-hono">


  <div className="salaries">


  <div className="salaries-left">

            <h2 className="title">
          <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="10" height="10" fill="#F2DC17"/>
          </svg>
          DÉFENSE DES SALARIÉS</h2>

          <p className="desc">
            Vous avez un litige avec votre employeur, l’employeur a commis des manquements graves dans l’exécution de votre contrat de travail, vous venez d’être licencié, vous souhaitez rompre votre contrat aux torts de l’employeur, vous envisagez une rupture conventionnelle ….

  Me MAMERI vous conseillera utilement et assurera la défense de vos intérêts tant par la voie amiable que par la voie judiciaire notamment devant le Conseil de Prud’hommes.
            </p>
  </div>
<div className="salaries-right"><img  src={pic3} className="picdefense" alt="fireSpot" /> </div>



    </div>



    </div>


   <div className="blue2">

  <Link to="indemnisation-des-victimes"><div className="indemn2 ">
    <img  src={pic3} className="picindex3" alt="fireSpot" />
   <h3> RUPTURE CONVENTIONNELLE </h3>
  </div></Link>

 <Link to="defense-des-salaries"><div className="salar2 ">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> LICENCIEMENTS ABUSIFS </h3>


  </div></Link>
  <Link to="defense-des-personnes-malades-handicap"><div className="ass2 ">
   <img  src={pic3} className="picindex3" alt="fireSpot" />
  <h3> MANQUEMENTS GRAVES DE L'EMPLOYEUR ET HARCÈLEMENT MORAL</h3>

  </div></Link>

  </div>















  </Layout>
)

export default Salaries;
