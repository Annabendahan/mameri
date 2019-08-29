import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';
import pic3 from '../images/image 16.png';

const Aggravation = () => (

  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> AGGRAVATION </h1>

    <p className="desc"> Si vos séquelles se sont aggravées depuis votre indemnisation, vous avez la possibilité de faire réouvrir votre dossier pour être indemnisé de vos nouveaux préjudices. </p>
<img  src={pic3} className="picdefense" alt="fireSpot" />
<p className="desc">Il peut s’agir d’une aggravation « médicale » se manifestant par l’apparition de nouvelles lésions ou d’une aggravation des séquelles préexistantes.

Il conviendra alors de solliciter auprès de votre médecin un certificat médical décrivant précisément la nature de l’aggravation et établissant le lien avec l’accident initial. Ce certificat est essentiel pour mettre en place une nouvelle évaluation par voie d’expertise amiable ou judiciaire.

Outre l’aggravation médicale, votre dossier peut être réouvert en cas d’aggravation « situationnelle ».

En effet, la jurisprudence permet à une victime dont l’état de santé ne s’est pas médicalement aggravé de demander une nouvelle réparation en cas de changement de situation postérieurement à votre indemnisation (ex : besoin en aide humaine nouveau du fait de la naissance d’un enfant / nécessité d’un logement adapté suite à un déménagement). </p>

<p className="desc">Me MAMERI mettra tout en œuvre pour faire reconnaitre votre situation d’aggravation et vous permettre d’obtenir <span className= "bold" ><Link to="/reparation-dommage-corporel/#RIP">  réparation intégrale de vos préjudices. </Link> </span> Il défendra vos droits de victime à chaque stade de la procédure et vous fera bénéficier de son réseau de médecin-conseil de victimes.

Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI, avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>



      </div>
<VisitCard />
    </div>





  </div>




  </Layout>

)


  export default Aggravation
