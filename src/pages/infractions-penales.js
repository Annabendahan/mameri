import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic16 from "../images/ip.jpeg"

const Agression = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> INFRACTIONS PENALES </h1>
          <img src={pic16} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous êtes victime d’une infraction pénale à l’origine d’un dommage
            corporel : agression, homicide involontaire, délits routiers…{" "}
          </p>

          <p className="desc">
            Quelle que soit la nature ou la gravité de l’infraction, Maître
            MAMERI défendra vos droits de victime à tous les stades de la
            procédure y compris pendant la phase
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#EM">
                expertise médicale
              </Link>{" "}
            </span>
            .{" "}
          </p>
          <p className="desc">
            {" "}
            Maître Quentin MAMERI intervient exclusivement pour les victimes et
            leurs proches, sur l’ensemble du territoire français y compris
            l’Outre-Mer et défendra vos intérêts devant l’ensemble des
            juridictions civiles, pénales (tribunal de police, tribunal
            correctionnel …) et devant les Commissions d’Indemnisation des
            Victimes d’Infractions (CIVI).{" "}
          </p>
          <p className="desc">
            Si vous avez êtes victime d’une infraction pénale, n’hésitez pas à
            contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/reparation-dommage-corporel/#RIP">
              {" "}
              Réparation intégrale des préjudices
            </Link>
            link2=<Link to="/reparation-dommage-corporel/#EM">
              {" "}
              Expertise médicale
            </Link>
            link3=<Link to="/reparation-dommage-corporel/#PR">
              {" "}
              Préjudices réparables
            </Link>
          />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Agression
