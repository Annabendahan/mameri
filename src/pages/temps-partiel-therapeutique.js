import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Tpt = () => (
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
            Comment aménager temporairement mon temps de travail en raison de de
            ma maladie ?
          </h2>

          <p className="desc">
            Le temps partiel thérapeutique (TPT) est une prestation de la
            sécurité sociale permettant au salarié malade de reprendre son
            travail à temps réduit pour favoriser une amélioration de son état
            de santé. Dans le langage courant, on parle souvent de mi-temps
            thérapeutique à tort car le temps partiel thérapeutique n’est pas
            nécessairement un mi-temps. En matière d’accident du travail, on ne
            parle pas de temps partiel thérapeutique mais de reprise de travail
            léger.
          </p>

          <p className="desc">
            {" "}
            Le temps partiel thérapeutique a pour finalité de permettre au
            salarié de reprendre progressivement son activité professionnelle.
            La Caisse de sécurité sociale versera au salarié un complément du
            revenu qu’il perçoit à temps partiel sous forme d’indemnités
            journalières.
          </p>

          <p className="desc">
            {" "}
            Pour bénéficier d’un temps partiel thérapeutique, il doit en faire
            la demande par l’intermédiaire de son médecin-traitant ou le médecin
            du travail. Depuis 2018, il n’est plus nécessaire que la demande de
            temps partiel thérapeutique soit précédé d’un arrêt de travail.
          </p>

          <p className="desc">
            {" "}
            Le temps partiel thérapeutique étant considérée par la sécurité
            sociale comme un arrêt de travail, la durée maximum pour bénéficier
            d’un temps partiel thérapeutique est celui correspondant à la durée
            des droits dont le salarié bénéficie pour percevoir des indemnités
            journalières en cas d’arrêt de travail
          </p>

          <p className="desc">
            {" "}
            A noter que si vous êtes en ALD, vous bénéficiez d’un an
            supplémentaire d’indemnités journalières. Ainsi, vous pouvez
            théoriquement bénéficier de 4 ans maximum de temps partiel
            thérapeutique (3 ans d’indemnités journalières de date à date + 1 an
            de supplémentaire).
          </p>

          <p className="desc">
            {" "}
            En cas de refus de temps partiel thérapeutique, vous pouvez
            contacter Maître Quentin MAMERI par téléphone, mail ou par le
            formulaire de contact afin d’évoquer votre situation et de convenir
            d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Tpt
