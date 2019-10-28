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
    <p className="desc"> Vous avez été victime d’un accident dans le cadre d’une activité ou d’une compétition sportive ou de loisirs ? </p>
<p className="desc">Maître Quentin MAMERI intervient exclusivement pour les victimes et leurs proches.</p>

<p className="desc">Maître Quentin MAMERI vous conseillera utilement et mettra tout en œuvre pour vous permettre d’obtenir réparation intégrale de vos préjudices. </p>

<p className="desc">Il vous accompagnera tout au long de la procédure y compris pendant la phase d’<span className= "bold" ><Link to="/reparation-dommage-corporel/#EM">expertise médicale</Link> </span>. </p>

<p className="desc">Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>


<MotsClefs />

      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Sport;
