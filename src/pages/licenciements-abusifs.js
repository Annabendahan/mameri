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
import pic6 from '../images/image 15.png';

const Abusifs = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> LICENCIEMENTS ABUSIFS </h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez été licencié pour faute par votre employeur ou pour tout autre motif que vous
estimez infondé (licenciement pour arrêt de travail perturbant gravement le fonctionnement
de l’entreprise, licenciement pour inaptitude …) </p>
<p className="desc"> Maitre MAMERI analysera votre dossier et mettra tout en œuvre pour défendre vos droits
de salarié devant le conseil de prud’hommes.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>



      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Abusifs;
