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
import pic6 from '../images/image 10.png';

const Harcelement = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> HARCÈLEMENT MORAL</h1>
       <img  src={pic6} className="picdefense" alt="fireSpot" />
    <p className="desc"> Vous êtes victime d’agissements répétés de la part de votre employeur ou l’un de vos
collègues qui ont pour objet ou pour effet de dégrader vos conditions de travail.
Il s’agit alors d’un harcèlement moral qui constitue un manquement grave de l’employeur au
regard des règles protectrices du droit du travail mais il s’agit également d’une infraction
pénale.
La loi a mis en place des règles facilitant la preuve par le salarié du harcèlement moral dont il
est victime.
Le salarié doit présenter des éléments de fait laissant supposer l’existence d’un harcèlement.
L’employeur devra alors fournir des éléments de preuve pour démontrer que les mesures en
cause sont étrangères à tout harcèlement moral. </p>
<p className="desc"> Me Quentin MAMERI mettra tout en œuvre pour faire reconnaître votre statut de victime et
défendre vos droits.
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.</p>

<p className="desc"> <span className= "bold" > <Link to= "/droit-du-travail/#H"> En savoir plus sur le harcèlement moral  </Link> </span> </p>





      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Harcelement;
