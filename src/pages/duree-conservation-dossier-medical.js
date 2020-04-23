import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Dcd = () => (
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
            PENDANT COMBIEN DE TEMPS UN ÉTABLISSEMENT DE SANTÉ DOIT-IL CONSERVER
            LES DOSSIERS MÉDICAUX DE SES PATIENTS ?
          </h2>

          <p className="desc">
            Les établissements de santé sont soumis à une obligation de
            conservation du dossier médical pendant un délai de 20 ans à compter
            de la date du dernier séjour de son titulaire dans l'établissement
            ou de la dernière consultation externe en son sein sauf dans
            certaines hypothèses : <br />
            - Dossiers médicaux des enfants de moins de 8 ans : jusqu’à ce que
            ce dernier ait atteint l’âge de 28 ans. <br />
            - En cas de décès de la personne moins de 10 ans après son dernier
            passage dans l’établissement : 10 ans à compter de la date de son
            décès. <br />- Les éléments relatifs aux actes transfusionnels ou
            les éventuelles fiches d’incidents transfusionnel : 30 ans à compter
            de la date de l’acte transfusionnel
          </p>

          <p className="desc">
            {" "}
            Les médecins et plus largement les professionnels de santé ne sont
            pas soumis à ce délai légal. Cependant, l’Ordre des Médecins
            recommande aux médecins libéraux de s’aligner sur ces délais de
            conservation.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Dcd
