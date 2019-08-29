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
    <p className="desc"> Votre employeur a commis des manquements graves dans l’exécution de votre contrat de
travail rendant impossible le maintien de la relation de travail.
Vous pouvez, dans certaines conditions, obtenir une rupture du contrat aux torts de votre
employeur (prise d’acte de rupture du contrat ou résiliation judiciaire).
Me MAMERI analysera votre dossier, vous conseillera utilement sur la procédure la plus
adaptée au regard de votre situation, et défendra vos droits de salariés devant le conseil de
prud’hommes.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>

<p className="desc"> <span className= "bold" > <Link to= "/droit-du-travail/" className="underl"> En savoir plus sur la résiliation judiciaire et la
prise d’acte  </Link> </span> </p>



      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Rupturetorts;
