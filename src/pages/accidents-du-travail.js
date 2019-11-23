import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import pic1 from '../images/parispic.png';
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi3.png';
import pic8 from '../images/image 5.png';

const Travail = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS DU TRAVAIL</h1>
       <img  src={pic8} className="picdefense" alt="fireSpot" />
    <p className="desc">
Vous venez d’être victime d’un <span className="bold"> <Link to="/reparation-dommage-corporel/#AT">accident du travail</Link></span>, d’un <span className="bold"><Link to="/reparation-dommage-corporel/#ATR">accident de trajet</Link></span> ou d’un <span className="bold"><Link to="/reparation-dommage-corporel/#AM">accident de mission</Link></span>. </p>

<p className="desc-s"> La reconnaissance en accident du travail par la CPAM permet de bénéficier en cas d’arrêt de travail du versement d’un revenu de remplacement sous forme d’indemnités journalières jusqu’à <span className="bold"><Link to="/reparation-dommage-corporel/#C"> la consolidation</Link> </span>et par la suite, en cas de séquelles, d’obtenir une indemnisation par la sécurité sociale sous forme de rente ou de capital selon le taux incapacité (entre 1 et 9 %, versement d’un capital, au-delà versement d’une rente périodique). </p>

<p className="desc-s"> Pour obtenir une réparation des préjudices supplémentaires en matière d’accident du travail, le salarié devra agir contre l’employeur en faute inexcusable. </p>
<p className="desc"> En cas d’accident de trajet, il n’est pas possible d’agir en <span className="bold"><Link to="/reparation-dommage-corporel/#FIE"> faute inexcusable</Link></span>. Il est cependant possible d’agir contre le responsable de l’accident et son assureur si celui-ci est tiers à l’entreprise. </p>

<p className="desc"> Maître Quentin MAMERI vous accompagne dans tous les litiges relatifs aux accidents du travail.
 </p>


<p className="desc"> - refus de reconnaissance d’un accident du travail </p>
<p className="desc">  - désaccord sur la date de consolidation fixée par la CPAM </p>
 <p className="desc"> - désaccord avec le taux d’incapacité fixé par la CPAM </p>
<p className="desc"> - procédure en faute inexcusable contre l’employeur. </p>

<p className="desc"> Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>



<MotsClefs
 link1=<Link to="/reparation-dommage-corporel/#AT"> Accident du travail </Link>
  link2=<Link to="/reparation-dommage-corporel/#AM"> Accident de mission</Link>
  link3=<Link to="/reparation-dommage-corporel/#ATR"> Accident de trajet</Link>
  link4=<Link to="/reparation-dommage-corporel/#C"> Consolidation</Link>
  link5=<Link to="/reparation-dommage-corporel/#FIE"> Faute inexcusable</Link> />

      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Travail;
