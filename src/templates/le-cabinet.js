import React from "react"
import { Link } from "gatsby"
import '../components/lecabinet.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/quentinmameripic.png';

const LeCabinet = () => (
  <Layout>
    <SEO title="Le cabinet" />



  <div className="lecabinet-box">
    <div className="lecabinet-left">
    <img  src={pic1} className="profile-pic" alt="fireSpot" />
    <p> - CAPA </p>
<p> - Master II Règlement des Différends, Rouen </p>
<p> - Master II Droit de la Santé, Faculté de droit de Poitiers </p>
<p> - DU Actions et Contentieux de la Sécurité sociale, Faculté de Droit
 de Montpellier </p>
<p> - DU éthiques, soins et santé, Faculté de médecine de Rouen </p>


    </div>

    <div className="lecabinet-right">
    <h1 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#FFF509"/>
  </svg> LE CABINET</h1>
    <p className="desc"> Me Quentin MAMERI a suivi un <span className="bold"> cursus universitaire très spécialisé </span> qui lui a permis d’acquérir une solide expertise dans ses domaines d’intervention. </p>

<p className="desc"> Il s’est forgé une véritable expérience au sein de cabinets d’avocat de victimes et à travers différents stages professionnels notamment au sein de chambres spécialisées de la Cour de cassation.
Il intervient depuis plusieurs années en qualité d’écoutant sur <span className="bold"> la ligne juridique
Santé Info Droit  mise en place par l’Union Nationale des Associations
Agréées du Système de Santé (France Assos Santé) </span>.

Ancien chargé d’enseignement auprès des Universités de Rouen et de Versailles, il assure régulièrement des formations et interventions sur les problématiques juridiques en lien avec la Santé et le Handicap. A ce titre, il est notamment intervenu en qualité de <span className="bold"> chercheur auprès de l’INSERM </span> dans le cadre d’un programme de recherche sur le handicap et le diagnostic prénatal où il a présenté la responsabilité des professionnels du diagnostic prénatal depuis la loi du 4 mars 2002. Il a également assuré des  <span className="bold"> formations auprès des membres de CHSCT ou de professionnels de santé </span>.

En 2015, Maître MAMERI a créé en <span className="bold"> partenariat avec l’Université de Lyon une revue numérique consacrée à la réparation du dommage corporel </span> dans laquelle il publie régulièrement de nombreuses contributions. En savoir plus </p>
    </div>

  </div>


  </Layout>
)

export default LeCabinet;
