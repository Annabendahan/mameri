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
            les stades de la procédure notamment lors de l’expertise médicale où
            il sera présent à vos côtés pour défendre vos intérêts.
          </p>

          <p className="desc">
            {" "}
            Il vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de
            recours et les professionnels qualifiés (ergothérapeute,
            architecte…) avec lesquels il travaille habituellement.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident ou d’une infraction pénale à
            l’origine d’un grand handicap, n’hésitez pas à contacter Maître
            Quentin MAMERI, par téléphone, mail ou par le formulaire de contact
            afin de lui exposer votre situation et convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/expertise-medicale-dommage-corporel/">
              {" "}
              L'expertise médicale
            </Link>
            link2=<Link to="/prejudices-reparables/">
          {" "}
              La réparation intégrale des préjudices
            </Link>
            link3=<Link to="/consolidation/"> La consolidation</Link>
          />
        </div>

      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Aggravation
