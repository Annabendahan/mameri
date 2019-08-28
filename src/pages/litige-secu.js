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
import pic6 from '../images/image 12.png';

const Secu = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> LITIGE AVEC LA SÉCURITÉ SOCIALE </h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez sollicité une prestation auprès de la sécurité sociale pour pallier une perte de
revenu ( <span className="bold"> <Link to="/protection-sociale/#TPT"> temps-partiel thérapeutique</Link> </span>, <span className="bold"> <Link to="/protection-sociale/#AT"> arrêts de travail</Link> </span>, placement en <span className="bold"> <Link to="/protection-sociale/#I"> invalidité </Link> </span> …) ou
obtenir un statut protecteur (affection de longue durée …).
Vous êtes en litige avec la sécurité sociale qui a rejeté ou mal évalué ces prestations.
Me Quentin MAMERI vous accompagnera dans vos démarches de contestation amiables ou
judiciaires.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>



      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Secu;
