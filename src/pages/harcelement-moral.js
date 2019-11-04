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
import pic12 from '../images/hm.jpeg';

const Harcelement = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> HARCÈLEMENT MORAL</h1>
       <img  src={pic12} className="picdefense" alt="fireSpot" />
    <p className="desc"> Le harcèlement moral correspond à des agissements répétés exercés par la hiérarchie ou non à l’encontre d’un salarié qui ont pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte à ses droits et à sa dignité, d'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel.
 </p>
<p className="desc"> Le harcèlement moral peut prendre plusieurs formes : brimades, injures, violences, procédure disciplinaire injustifiée, « placardisation », etc. </p>

<p className="desc">En cas de recours, il vous appartient uniquement de présenter les éléments de fait laissant supposer l’existence d’un harcèlement moral. Votre employeur devra démontrer que les faits allégués ne correspondent pas une situation de harcèlement moral.</p>


<p className="desc">Si vous êtes victime de faits de harcèlement moral, vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous. </p>







      </div>

      <VisitCard />
    </div>





  </div>



  </Layout>
)


export default Harcelement;
