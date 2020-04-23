import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Rrd = () => (
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
            QUE FAIRE FACE AU REFUS D’UN ÉTABLISSEMENT OU D’UN PROFESSIONNEL DE
            SANTÉ DE ME REMETTRE MON DOSSIER MÉDICAL  ? 
          </h2>

          <p className="desc">
            En cas de refus d’un établissement public ou privé participant à une
            mission de service public résultant de son silence à l’expiration du
            délai qui lui est imparti pour vous remettre votre dossier médical
            (8 jours ou 2 mois), ou en cas de refus clairement exprimé, vous
            avez la possibilité de saisir la Commission d’Accès au Document
            Administratif (CADA).
          </p>

          <p className="desc">
            {" "}
            Si le refus émane d’un professionnel de santé libéral, il convient
            de saisir l’ordre dont relève le professionnel concerné (Ordre des
            Médecins, Ordre des Chirurgiens-dentistes …).
          </p>

          <p className="desc">
            {" "}
            Vous avez également la possibilité d’agir par la voie judiciaire. 
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Rrd
