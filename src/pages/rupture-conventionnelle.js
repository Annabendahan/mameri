import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from '../components/VisitCard'
import MotsClefs from '../components/Mots-Clefs'
import pic13 from '../images/rc.jpeg';

const Rupture = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> RUPTURE CONVENTIONNELLE </h1>
       <img  src={pic13} className="picdefense" alt="fireSpot" />
    <p className="desc">
Vous souhaitez rompre votre contrat de travail avec votre employeur d’un commun accord.
 </p>
 <p className="desc">Il est important de prendre contact avec un avocat préalablement à toute démarche. En effet, la conclusion d’une rupture conventionnelle suppose un consentement libre et éclairé de chaque partie.  </p>
 <p className="desc">Cela implique que votre décision ne doit pas résulter de pressions de l’employeur ou être motivée par des manquements graves commis par l’employeur dans l’exécution du contrat de travail.
 </p>
 <p className="desc">
Dans ce cas, d’autres modes de ruptures pourraient être envisagées (<span className="bold"> <Link to="/droit-du-travail">prise d’acte de rupture du contrat</Link> </span>, <span className="bold"><Link to="/droit-du-travail/#RJ">résiliation judiciaire</Link> </span> …).  </p>

 <p className="desc">
Par ailleurs, le rôle d’un avocat est également primordial dans le cadre d’une rupture conventionnelle pour défendre vos droits lors de l’évaluation de vos indemnités de départ.
</p>

 <p className="desc">
Maître Quentin MAMERI pourra vous conseiller utilement sur les procédures à engager, notamment sur l’opportunité d’un tel mode de rupture, et veillera, le cas échéant, à ce que vos droits soient respectés et notamment à ce que vos indemnités de départ soient correctement évaluées.
</p>

 <p className="desc">

Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.

</p>



<MotsClefs
link1=<Link to="/droit-du-travail"> Prise d’acte de rupture du contrat </Link>
link2=<Link to="/droit-du-travail/#RJ"> Résiliation judiciaire</Link> />


      </div>
<VisitCard />
    </div>





  </div>



  </Layout>
)


export default Rupture;
