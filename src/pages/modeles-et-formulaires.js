import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import VisitCard from '../components/VisitCard'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';
import pdf from "../images/formulaire de demande.pdf"
import pdf2 from "../images/certificat-medical.pdf"
import pdf3 from "../images/guide-pratique.pdf"

import m1 from "../images/1.pdf"
import m2 from "../images/2.pdf"
import m3 from "../images/3.pdf"
import m4 from "../images/4.pdf"
import m5 from "../images/5.pdf"
import m6 from "../images/6.pdf"
import m7 from "../images/7.pdf"
import m8 from "../images/8.pdf"
import m9 from "../images/9.pdf"
import m10 from "../images/10.pdf"
import m11 from "../images/11.pdf"

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


      <h3> - Demande de dossier médical en tant qu'ayant droit d'une personne décédée </h3>


      <p className="desc-s"> Etablissement de santé : <a href={m1} download>Télécharger ici</a> </p>
 <p className="desc-s"> Médecin libéral : <a href={m2} download>Télécharger ici</a> </p>
<p className="desc"> Médecins-conseils: <a href={m3} download>Télécharger ici</a> </p>

      <h3> - Demande de dossier médical en tant que représentant légal ou tuteur, curateur </h3>


      <p className="desc-s"> Pour la personne elle-même :<a href={m4} download>Télécharger ici</a> </p>
<p className="desc-s"> Médecin libéral : <a href={m5} download>Télécharger ici</a> </p>
<p className="desc-s"> Médecins-conseils : <a href={m6} download>Télécharger ici</a> </p>
<p className="desc"> Dentiste : <a href={m7} download>Télécharger ici</a> </p>


 <h3> - Demande de son propre dossier médical </h3>


      <p className="desc-s"> Etablissement de santé : <a href={m8} download>Télécharger ici</a> </p>
<p className="desc-s"> Médecin libéral: <a href={m9} download>Télécharger ici</a> </p>
<p className="desc-s"> Pour un enfant mineur : <a href={m10} download>Télécharger ici</a> </p>
<p className="desc"> Dentiste : <a href={m11} download>Télécharger ici</a> </p>




      <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> FORMULAIRES  </h2>


      <h3 className="subt"> DEMANDES AUPRÈS DE LA MDPH  </h3>




<p className="desc-s"> - Formulaire de demande :  <a href={pdf} download>Télécharger ici</a> </p>

 <p className="desc-s"> - Certificat médical MDPH   :  <a href={pdf2} download>Télécharger ici</a></p>

<p className="desc">  - Guide MDPH :  <a href={pdf3} download>Télécharger ici</a> </p>



         </div>



<VisitCard />



    </div>

    </div>


  </Layout>
)

export default Modeles;
