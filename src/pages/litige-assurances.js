import React from "react"

import Layout from "../components/layout"
import VisitCard from "../components/VisitCard"
import pic13 from "../images/ass.jpeg"

const Assurance = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> LITIGE AVEC LES ASSURANCES </h1>
          <img src={pic13} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous êtes en litige avec une compagnie d’assurance concernant une
            prestation d’assurance en lien avec la santé et le handicap
            (prévoyance, assurance de prêt immobilier …).
          </p>
          <p className="desc">
            Le désaccord est d’ordre administratif ou médical.
          </p>
          <p className="desc">
            {" "}
            Maître Quentin MAMERI vous accompagnera dans vos démarches de
            contestation amiables ou judiciaires et sera présent à vos côtés à
            chaque stade de la procédure y compris pendant les phases
            d’expertise médicale.
          </p>
          <p className="desc">
            {" "}
            Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Assurance
