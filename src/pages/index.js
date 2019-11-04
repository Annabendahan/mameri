import 'babel-polyfill';
import React from "react"
import { Link } from "gatsby"
import '../components/index.css'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import VisitCard from '../components/VisitCard'
import pic1 from '../images/P1012002.jpg';
import pic2 from '../images/picq.png';
import pic3 from '../images/prejudice.png';
import pic4 from '../images/work.png';
import pic5 from '../images/handi3.png';

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
  <img  src={pic1} className="banner" alt="fireSpot" />

  <div className="home-div"
  style={{


position: "relative",
zIndex: 10
  }}>


<div className="transparent"><h1 className="title"> QUENTIN MAMERI, AVOCAT AU BARREAU DE PARIS </h1> </div>

  <div className="box">


  <div className="leftbox">

   <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> DÉFENSE DES VICTIMES, DES SALARIÉS ET DES MALADES  </h2>


   <p className="desc-r"> Maître Quentin MAMERI est Avocat au barreau de Paris. </p>

<p className="desc-r">  Il  assure  la  <b> défense des  victimes d’accidents et d’infractions pénales </b> pour obtenir réparation de leur dommage corporel , la <b> défense des salariés </b> dans le cadre de l’exécution ou la rupture de la relation de travail ainsi que la <b> défense des personnes malades </b> et en situation de handicap dans leurs litiges avec la sécurité sociale, la MDPH ou les compagnies d’assurance. </p>

<p className="desc-r"> Me Quentin MAMERI intervient devant toutes les juridictions et sur l’ensemble du territoire français y compris les DOM-TOM.

Me MAMERI reçoit uniquement sur rendez-vous. Si vous n’êtes pas en capacité de vous déplacer, Me MAMERI pourra se rendre à votre domicile où dans le lieu où vous êtes hospitalisé (établissement de santé, centre de rééducation….). </p>


  </div>
  <VisitCard />
  </div>



  <div className="blue">
  <div className="indemn"><Link to="indemnisation-des-victimes">
    <img  src={pic3} className="picindex" alt="fireSpot" />
  <h3> DÉFENSE DES VICTIMES  </h3>
  <p>
  Vous êtes victime d’un dommage corporel à la suite d’un accident ou d’une infraction pénale.
 
Maître Quentin MAMERI intervient exclusivement pour les victimes et leurs proches et assurera votre défense contre le responsable, son assureur ou les fonds de garantie, par la voie amiable ou judiciaire, et mettra tout en œuvre pour vous permettre d’obtenir la réparation intégrale de vos préjudices.

Maître Quentin MAMERI vous apportera non seulement un soutien juridique et technique mais également humain tout au long de la procédure et veillera à ce que vos droits de victimes soient préservés et respectés.

Maître Quentin MAMERI intervient pour tous types d’accident et ce quel que soit la nature de votre handicap qu’il soit physique, neurologique ou psychique.
 
Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
  </p>

  <div className="lire"> <p>  En savoir plus  <svg className="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
</svg>  </p> </div>
  </Link></div>
 <div className="salar"> <Link to="defense-des-salaries">
   <img  src={pic4} className="picindex" alt="fireSpot" />
  <h3> DÉFENSE DES SALARIÉS </h3>
  <p>

 Vous êtes en litige avec votre employeur ? Vous venez d’être licencié et vous en contestez les motifs ? Vous envisagez une rupture amiable de votre contrat de travail ? Votre employeur a commis des manquements graves dans l’exécution de de votre contrat de travail ? Vous souhaitez rompre votre contrat aux torts de l’employeur ?

Maître Quentin MAMERI vous conseillera utilement et assurera la défense de vos intérêts tant par la voie amiable que par la voie judiciaire notamment devant la juridiction prud’homale.
 
Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
  </p>
  <div className="lire">  <p>  En savoir plus <svg className="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
</svg> </p>  </div>
  </Link></div>
  <div className="ass"><Link to="defense-des-personnes-malades-handicap">
   <img  src={pic5} className="picindex2" alt="fireSpot" />
  <h3> DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP</h3>
  <p>
  Vous êtes en litige avec la Sécurité sociale, la Maison Départementale des Personnes handicapées (MDPH) ou votre compagnie d’assurance ?

Maître Quentin MAMERI assurera la défense de vos intérêts à tous les stades de la procédure y compris pendant les éventuelles expertises médicales.

Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
</p>
   <div className="lire"> <p> En savoir plus  <svg className="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
</svg>  </p> </div>
  </Link></div>


  </div>

  </div>




  </Layout>
  )

  export default IndexPage
