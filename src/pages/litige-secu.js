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
import pic10 from '../images/secu.jpeg';

const Secu = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> LITIGE AVEC LA SÉCURITÉ SOCIALE </h1>
       <img  src={pic10} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez sollicité une prestation auprès de la sécurité sociale pour pallier une perte de
revenu ( <span className="bold"> <Link to="/protection-sociale/#TPT" className="underl"> temps-partiel thérapeutique</Link> </span>, <span className="bold"> <Link to="/protection-sociale/#AT" className="underl"> arrêts de travail</Link> </span>, <span className="bold"> <Link to="/protection-sociale/" className="underl"> pension d'invalidité </Link> </span> …) ou
obtenir un statut protecteur (affection de longue durée …). </p>

<p className="desc">
Vous êtes en litige avec la sécurité sociale qui a rejeté ou mal évalué ces prestations.  </p>

<p className="desc">
Maître Quentin MAMERI vous accompagnera dans vos démarches de contestation amiables ou judiciaires y compris pendant les phases d’expertises médicales éventuelles.  </p>

<p className="desc">
Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>



      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Secu;
