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
import pic9 from '../images/image 7.png';

const Sport = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENT DE SPORT</h1>
       <img  src={pic9} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez été victime d’un accident dans le cadre d’une activité ou d’une compétition
sportive ou de loisirs. </p>
<p className="desc">Maitre Quentin MAMERI vous conseillera utilement et mettra en œuvre une stratégie
adaptée et personnalisée pour vous permettre d’obtenir réparation des préjudices que vous
avez subis.
Il vous accompagnera tout au long de la procédure, de l’ <span className= "bold" ><Link to="/reparation-dommage-corporel/#EM"> expertise médicale </Link> </span> à la phase
d’indemnisation des préjudices et ce jusqu’au recouvrement effectif de votre indemnisation.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>

<MotsClefs />

      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Sport;
