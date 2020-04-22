import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Respemp = () => (
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
            Comment engager la responsabilité de mon employeur s’il a commis une
            faute à l’origine de mon accident du travail ?
          </h2>

          <p className="desc">
            {" "}
            La procédure en reconnaissance de faute inexcusable permet à un
            salarié victime d’un accident du travail ou d’une maladie
            professionnelle d’agir contre l’employeur pour obtenir, d’une part,
            indemnisation de ses préjudices et, d’autre part, une majoration de
            l’indemnisation forfaitaire versée par la sécurité sociale (rente ou
            capital).
          </p>

          <p className="desc">
            {" "}
            Pour que l’employeur soit tenu d’indemniser les préjudices du
            salarié, il vous faudra apporter la preuve de la faute inexcusable
            de votre employeur. Selon la jurisprudence, la faute est inexcusable
            lorsque « l’employeur avait ou aurait dû avoir conscience du danger
            auquel était exposé le salarié, et qu’il n’a pas pris les mesures
            nécessaires pour l’en préserver ».
          </p>

          <p className="desc">
            {" "}
            Si la faute inexcusable est reconnu, cela vous ouvre droit à une
            indemnisation complémentaire :
            <br />
            - doublement de la rente ou du capital versée par la sécurité
            sociale
            <br />- réparation des préjudices complémentaires non indemnisés par
            la rente ou le capital versé : souffrances endurées, préjudice
            d’agrément, préjudice esthétique, etc.
          </p>

          <p className="desc">
            {" "}
            Afin de protéger la victime contre une éventuelle insolvabilité de
            son employeur, la loi prévoit que l’indemnisation des préjudices
            complémentaires de victime, en cas de faute inexcusable, est pris en
            charge par l’organisme de sécurité sociale qui se retournera ensuite
            contre l’employeur responsable.
          </p>

          <p className="desc">
            {" "}
            L’assistance d’un avocat est essentielle que ce soit dans les
            démarches de reconnaissance de la faute inexcusable de votre
            employeur ou dans celles relatives à votre indemnisation tant au
            stade de l’expertise médicale que du chiffrage de vos préjudices.
          </p>

          <p className="desc">
            {" "}
            Si vous envisagez d’engager une procédure de faute inexcusable
            contre votre employeur, n’hésitez pas à contacter Maître Quentin
            MAMERI, par téléphone, mail ou par le formulaire de contact afin de
            lui exposer votre situation et convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Respemp
