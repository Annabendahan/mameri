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
import pic6 from '../images/image 10.png';
import pic12 from '../images/hm.jpeg';

const Harcelement = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> HARCÈLEMENT MORAL</h1>
       <img  src={pic12} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous êtes victime d’agissements répétés de la part de votre employeur ou l’un de vos collègues qui ont pour objet ou pour effet de dégrader vos conditions de travail.

 </p>
<p className="desc"> Il s’agit alors d’un <span className="bold"> <Link to="/droit-du-travail/#HM">harcèlement moral</Link></span> qui constitue un manquement grave de l’employeur tant au regard des règles protectrices du droit du travail que de celles du droit pénal, le harcèlement moral étant constitutif d’un délit.  </p>

<p className="desc">Le Droit du travail a mis en place des règles facilitant la preuve par le salarié du harcèlement moral dont il est victime. Le salarié doit présenter des éléments de fait laissant supposer l’existence d’un harcèlement. L’employeur devra alors fournir des éléments de preuve pour démontrer que faits litigieux sont étrangers à tout harcèlement moral.</p>


<p className="desc">Maître Quentin MAMERI mettra tout en œuvre pour faire reconnaître votre statut de victime et défendre vos droits tout au long de la procédure.  </p>

<p className="desc">Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.  </p>




  <MotsClefs
link1=<Link to="/droit-du-travail/#HM"> Harcèlement moral </Link>
 />




      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Harcelement;
