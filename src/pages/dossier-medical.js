import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Dos = () => (
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
            L’ACCÈS AU DOSSIER MÉDICAL
          </h2>

          <p className="desc">
            {" "}
            Obtenir la communication de son dossier médical est une étape
            essentielle avant d’engager une procédure amiable ou judiciaire
            concernant un litige en lien avec la santé ou le handicap.{" "}

          </p>

          <p className="desc">
            {" "}
            Ainsi, par exemple, si vous souhaitez obtenir réparation à la suite
            d’un accident ou d’une infraction pénale, le dossier médical sera
            une pièce essentielle lors de l’expertise médicale pour évaluer vos
            préjudices sur le plan médical. En matière de responsabilité
            médicale, il permettra notamment d’apprécier si le professionnel ou
            l’établissement de santé a respecté les règles de l’art, ou s’il
            s’agit d’un accident médical non fautif ouvrant droit à
            indemnisation par l’État.
          </p>

          <p className="desc">
            {" "}
            En droit du travail, il pourra être utile de solliciter votre
            dossier médical auprès de la médecine du travail et des
            professionnels de santé qui vous suivent pour défendre vos droits de
            salariés dans tous les litiges concernant votre santé (contestation
            d’inaptitude, harcèlement moral, licenciement, etc.)
          </p>

          <p className="desc">
            {" "}
            Enfin, il sera indispensable dans l’ensemble des litiges médicaux
            avec les organismes de sécurité sociale, la Maison Départementale
            des Personnes Handicapées (MDPH) ou avec les compagnies d’assurances
            concernant des prestations en lien avec la santé ou le handicap.
          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI répond aux questions que vous vous posez sur
            l’accès au dossier médical:
          </p>

          <p className="desc">
            {" "}
            <Link to="/qu-est-ce-que-le-dossier-medical/">
              <span className="bold underlined">
                {" "}
                - Qu’est-ce que le dossier médical ?
              </span>
            </Link>
          </p>

          <p className="desc">
            {" "}
            <Link to="/que-contient-le-dossier-medical/">
              <span className="bold underlined">
                {" "}
                - Que contient le dossier médical ?
              </span>
            </Link>
          </p>

          <p className="desc">
            {" "}
            <span className="bold ">
              {" "}
              - Comment accéder au dossier médical ?
            </span>
            <br />
            <Link to="/demande-propre-dossier-medical-mineur-majeur-protege/">
              <span className="bold underlined">
                {" "}
                Cas n°1 : La demande de son propre dossier médical ou en tant
                que représentant légal d’un mineur ou d’un majeur protégé
              </span>
            </Link>
            <br />
            <Link to="/demande-dossier-medical-proche-decede/">
              <span className="bold underlined">
                {" "}
                Cas n°2 : demande du dossier médical d’un proche décédé
              </span>
            </Link>
          </p>

          <p className="desc">
            {" "}
            <Link to="/duree-conservation-dossier-medical/">
              <span className="bold underlined">
                {" "}
                - Pendant combien de temps un établissement de santé doit-il
                conserver les dossiers médicaux de ses patients ?
              </span>
            </Link>
          </p>

          <p className="desc">
            {" "}
            <Link to="/delai-remise-dossier-medical/">
              <span className="bold underlined">
                {" "}
                - Dans quel délai un établissement ou un professionnel de santé
                doit-il me remettre mon dossier médical ?
              </span>
            </Link>
          </p>

          <p className="desc">
            {" "}
            <Link to="/refus-remise-dossier-medical/">
              <span className="bold underlined">
                {" "}
                - Que faire face au refus d’un établissement ou d’un
                professionnel de santé de me remettre mon dossier médical  ?
              </span>
            </Link>
          </p>
        </div>



        <VisitCard />
      </div>
      <p className="desc">
        <b>Articles associés :</b><br />

- <Link to="/certificat-medical-initial/"> Le certificat médical initial</Link> <br />
- <Link to="/expertise-medicale-dommage-corporel/">
          {" "}
              L'expertise médicale
            </Link><br />
- <Link to="/procedure-reparation/"> Les grandes étapes d’une
procédure en réparation de dommage corporel </Link> <br />

      </p>
    </div>
    <p
      style={{
        width: `420px`,
        margin: `auto`,
      }}
    >
      {" "}
      <Link to="/modeles-et-formulaires/" className="button bt2">
        {" "}
        MODÈLE DE DEMANDE DE DOSSIER MÉDICAL{" "}
        <svg
          className="yellowr"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
            fill="yellow"
          />
        </svg>{" "}
      </Link>{" "}
    </p>


  </Layout>
)

export default Dos
