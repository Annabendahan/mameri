import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import pic10 from '../images/te.jpeg';

const Rupturetorts = () => (
  <Layout>

  <div className="background-hono">


  <div className="bigbox">
  <div className="bleft">
  <h1> RUPTURE DU CONTRAT DE TRAVAIL AUX TORTS DE L'EMPLOYEUR </h1>
  <img  src={pic10} className="picdefense" alt="fireSpot" />
  <p className="desc"> Votre employeur a commis des manquements graves dans l’exécution de votre contrat de travail rendant impossible le maintien de la relation de travail. Vous pouvez, dans certaines conditions, obtenir une rupture du contrat  aux torts de votre employeur (<span className="bold"> <Link to="/droit-du-travail">prise d’acte de rupture du contrat</Link> </span> ou <span className="bold"><Link to="/droit-du-travail/#RJ">résiliation judiciaire</Link> </span>). </p>
  <p className="desc"> Maître Quentin MAMERI analysera votre dossier, vous conseillera utilement sur la procédure la plus adaptée au regard de votre situation, et assurera le défense de vos droits de salariés devant le conseil de prud’hommes.  </p>

  <p className="desc"> Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>

  <MotsClefs
link1=<Link to="/droit-du-travail"> Prise d’acte de rupture du contrat </Link>
link2=<Link to="/droit-du-travail/#RJ"> Résiliation judiciaire</Link> />

  </div>

  <VisitCard />
  </div>

  </div>

  </Layout>
  )


  export default Rupturetorts;
