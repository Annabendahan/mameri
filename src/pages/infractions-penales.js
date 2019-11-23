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
import pic6 from '../images/image 2.png';
import pic16 from '../images/ip.jpeg';


const Agression = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> INFRACTIONS PENALES </h1>
       <img  src={pic16} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous êtes victime d’une infraction pénale à l’origine d’un dommage corporel. </p>
<p className="desc"> Il peut s’agir d’une contravention, d’un délit ou d’un crime.  </p>
<p className="desc"> Les infractions pénales peuvent être de nature diverse : agression, homicide involontaire, délits routiers …  </p>
<p className="desc">Quelle que soit la nature ou la gravité de l’infraction, Maître MAMERI mettra tout en œuvre pour que vos droits soient défendus et que vous obteniez <span className= "bold" >  <Link to="/reparation-dommage-corporel/#RIP"> réparation intégrale</Link></span> de vos préjudices en tant que victime directe ou proches.  </p>
<p className="desc"> Maître Quentin MAMERI intervient exclusivement pour les victimes et leurs proches. Il intervient sur l’ensemble du territoire français y compris les DOM-TOM et défendra vos intérêts devant l’ensemble des juridictions pénales (tribunal de police, tribunal correctionnel,...) et devant les Commissions d’Indemnisation des Victimes d’Infractions.  </p>
<p className="desc">
Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.  </p>


<MotsClefs
link1=<Link to="/reparation-dommage-corporel/#RIP"> Réparation intégrale</Link> />
      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Agression;
