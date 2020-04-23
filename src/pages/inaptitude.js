import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic11 from "../images/inap.png"

const Inaptitude = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> INAPTITUDE </h1>
          <img src={pic11} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Le médecin du travail peut se prononcer sur l’aptitude ou
            l’inaptitude du salarié dans le cadre d’une visite de reprise après
            une période d’au moins 30 jours d’arrêt maladie ou à tout moment à
            l’initiative de l’employeur, du salarié ou de la médecine du
            travail.{" "}
          </p>

          <p className="desc">
            {" "}
            En cas d’inaptitude, cela n’est pas sans conséquence pour le
            salarié. L’employeur peut soit procéder à son reclassement par
            aménagement, transformation ou changement de poste, soit procéder à
            son licenciement pour inaptitude.
          </p>
          <p className="desc">
            {" "}
            Si vous êtes en désaccord avec les avis, propositions, conclusions
            écrites ou indications émis par le médecin du travail, vous pouvez
            les contester devant le Conseil de prud’hommes dans un délai de 15
            jours à compter de la notification de la décision. Ce délai est très
            court, soyez donc très vigilant !{" "}
          </p>
          <p className="desc">
            {" "}
            Si vous êtes en accord avec la position du médecin du travail mais
            que vous contestez le licenciement prononcé par votre employeur,
            vous pouvez saisir le Conseil de Prud’hommes.{" "}
          </p>
          <p className="desc">
            Si vous souhaitez être conseillé ou assisté dans le cadre d’une
            procédure d’
            <span className="bold">
              <Link to="/inaptitude-salaries/">inaptitude</Link>
            </span>
            , vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou
            par le formulaire de contact afin d’évoquer votre situation et de
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/inaptitude-salaries/"> Inaptitude </Link>
          />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Inaptitude
