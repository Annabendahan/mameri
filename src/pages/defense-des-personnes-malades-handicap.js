import React from "react"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import pic3 from '../images/handi.png';

const Malade = () => (
  <Layout>

  <div className="background-hono">


  <div className="salaries">


    <div className="salaries-right">

          <h2 className="title">
        <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#F2DC17"/>
        </svg>
        DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP</h2>

        <p className="desc">
        Vous avez un litige avec les organismes de sécurité sociale ou avec la MDPH concernant des prestations sociales en lien avec la santé ou le handicap (refus de pension d’invalidité, refus d’AAH, refus de carte d’invalidité, refus de prestation de compensation du handicap, refus d’indemnités journalières …).

Me MAMERI vous représentera et vous assistera dans l’ensemble des litiges de sécurité sociale et d’aide sociale en matière de santé et de handicap.


          </p>

      </div>

       <div className="salaries-left">
      <img  src={pic3} className="picdefense" alt="fireSpot" />
    </div>



    </div>



    </div>

  </Layout>
)

export default Malade;
