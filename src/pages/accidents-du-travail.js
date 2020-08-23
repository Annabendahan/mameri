import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic8 from "../images/AT.png"

const Travail = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS DU TRAVAIL</h1>
          <img src={pic8} className="picdefense" alt="fireSpot" />
          <p className="desc">
            Vous venez d’être victime d’un{" "}
            <span className="bold">
              {" "}
              <Link to="/accident-cadre-professionnel/">
                accident du travail
              </Link>
            </span>
            , d’un{" "}
            <span className="bold">
              <Link to="/accident-cadre-professionnel/">
                accident de trajet
              </Link>
            </span>{" "}
            ou d’un{" "}
            <span className="bold">
              <Link to="/accident-cadre-professionnel/">
                accident de mission
              </Link>
            </span>
            .{" "}
          </p>

          <p className="desc-s">
            {" "}
            La reconnaissance en accident du travail par la CPAM permet de
            bénéficier en cas d’arrêt de travail du versement d’un revenu de
            remplacement sous forme d’indemnités journalières jusqu’à la{" "}
            <span className="bold">
              <Link to="/consolidation/">consolidation</Link>{" "}
            </span>
            et par la suite, en cas de séquelles, d’obtenir une indemnisation
            par la sécurité sociale sous forme de rente ou de capital en
            fonction du taux incapacité (entre 1 et 9 %, versement d’un capital,
            au-delà versement d’une rente périodique).{" "}
          </p>
          <br />

          <p className="desc-s">
            {" "}
            Pour obtenir une réparation des préjudices supplémentaires en
            matière d’accident du travail, le salarié devra agir contre
            l’employeur en{" "}
            <span className="bold">
              <Link to="/faute-inexcusable/"> faute inexcusable</Link>
            </span>
            .{" "}
          </p>
          <p className="desc">
            {" "}
            En cas d’accident de trajet, il n’est pas possible d’agir en faute
            inexcusable contre l’employeur. Il est cependant possible d’agir
            contre le responsable de l’accident et son assureur si celui-ci est
            tiers à l’entreprise.{" "}
          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI vous accompagne dans tous les litiges relatifs
            aux accidents du travail.
          </p>

          <p className="desc">
            {" "}
            • refus de reconnaissance d’un accident du travail ;
          </p>
          <p className="desc">
            {" "}
            • désaccord sur la date de consolidation fixée par la CPAM ;
          </p>
          <p className="desc">
            {" "}
            • désaccord avec le taux d’incapacité fixé par la CPAM ;
          </p>
          <p className="desc">
            {" "}
            • procédure en faute inexcusable contre l’employeur.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident du travail, n’hésitez pas à
            contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
          </p>

          <MotsClefs
            link1=<Link to="/accident-cadre-professionnel/">
              {" "}
              L'accident du travail{" "}
            </Link>
            link2=<Link to="/accident-cadre-professionnel/">
          {" "}
              L'accident de mission
            </Link>
            link3=<Link to="/accident-cadre-professionnel/">
          {" "}
              L'accident de trajet
            </Link>
            link4=<Link to="/consolidation/"> La consolidation</Link>
            link5=<Link to="/faute-inexcusable/"> La faute inexcusable</Link>
          />
        </div>

      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Travail
