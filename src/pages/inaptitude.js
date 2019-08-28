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

const Inaptitude = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> INAPTITUDE </h1>
    <p className="desc"> Maître MAMERI intervient pour tous les litiges concernant l’inaptitude au travail :
- Contestation devant le CPH de l’avis du médecin du travail prononçant une aptitude
ou une inaptitude
- Contestation du licenciement pour inaptitude prononcé par l’employeur (insuffisance
de recherche de reclassement …).
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>



      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Inaptitude;
