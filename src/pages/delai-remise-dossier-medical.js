import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Drd = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h2 className="title">
            {" "}
            <svg
              className="yellows"
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="#F2DC17" />
            </svg>{" "}
            DANS QUEL DÉLAI UN ÉTABLISSEMENT OU UN PROFESSIONNEL DE SANTÉ
            DOIT-IL ME REMETTRE MON DOSSIER MÉDICAL ?
          </h2>

          <p className="desc">
            L’établissement ou le professionnel de santé dispose d’un délai de 8
            jours pour vous remettre les documents concernés, ce délai étant
            porté à 2 mois pour les dossiers médicaux datant de plus de 5 ans.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Drd
