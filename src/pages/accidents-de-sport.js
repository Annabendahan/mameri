import React from "react"
import '../components/defense.css'
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'

import pic13 from '../images/as.jpeg';


const Sport = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENT DE SPORT</h1>
       <img  src={pic13} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous avez été victime d’un accident dans le cadre d’une activité ou d’une compétition sportive ou de loisirs ? </p>
<p className="desc">Maître Quentin MAMERI intervient exclusivement pour les victimes et leurs proches.</p>

<p className="desc">Maître Quentin MAMERI vous conseillera utilement et mettra tout en œuvre pour vous permettre d’obtenir <span className= "bold" ><Link to="/reparation-dommage-corporel/#RIP">réparation intégrale</Link></span> de vos préjudices. </p>

<p className="desc">Il vous accompagnera tout au long de la procédure y compris pendant la phase d’<span className= "bold" ><Link to="/reparation-dommage-corporel/#EM">expertise médicale</Link> </span>. </p>

<p className="desc">Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>


<MotsClefs
  link1=<Link to="/reparation-dommage-corporel/#RIP"> Réparation intégrale</Link>
  link2=<Link to="/reparation-dommage-corporel/#EM"> Expertise médicale</Link>
/>

      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Sport;
