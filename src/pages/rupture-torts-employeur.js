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

const Rupturetorts = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> RUPTURE DU CONTRAT DE TRAVAIL AUX TORTS DE L'EMPLOYEUR </h1>
    <p className="desc"> Votre employeur a commis des manquements graves dans l’exécution de votre contrat de travail rendant impossible le maintien de la relation de travail. Vous pouvez, dans certaines conditions, obtenir une rupture du contrat aux torts de votre employeur (prise d’acte de rupture du contrat ou résiliation judiciaire). </p>
<p className="desc"> Maître Quentin MAMERI analysera votre dossier, vous conseillera utilement sur la procédure la plus adaptée au regard de votre situation, et assurera le défense de vos droits de salariés devant le conseil de prud’hommes.  </p>

<p className="desc"> Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>



      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Rupturetorts;
