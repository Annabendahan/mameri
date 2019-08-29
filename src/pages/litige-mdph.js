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
import pic6 from '../images/Group 2.png';

const Mdph = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> LITIGE AVEC LA MDPH </h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez sollicité auprès de la MDPH une prestation pour vous garantir des ressources
et/ou pour compenser votre handicap ( <span className="bold"> <Link to="/protection-sociale/#AAH" className="underl"> allocations aux adultes handicapés  </Link> </span>, allocation
d’éducation de l’enfant handicapé, <span className="bold">  <Link to="/protection-sociale/#PCH" className="underl"> prestation de compensation du handicap </Link> </span>), pour faciliter
vos déplacements ou vos transports (<span className="bold"> <Link to="/protection-sociale/#CMI" className="underl"> carte de mobilité-inclusion </Link> </span> priorité ou stationnement)
ou bien encore pour que votre handicap soit pris en compte au niveau de l’emploi
(<span className="bold"> <Link to="/protection-sociale/#RTH" className="underl"> reconnaissance de qualité de travailleurs handicapés </Link> </span>).
Ces prestations vous ont été refusées pour des motifs médicaux ou administratifs ou vous
contestez leurs évaluations. </p>
<p className="desc"> Me Quentin MAMERI vous accompagnera dans vos démarches de contestation amiables ou
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


export default Mdph;
