import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic13 from "../images/as.jpeg"

const Sport = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS DE SPORT</h1>
          <img src={pic13} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous avez été victime d’un dommage corporel à la suite d’un accident
            sportif avec ou sans tiers-responsable dans le cadre d’une activité
            ou d’une compétition sportive ou de loisirs, en club ou non ?{" "}
          </p>
          <p className="desc">
            Si votre accident a été causé par un tiers, vous pouvez agir contre
            ce dernier s’il a commis une faute au titre de son contrat
            d’assurance de responsabilité civile.
          </p>
          <p className="desc">
            En l’absence de tiers, vous ne pourrez être indemnisé que si vous
            êtes titulaire d’une garantie dite des accidents de la vie.
          </p>
          <p className="desc">
            Toutefois, si vous êtes licencié en club, vous bénéficiez d’une
            assurance à ce titre qui pourra être mobilisée.
          </p>

          <p className="desc">
            Maître Quentin MAMERI vous conseillera utilement et mettra tout en
            œuvre pour vous permettre d’obtenir{" "}
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#RIP">
                réparation intégrale
              </Link>
            </span>{" "}
            de vos préjudices.{" "}
          </p>

          <p className="desc">
            Il vous accompagnera tout au long de la procédure y compris pendant
            la phase d’
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#EM">
                expertise médicale
              </Link>{" "}
            </span>
            .{" "}
          </p>

          <p className="desc">
            Si vous avez été victime d’un accident sportif, n’hésitez pas à
            contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
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
            link4=<Link to="/reparation-dommage-corporel/#PR">
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

export default Sport
