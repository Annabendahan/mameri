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

const Modeles = () => (
  <Layout>


    <div className="background-hono">

     <div className="bigbox">

      <div className="bleft">

      <h1 > MODELES ET FORMULAIRES </h1>

      <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> MODÈLES  </h2>





       <h3 className="subt"> MODÈLE DE DEMANDE DE COMMUNICATION DE DOSSIER MÉDICAL OU DENTAIRE  </h3>


      <h3> - Auprès d’un établissement de santé ou un médecin libéral </h3>


      <p className="desc-s"> Pour la personne elle-même : modèle en cours de préparation </p>
 <p className="desc-s"> Pour un proche décédé : modèle en cours de préparation </p>
<p className="desc-s"> Pour un enfant mineur : modèle en cours de préparation </p>
<p className="desc"> Pour un majeur sous protection judiciaire : modèle en cours de préparation </p>

      <h3> - Auprès de la médecine du travail, le médecin-conseil de la CPAM ou un médecin d’assurance </h3>


      <p className="desc-s"> Pour la personne elle-même : modèle en cours de préparation </p>
<p className="desc-s"> Pour un proche décédé : modèle en cours de préparation </p>
<p className="desc-s"> Pour un enfant mineur : modèle en cours de préparation </p>
<p className="desc-s"> Pour un majeur sous protection judiciaire : modèle en cours de préparation </p>



      <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> FORMULAIRES  </h2>


      <h3 className="subt"> DEMANDES AUPRÈS DE LA MDPH  </h3>


      <h3> - Formulaire de demande :  </h3>

<p className="desc"> file:///C:/Users/ecoutants/Downloads/cerfa_15692-01%20(1).pdf </p>

 <h3> - Certificat médical MDPH   :   </h3>

 <p className="desc"> ///C:/Users/ecoutants/Downloads/cerfa_15695-01%20(1).pdf </p>

<h3> - Guide MDPH :   </h3>

<p className="desc"> https://www.formulaires.modernisation.gouv.fr/gf/getNotice.do?cerfaNotice=52154&cerfaFormulaire=15695 </p>



         </div>



<VisitCard />



    </div>

    </div>


  </Layout>
)

export default Modeles;
