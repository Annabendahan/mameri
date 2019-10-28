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
import pic6 from '../images/image 3.png';

const Médicaux = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS MÉDICAUX</h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Que vous soyez victime d’une <span className="bold" > faute médicale </span> ou dentaire (faute de diagnostic, faute technique, défaut d’information …), du défaut d’un produit de santé, d’une <span className="bold" >  infection nosocomiale </span> ou même d’un <span className="bold" > accident médical non fautif </span> (aléa thérapeutique), Maître Quentin MAMERI mettra tout en œuvre pour que la responsabilité du professionnel ou de l’établissement de santé soit reconnue et que vous puissiez obtenir <span className= "bold" >  <Link to="/reparation-dommage-corporel/#RIP"> réparation intégrale </Link> </span> de vos préjudices. </p>


    <p className="desc"> Maître Quentin MAMERI intervient exclusivement pour les victimes et leurs proches. </p>

  <p className="desc">Il intervient sur l’ensemble du territoire français y compris les DOM-TOM, devant toutes les juridictions civiles ou administratives mais également devant les commissions de conciliation et d’indemnisation des accidents médicaux (CCI). </p>


  <p className="desc"> Il sera présent à vos côtés à chaque stade de la procédure y compris lors de l’ <span className= "bold" ><Link to="/reparation-dommage-corporel/#EM">expertise médicale</Link> </span>  qui est un moment clef de la procédure puisqu’elle permet d’apprécier d’une part, si les conditions de la responsabilité de l’établissement ou du professionnel sont réunies, et d’autre part, d’évaluer vos préjudices sur le plan médical. </p>


  <p className="desc"> Maître Quentin MAMERI vous fera bénéficier de son réseau de médecin-conseil et de professionnels qualifiés (ergothérapeute, architecte …). </p>



<p className="desc"> Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>

<MotsClefs />

      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Médicaux;
