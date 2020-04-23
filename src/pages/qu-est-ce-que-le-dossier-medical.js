import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Qdm = () => (
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
            QU’EST-CE QUE LE DOSSIER MÉDICAL ?
          </h2>

          <p className="desc">
            Le dossier médical regroupe toutes informations concernant la santé
            d’un patient détenues à quelque titre que ce soit, par tous
            professionnels de santé, établissements et centres de santé, qui
            sont formalisées ou ont fait l'objet d'échanges écrits entre
            professionnels de santé (CSP, art. L.1111-7).
          </p>

          <p className="desc">
            {" "}
            Le dossier médical peut être détenu par un médecin libéral, un
            médecin du travail, un médecin-conseil de la sécurité sociale, ou le
            médecin-conseil d’une compagnie d’assurance ou tous autres
            professionnels de santé (psychologue, infirmier, kinésithérapeute
            …).
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Qdm
