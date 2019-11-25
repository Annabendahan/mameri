import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import pic1 from '../images/parispic.png';
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi3.png';
import pic15 from '../images/sd.jpeg';

const Sanction = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> SANCTION DISCIPLINAIRE</h1>

    <p className="desc"> Vous avez été sanctionné disciplinairement par votre employeur et vous contestez la sanction dans son principe ou son étendue (avertissement, blâme, mise à pied, etc.). </p>

   <p className="desc">
Maître Quentin MAMERI vous conseillera utilement et mettra en œuvre la procédure la plus adaptée pour défendre vos droits de salarié.</p>

 <p className="desc">Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>


      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Sanction;
