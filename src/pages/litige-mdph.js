import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic12 from "../images/mdph.png"

const Mdph = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1>
            {" "}
            LITIGES AVEC LA MAISON DÉPARTEMENTALE DES PERSONNES HANDICAPÉES
            (MDPH){" "}
          </h1>
          <img src={pic12} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous avez sollicité auprès de la Maison Départementale des Personnes
            Handicapées une prestation pour vous garantir des ressources et/ou
            pour compenser votre handicap (
            <span className="bold">
              <Link to="/protection-sociale/#AAH" className="underl">
                allocations aux adultes handicapés
              </Link>
            </span>
            , allocation d’éducation de l’enfant handicapé,
            <span className="bold">
              {" "}
              <Link to="/protection-sociale/#PCH" className="underl">
                {" "}
                prestation de compensation du handicap
              </Link>
            </span>
            ), pour faciliter vos déplacements ou vos transports (
            <span className="bold">
              <Link to="/protection-sociale/#CMI" className="underl">
                Carte de mobilité-inclusion
              </Link>
            </span>
            ) ou bien encore pour que votre handicap soit pris en compte au
            niveau de l’emploi (
            <span className="bold">
              <Link to="/protection-sociale/" className="underl">
                Reconnaissance de qualité de travailleur handicapé
              </Link>
            </span>
            ).{" "}
          </p>
          <p className="desc">
            Ces prestations vous ont été refusées pour des motifs médicaux ou
            administratifs ou vous contestez leurs évaluations.{" "}
          </p>
          <p className="desc">
            Maître Quentin MAMERI vous accompagnera dans vos démarches de
            contestation amiables ou judiciaires notamment devant le Tribunal
            Judiciaire pôle social désormais compétent pour les litiges de
            sécurité sociale (le Tribunal Judiciaire Pôle Social remplace le
            TASS et le TCI).{" "}
          </p>

          <p className="desc">
            Si vous avez un litige avec la MDPH, n’hésitez pas à contacter
            Maître Quentin MAMERI par téléphone, mail ou par le formulaire de
            contact afin de lui exposer votre situation et convenir d’un
            rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/protection-sociale/#AAH">
              {" "}
              Allocation adultes handicapés
            </Link>
            link2=<Link to="/protection-sociale/#PCH">
              {" "}
              Prestation de compensation de handicap
            </Link>
            link3=<Link to="/protection-sociale/CMI" className="underl">
              Carte de mobilité-inclusion
            </Link>
            link4=<Link to="/protection-sociale/">
              Reconnaissance de qualité de travailleur handicapé
            </Link>
          />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Mdph
