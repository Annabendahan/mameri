import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';

const Aggravation = () => (

  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> INDEMNISATION DU GRAND HANDICAP </h1>
    <p className="desc"> Le Cabinet intervient dans l’indemnisation du grand handicap et ce quel que soit l’origine de l’accident.

Le grand handicap peut être un handicap visible (amputation, grand brûlés, paraplégie, hémiplégie …) ou un handicap invisible comme c’est le cas en matière de traumatisme crânien où l’évaluation des séquelles et de leur retentissement nécessite une évaluation spécifique par des professionnels spécialisés.

Me MAMERI vous accompagne pour obtenir l’indemnisation de tous les préjudices en lien avec votre handicap.</p>



      </div>

      <VisitCard />
    </div>





  </div>




  </Layout>

)


  export default Aggravation
