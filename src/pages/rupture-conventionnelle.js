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
import pic13 from '../images/rc.jpeg';

const Rupture = () => (
  <Layout>

  <div className="background-hono">


<div className="bigbox">
      <div className="bleft">
       <h1> RUPTURE CONVENTIONNELLE </h1>
       <img  src={pic13} className="picdefense" alt="fireSpot" />
    <p className="desc"> La rupture conventionnelle est un mode de rupture du contrat de travail. Elle permet à l’employeur et au salarié de mettre fin, d’un commun accord, au contrat de travail à durée indéterminée qui les lie à des conditions qu’ils déterminent ensemble. </p>
 <p className="desc">Cet accord est formalisé par une convention qui est négociée au cours d’un ou plusieurs entretiens préalables obligatoires au cours desquels le salarié peut être assisté par un membre de l’entreprise, d’un membre syndical ou d’une institution représentative du personnel ou, à défaut de syndicat ou d’institutions représentatives dans l’entreprise, par un conseiller du salarié inscrit sur une liste auprès de la préfecture. </p>
 <p className="desc">A compter de la signature de la convention, chaque partie dispose d’un délai de 15 jours pour se rétracter.
 </p>
 <p className="desc">
A l’issue de ce délai, l’employeur ou le salarié adressent la convention auprès de la DIREECTE pour homologation. La DIREECTE dispose d’un délai de 15 jours pour se prononcer. A défaut, l’homologation est acquise. </p>

 <p className="desc">
Si vous souhaitez être conseillée ou assister dans le cadre d’une telle démarche, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez- vous.</p>





      </div>
<VisitCard />
    </div>





  </div>



  </Layout>
)


export default Rupture;
