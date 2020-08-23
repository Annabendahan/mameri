import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const ExpMed = () => (
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
            L’EXPERTISE MÉDICALE, PHASE PRÉALABLE INCONTOURNABLE DE LA PROCÉDURE
            EN RÉPARATION DE DOMMAGE CORPOREL
          </h2>

          <p className="desc">
            {" "}
            L’expertise médicale est un moment clef de la procédure en
            réparation du dommage corporel. En effet, elle constitue le
            préalable à l’indemnisation car c’est à cette occasion que le
            médecin-expert évaluera l’ensemble de vos préjudices sur le plan
            médical.
          </p>

          <p className="desc">
            {" "}
            En matière de responsabilité médicale, l’expertise sera essentielle
            pour déterminer si les conditions de l’indemnisation sont réunies.
            Il s’agira par exemple de se prononcer sur le fait de savoir si le
            professionnel ou l’établissement de santé a respecté les règles de
            l’art autrement dit s’il a commis une{" "}
            <span className="bold underlined">
              <Link to="/erreur-medicale/">faute médicale</Link>
            </span>
            . En l’absence de faute, l’expertise permettra de déterminer si
            l’accident médical que vous avez subi répond aux conditions
            médicales pour ouvrir droit à une indemnisation par l’état (en
            savoir plus) et dans le cadre d’une infection survenue dans un
            établissement de santé, l’expert indiquera s’il s’agit d’une
            infection pouvant être qualifiée de{" "}
            <span className="bold underlined">
              <Link to="/infection-nosocomiale/">nosocomiale</Link>
            </span>
            .
          </p>
          <p className="desc">
            L’Expertise peut être mise en place dans différents cadres :
          </p>
          <p className="desc">
            {" "}
            <span className="bold"> • Le cadre amiable : </span> cela consiste
            en l’organisation d’une expertise amiable avec l’établissement ou le
            professionnel de santé mis en cause et son assureur. Attention
            cependant car, dans cette hypothèse, l’assureur ou l’établissement
            de santé vous proposera une expertise amiable par ses propres
            médecins-conseils ce qui pose un problème d’impartialité.
          </p>
       

          <p className="desc-s" id="AT">
            {" "}
            <span className="bold"> • Le cadre judiciaire : </span> Ce recours
            auprès du Tribunal consiste à solliciter la désignation d’un
            médecin-expert indépendant inscrit sur la liste des Tribunaux. Les
            frais d’expertises sont à la charge du demandeur mais peuvent être
            pris en charge par une ou plusieurs assurances de protection
            juridique dont vous seriez éventuellement titulaire.
          </p>
          <br />
          <p className="desc-s">
            {" "}
            <span className="bold">
              {" "}
              • Le cadre de la Commission de conciliation et d’indemnisation des
              accidents médicaux (CCI) :{" "}
            </span>{" "}
            Cette commission a été créée en 2002 par la loi Kouchner. Cette
            procédure présente l’avantage de la gratuité (procédure et frais
            d’expertise) et d’une certaine rapidité. Cependant, la CCI n’est
            compétente que pour les accidents médicaux les plus graves, selon
            des critères fixés par décret.
          </p>
          <br />

          <p className="desc">
            {" "}
            En tant que victime, il est important que vous soyez accompagné d’un
            avocat et/ou d’un médecin-conseil lors de cette phase d’expertise
            médicale afin de veiller à ce que vos droits soient préservés et
            respectés et que vos préjudices soient correctement évalués et de
            manière impartiale.
          </p>

          <p className="desc">
            {" "}
            Maître MAMERI défendra vos intérêts pendant cette phase d’expertise
            médicale afin que vous ne vous retrouviez pas seul face aux avocats
            et médecins-conseils de l’assureur ou du responsable. Il vous
            apportera non seulement un soutien juridique et technique mais
            également humain. Il pourra vous orienter vers les médecins-conseil
            et les professionnels qualifiés (ergothérapeute, architecte…) avec
            lesquels il travaille habituellement.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez mettre en œuvre une expertise médicale ou être
            assisté pendant cette phase, n’hésitez pas à contacter Maître
            Quentin MAMERI, par téléphone, mail ou par le formulaire de contact
            afin de lui exposer votre situation et convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default ExpMed
