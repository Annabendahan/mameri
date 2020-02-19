import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic15 from "../images/gh.jpeg"

const Aggravation = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> INDEMNISATION DU GRAND HANDICAP </h1>
          <img src={pic15} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Le grand handicap correspond à un handicap visible (amputation,
            grand brûlés, paraplégie, hémiplégie…) ou un handicap invisible
            comme c’est le cas en matière de traumatisme crânien où l’évaluation
            des séquelles et de leur retentissement nécessite une évaluation
            spécifique par des professionnels spécialisés (neuropsychologue pour
            évaluer les troubles cognitifs, neurologue ...){" "}
          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI intervient dans l’indemnisation du grand
            handicap et ce quelle que soit l’origine de l’accident ou de
            l’infraction pénale.
          </p>

          <p className="desc">
            {" "}
            Il vous accompagnera dans un cadre amiable ou judiciaire et à tous
            les stades de la procédure notamment lors de l’
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#EM">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            et mettra tout en œuvre pour que vous puissiez obtenir la{" "}
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#RIP">
                réparation intégrale
              </Link>
            </span>{" "}
            de vos préjudices.
          </p>

          <p className="desc">
            {" "}
            Il vous apportera non seulement un soutien juridique et technique
            mais également un soutien humain. Il vous fera bénéficier de son
            réseau de médecin-conseil et de professionnels qualifiés
            (ergothérapeute, architecte…).{" "}
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident ou d’une infraction pénale à
            l’origine d’un grand handicap, n’hésitez pas à contacter Maître
            Quentin MAMERI, par téléphone, mail ou par le formulaire de contact
            afin de lui exposer votre situation et convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/reparation-dommage-corporel/#EM">
              {" "}
              Expertise médicale
            </Link>
            link2=<Link to="/reparation-dommage-corporel/#RIP">
              {" "}
              Réparation intégrale des préjudices
            </Link>
            link3=<Link to="/reparation-dommage-corporel/#C">
              {" "}
              Consolidation
            </Link>
          />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Aggravation
