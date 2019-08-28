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
import pic9 from '../images/image 7.png';

const Privée = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS DE LA VIE PRIVÉE</h1>
       <img  src={pic9} className="picdefense" alt="fireSpot" />
    <p className="desc"> En cas d’accidents de la vie privée, vous  pouvez être indemnisé par votre compagnie d’assurance si vous avez souscrit une garantie dite des accidents de la vie.

Me MAMERI vous assistera lors de l’expertise médicale et durant toute la procédure d’indemnisation afin d’obtenir la réparation qui vous est due contractuellement. </p>



      </div>

     <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Privée;
