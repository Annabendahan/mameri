import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';

const Aggravation = () => (

  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> INDEMNISATION DU GRAND HANDICAP </h1>
    <p className="desc"> Le grand handicap correspond à un handicap visible (amputation, grand brûlés, paraplégie, hémiplégie …) ou un handicap invisible comme c’est le cas en matière de traumatisme crânien où l’évaluation des séquelles et de leur retentissement nécessite une évaluation spécifique par des professionnels spécialisés. </p>

     <p className="desc"> Maître Quentin MAMERI intervient dans l’indemnisation du grand handicap et ce quel que soit l’origine de l’accident.
</p>

      <p className="desc"> Il vous accompagnera dans un cadre amiable ou judiciaire et à tous les stades de la procédure notamment lors de l’expertise médicale et mettra tout en œuvre pour que vous puissiez obtenir la réparation intégrale de vos préjudices.
 </p>

       <p className="desc"> Il vous apportera non seulement un soutien juridique et technique mais également un soutien humain. Il vous fera bénéficier de son réseau de médecin-conseil et de professionnels qualifiés (ergothérapeute, architecte …). </p>

        <p className="desc"> Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>

<MotsClefs />

      </div>

      <VisitCard />
    </div>





  </div>




  </Layout>

)


  export default Aggravation
