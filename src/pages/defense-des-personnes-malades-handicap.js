import React from "react"
import "../components/contact.css"
import { Link } from "gatsby"
import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

import pic10 from "../images/secu.jpeg"

import pic12 from "../images/mdph.png"
import pic13 from "../images/ass.jpeg"

const Malade = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP </h1>
          <p className="desc">
            {" "}
            Vous avez un litige avec les organismes de sécurité sociale ou avec
            la MDPH concernant des prestations sociales en lien avec la santé ou
            le handicap (refus de pension d’invalidité, refus d’AAH, refus de
            carte d’invalidité, refus de prestation de compensation du handicap,
            refus d’indemnités journalières …). Maître MAMERI vous représentera
            et vous assistera dans l’ensemble des litiges de sécurité sociale et
            d’aide sociale en matière de santé et de handicap.{" "}
          </p>
          <div className="blue2">
            <Link to="/litige-secu/">
              <div className="indemn2 ">
                <img src={pic10} className="picindex3" alt="fireSpot" />
                <h3> LITIGE AVEC LA SECURITE SOCIALE </h3>
              </div>{" "}
            </Link>
            <Link to="/litige-mdph/">
              <div className="salar2 ">
                <img src={pic12} className="picindex3" alt="fireSpot" />
                <h3> LITIGE AVEC LA MDPH </h3>
              </div>
            </Link>
            <Link to="/litige-assurances/">
              {" "}
              <div className="ass2 ">
                <img src={pic13} className="picindex3" alt="fireSpot" />
                <h3> LITIGE AVEC LES ASSURANCES</h3>
              </div>{" "}
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Malade
