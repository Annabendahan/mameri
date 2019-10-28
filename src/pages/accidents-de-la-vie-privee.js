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

const Privée = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS DE LA VIE PRIVÉE</h1>
       <img  src={pic9} className="picdefense" alt="fireSpot" />


    <p className="desc"> En cas d’accidents de la vie privée, vous pouvez être indemnisé par votre compagnie d’assurance si vous avez souscrit une garantie dite des accidents de la vie.  </p>

    <p className="desc"> C’est le contrat que vous avez conclu avec votre compagnie d’assurance qui fixe le cas dans lesquels la garantie peut être mobilisée ainsi que les modalités d’indemnisation. </p>


    <p className="desc"> Il suffit donc de se reporter aux conditions générales et particulières pour prendre connaissance des conditions de la garantie ainsi que de l’étendue des préjudices réparables.  </p>


    <p className="desc"> Il est important d’être assisté par un professionnel dans ces démarches que ce soit pendant la phase d’<span className= "bold" ><Link to="/reparation-dommage-corporel/#EM">expertise médicale</Link> </span> que celle relative à la négociation financière de vos préjudices afin d’obtenir la réparation qui vous est due contractuellement. </p>


    <p className="desc"> Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.  </p>

<MotsClefs />

      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Privée;
