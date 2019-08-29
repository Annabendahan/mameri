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
import pic6 from '../images/image 14.png';

const Rupture = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> RUPTURE CONVENTIONNELLE </h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous souhaitez rompre votre contrat de travail avec votre employeur d’un commun accord.
Il est important de prendre contact avec un avocat préalablement à toute démarche.
En effet, la conclusion d’une rupture conventionnelle suppose un consentement libre et
éclairé de chaque partie.
Il est donc important d’être certain préalablement que cette démarche ne résulte pas d’une
pression de l’employeur ou de manquements graves commis par lui dans l’exécution du
contrat de travail.
Dans ce cas, d’autres modes de ruptures pourraient être envisagées.
Par ailleurs, le rôle d’un avocat est également primordial pour défendre vos droits lors de
l’évaluation de vos indemnités de départ.
Me Quentin MAMERI pourra vous conseiller utilement sur les procédures à engager,
notamment sur l’opportunité d’un tel mode de rupture, et veillera, le cas échéant, à ce que
vos droits soient respectés et notamment à ce que vos indemnités de départ soient
correctement évaluées.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous. </p>

<p className="desc"> <span className= "bold" > <Link to= "/droit-du-travail/#RC" className="underl"> En savoir plus sur la rupture conventionnelle </Link> </span> </p>



      </div>
<VisitCard />
    </div>





  </div>



  </Layout>
)


export default Rupture;
