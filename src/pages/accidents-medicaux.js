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
    <p className="desc"> Que vous soyez victime d’une infection nosocomiale, d’une faute médicale, d’un produit de santé ou d’un aléa thérapeutique, Maître Quentin MAMERI mettra en œuvre une stratégie personnalisée et adaptée tendant à engager la responsabilité d’un professionnel ou établissement de santé public ou privé. </p>

  <p className="desc">Maître MAMERI vous représentera et vous assistera devant toutes les juridictions civiles ou administratives mais également devant les commissions de conciliation et d’indemnisation des accidents médicaux.

Il sera présent à vos côtés lors de l’ <span className= "bold" ><Link to="/reparation-dommage-corporel/#EM"> expertise médicale  </Link> </span> qui est un moment clef de la procédure puisqu’elle permettra d’apprécier d’une part, si les conditions de la responsabilité de l’établissement ou du professionnel sont réunies, et d’autre part, de procéder à l’évaluation médicale de vos préjudices.

Il vous fera bénéficier de son réseau de médecin-conseil et de professionnels qualifiés (ergothérapeute, architecte …). </p>

<MotsClefs />

      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Médicaux;
