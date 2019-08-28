import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import pic1 from '../images/parispic.png';
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi3.png';

const Sanction = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> SANCTION DISCIPLINAIRE</h1>
    <p className="desc"> Vous avez été sanctionné disciplinairement par votre employeur et vous contestez la
sanction dans son principe ou son étendue (avertissement, blâme, mise à pied …).
Maitre MAMERI analysera votre dossier et mettra en œuvre la procédure la plus adaptée
pour défendre vos droits de salarié.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.</p>



      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Sanction;
