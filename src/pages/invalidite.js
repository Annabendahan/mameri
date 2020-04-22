import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Invalidite = () => (
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
            Comment aménager durablement mon temps de travail en raison de mon
            handicap ou de ma maladie ?
          </h2>

          <p className="desc">
            {" "}
            L’invalidité est un statut accordé par la sécurité sociale à un
            assuré dont la capacité de travail est réduite des 2/3 suite à un
            accident ou une maladie sans caractère professionnel et qui lui
            donne droit notamment au versement d’une pension et à une prise en
            charge de ses frais de santé à 100 %.
          </p>

          <p className="desc">
            {" "}
            En effet, si la restriction de la capacité de travail fait suite à
            un accident du travail ou une maladie professionnelle, le salarié
            relève de la législation sur les risques professionnels et pourra
            bénéficier, en cas de consolidation avec séquelles, d’une rente ou
            d’un capital.
          </p>

          <p className="desc">
            {" "}
            Pour bénéficier d’un placement en invalidité, il faut réunir des
            conditions administratives (durée d’affiliation d’au moins 12 mois /
            durée de cotisation minimum) et une condition médicale (restriction
            de la capacité de travail des 2/3 au moins).
          </p>

          <p className="desc">
            {" "}
            Le montant de la pension d’invalidité varie en fonction du niveau
            d’invalidité :
          </p>

          <p className="desc">
            <span className="bold"> - Pension d’invalidité catégorie 1 :</span>{" "}
            Invalides capables d'exercer une activité rémunérée. (30 % du
            salaire de référence)
            <br />
            <span className="bold">
              {" "}
              - Pension d’invalidité catégorie 2 :
            </span>{" "}
            Invalides absolument incapables d'exercer une profession quelconque,
            (50 % du salaire de référence)
            <br />
            <span className="bold">
              {" "}
              - Pension d’invalidité catégorie 3 : 
            </span>{" "}
            Invalides qui, étant absolument incapables d'exercer une profession,
            sont, en outre, dans l'obligation d'avoir recours à l'assistance
            d'une tierce personne pour effectuer les actes ordinaires de la vie,
            (50 % du salaire de référence).
          </p>

          <p className="desc">
            {" "}
            En cas de refus d’invalidité pour des raisons médicales ou
            administratives ou en cas de contestation du niveau d’invalidité,
            vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou
            par le formulaire de contact afin d’évoquer votre situation et de
            convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Invalidite
