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
import pic6 from '../images/image.png';

const Route = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> ACCIDENTS DE LA ROUTE </h1>
    <p className="desc"> Restez toujours vigilant face aux compagnies d’assurance.
Elles ne défendent pas les intérêts des victimes ! </p>

<p className="desc"> <span className="bold">Que vous soyez conducteur ou passager transporté d’une voiture, d’un camion, d’un deux-roues ou piéton victime d’un accident, Maître MAMERI mettra en œuvre la stratégie la plus adaptée et assurera à tous les stades de la procédure la défense de vos droits de victimes afin de vous permettre d’obtenir la réparation intégrale de vos préjudices.
</span></p>

<img  src={pic6} className="picdefense" alt="fireSpot" />
<p className="desc">Conscient qu’une victime est en situation de fragilité physique et psychologique à la suite d’un accident et qu’elle se retrouve seule face aux compagnies d’assurance, Me MAMERI vous accompagnera dans le cadre amiable ou contentieux afin de rétablir l’équilibre et de veiller à ce que vos intérêts soient préservés. </p>

<p className="desc">Les assureurs ont mis en place des conventions entre assureurs qui prévoient que l’indemnisation est gérée par le propre assureur de la victime qui se retournera ensuite contre l’assureur du tiers-responsable.

L’objectif affiché de ce dispositif est d’accélérer l’indemnisation mais ce dispositif n’est pas dans l’intérêt des victimes.

Il contribue à  diminuer la vigilance des victimes qui sont naturellement enclines à faire confiance à leur propre assureur pour gérer leur indemnisation et se voient ainsi exposées au risque de minimisation de leur préjudice tant dans le cadre de l’expertise médicale, confiée au médecin de la compagnie d’assurance, que lors de la fixation du montant de leur indemnisation. </p>

<p className="desc">Le Cabinet qui intervient uniquement pour les victimes de dommage corporel et jamais pour les assureurs vous garantira une indépendance face à la compagnie d’assurance, vous assistera aux <span className= "bold" >  <Link to="/reparation-dommage-corporel/#EM"> expertises médicales </Link> </span> et dans le cadre des procédures d’indemnisation.

Il vous fera bénéficier de son réseau de médecin-conseil et de professionnels qualifiés (ergothérapeute, architecte …). </p>



      </div>


      <VisitCard />


    </div>





  </div>



  </Layout>
)


export default Route;
