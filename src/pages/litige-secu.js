import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic10 from "../images/secu.jpeg"

const Secu = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> LITIGES AVEC LA SÉCURITÉ SOCIALE </h1>
          <img src={pic10} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous avez sollicité une prestation auprès de la sécurité sociale
            pour pallier une perte de revenu (
            <span className="bold">
              <Link to="/temps-partiel-therapeutique/">
                temps-partiel thérapeutique
              </Link>{" "}
            </span>
            ,{" "}
            <span className="bold">
              {" "}
              <Link to="/indemnites-arret-travail/"> arrêt de travail</Link>
            </span>
            ,{" "}
            <span className="bold">
              {" "}
              <Link to="/protection-sociale/" className="underl">
                {" "}
                pension d'invalidité
              </Link>
            </span>
            …) ou obtenir un statut protecteur (affection de longue durée…){" "}
          </p>

          <p className="desc">
            Vous êtes en litige avec la sécurité sociale qui a rejeté ou mal
            évalué ces prestations.{" "}
          </p>

          <p className="desc">
            Maître Quentin MAMERI vous accompagnera dans vos démarches de
            contestation amiables ou judiciaires y compris pendant les phases d’
            <span className="bold">
              <Link to="/expertise-medicale-litiges-securite-sociale/">
                expertises médicales
              </Link>
            </span>{" "}
            éventuelles.{" "}
          </p>

          <p className="desc">
            Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/temps-partiel-therapeutique/">
              {" "}
              Temps-partiel thérapeutique
            </Link>
            link2=<Link to="/indemnites-arret-travail/"> L'arrêt de travail</Link>
            link3=<Link to="/invalidite/">La pension d'invalidité</Link>
            link4=<Link to="/expertise-medicale-litiges-securite-sociale/">
          L'expertise médicale
            </Link>
          />
        </div>

      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Secu
