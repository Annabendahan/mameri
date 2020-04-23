import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Rmh = () => (
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
            PUIS-JE PRÉTENDRE À UN REVENU MINIMUM EN RAISON DE MON HANDICAP ?
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              Oui. L’allocation aux adultes handicapés (AAH) est une prestation
              octroyée par la Maison Départementale des Personnes Handicapées
              (MDPH) qui garantit un minimum de revenu aux personnes en
              situation de handicap ayant de faibles ressources et atteint d’un
              certain niveau d’incapacité.
            </span>
          </p>

          <p className="desc">
            {" "}
            D’un point de vue médical, l’AAH est attribué :
            <br />
            - aux personnes atteintes d’un taux d’incapacité de 80 %
            <br />- aux personnes atteintes d’un taux d’incapacité compris entre
            50 et 79 % et présentant une restriction substantielle et durable
            d’accès à l’emploi.
          </p>

          <p className="desc">
            {" "}
            D’un point de vue administratif, pour bénéficier de l’AAH, il faut
            également résider en France de manière permanente et être âgé de 20
            ans ou plus.
          </p>

          <p className="desc">
            {" "}
            Le montant de l’AAH est actuellement de 900 euros.
          </p>

          <p className="desc"> Il ne peut pas être récupéré sur succession.</p>

          <p className="desc">
            {" "}
            Pour faire une demande d’AAH, vous devez adresser à la MDPH le
            formulaire de demande unique accompagné du certificat médical dûment
            rempli.
            <span className="bold underlined">
              <Link to="/modeles-et-formulaires/">
                (accéder à ces formulaires).
              </Link>
            </span>
          </p>

          <p className="desc">
            {" "}
            En cas de refus d’AAH pour des raisons médicales ou administratives,
            n’hésitez pas à contacter Maître Quentin MAMERI par téléphone, mail
            ou par le formulaire de contact afin d’évoquer votre situation et de
            convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Rmh
