import React from "react"

import '../components/contact.css'
import Layout from "../components/layout"

import VisitCard from '../components/VisitCard'
import pic3 from '../images/logo_hd.png';
import pic4 from '../images/ajdclogo.png';
import pic5 from '../images/FranceAssosSante_logo.png';
import pic6 from '../images/Logo-Legifrance.jpg';
import pic7 from '../images/logo_cada.png';
import pic8 from '../images/servicepub.png';

const Liens= () => (


  <Layout>

  <div className="background-hono">

<div className="bigbox">
      <div className="bleft">

      <h1> LIENS UTILES </h1>



   <a target="blank" href="https://www.defenseurdesdroits.fr/"> <div className="lien">
      <img  src={pic3} className="piclien" alt="fireSpot" />
    </div></a>



   <a target="blank" href="http://www.ajdommagecorporel.fr/"><div className="lien">
      <img  src={pic4} className="piclien" alt="fireSpot" />
    </div></a>




   <a target="blank" href="https://www.france-assos-sante.org/"><div className="lien">
      <img  src={pic5} className="piclien" alt="fireSpot" />
    </div></a>



   <a target="blank" href="https://www.legifrance.gouv.fr/"><div className="lien">
      <img  src={pic6} className="piclien" alt="fireSpot" />
    </div></a>


    <a target="blank" href="https://www.cada.fr/"><div className="lien">
      <img  src={pic7} className="piclien" alt="fireSpot" />
    </div></a>


  <a target="blank" href="https://www.service-public.fr/"><div className="lien">
      <img  src={pic8} className="piclien" alt="fireSpot" />
    </div></a>


      </div>

       <VisitCard />


    </div>

    </div>





  </Layout>

  )


export default Liens
