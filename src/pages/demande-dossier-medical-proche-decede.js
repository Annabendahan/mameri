import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Ddp = () => (
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
            DEMANDE DU DOSSIER MÉDICAL D’UN PROCHE DÉCÉDÉ 
          </h2>

          <p className="desc">
            Pour obtenir la communication du dossier médical d’un proche décédé,
            vous devez adresser votre demande par courrier recommandé avec
            accusé de réception à l’attention du Directeur si le dossier médical
            est détenu par un établissement de santé ou directement auprès du
            professionnel de santé concernée dans le cadre d’une prise en charge
            libérale.
          </p>

          <p className="desc">
            {" "}
            Vous ne pouvez solliciter le dossier médical d’un proche décédé que
            si vous êtes son ayant-droit, son époux, son concubin ou son
            partenaire de PACS et si la personne décédée ne s’y était pas
            opposée de son vivant.
          </p>

          <p className="desc">
            {" "}
            Vous avez la qualité d’ayant-droit si vous pouvez êtes héritier au
            sens du droit des successions (héritiers légaux ou testamentaires).
            Pour justifier de votre qualité d’ayant-droit, il faudra joindre au
            courrier en plus de votre pièce d’identité un document justifiant de
            cette qualité. Il peut s’agir d’un acte de notoriété qui doit être
            sollicité auprès du notaire en charge de la succession.
          </p>

          <p className="desc">
            {" "}
            Pour l’époux, ou le partenaire de PACS, il faudra joindre une copie
            de la convention de PACS, un acte de naissance ou une copie du
            livret de famille.
          </p>

          <p className="desc">
            {" "}
            A la différence d’une demande concernant son propre dossier médical,
            vous devez impérativement lorsque vous sollicitez le dossier médical
            d’un proche décédé motiver votre demande par l’un des objectifs
            prévus par la loi : <br /><br />
            - connaitre les causes du décès <br />
            - faire valoir ses droits <br />- défendre la mémoire du défunt.
          </p>

          <p className="desc">
            {" "}
            Il faut veiller à bien préciser les circonstances dans lesquelles la
            mémoire du défunt doit être défendue (attaque publique, atteinte à
            la vie privée...) ou la nature du droit que vous souhaitez faire
            valoir (action en indemnisation …).
          </p>

          <p className="desc">
            {" "}
            En fonction du motif invoqué, l’établissement procédera à un tri et
            ne vous remettra que les pièces médicales nécessaires pour parvenir
            à l’objectif invoqué.
          </p>

          <p className="desc">
            {" "}
            <b> Bon à savoir</b> - en cas de décès d'une personne mineure, les
            titulaires de l'autorité parentale conservent leur droit d'accès à
            la totalité des informations médicales la concernant, à l'exception
            des éléments relatifs aux décisions médicales pour lesquelles la
            personne mineure, le cas échéant, s'est opposée à l'obtention de
            leur consentement.
          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI met à votre disposition gratuitement des
            modèles de demande de dossier médical à compléter selon votre
            situation{" "}
            <span className="bold underlined">
              <Link to="/modeles-et-formulaires/">
                (accéder aux modèles de courrier).
              </Link>
            </span>
          </p>

          <p className="desc">
            {" "}
            Quelle que soit votre situation, Maître MAMERI, pourra vous
            conseiller utilement et vous accompagner pour obtenir communication
            de votre dossier médical.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Ddp
