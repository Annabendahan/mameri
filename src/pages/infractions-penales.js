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

const Agression = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> INFRACTIONS PENALES </h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Si vous avez été victime d’une infraction pénale (agression, délit routier …) à l’origine d’un
dommage corporel, Me MAMERI mettra tout en œuvre pour que vous obteniez réparation
intégrale de votre préjudice. </p>
<p className="desc"> Me MAMERI intervient devant les juridictions pénales (tribunal de police, tribunal
correctionnel,...) et devant les Commissions d’indemnisation des victimes d’infractions pour
solliciter l’indemnisation de vos préjudices. </p>


<MotsClefs />
      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Agression;
