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
            VICTIME D’UN ACCIDENT OU D’UNE INFRACTION : QUELS PRÉJUDICES
            RÉPARABLES ?
          </h2>

          <p className="desc">
            {" "}
            Il est difficile pour une victime d’accidents ou d’infractions
            pénales de déterminer quels sont les préjudices dont elle peut
            obtenir réparation. Or, connaître les préjudices indemnisables est
            essentiel afin qu’ils ne soient pas oubliés ou minimisés
            particulièrement lors de l’expertise médicale. En effet, il n’est
            pas rare qu’une victime se présente seule à une expertise médicale
            ou signe un accord d’indemnisation avec l’assureur sans qu’elle ne
            connaisse véritablement la nature et l’étendue des préjudices dont
            elle peut être indemnisés.
          </p>

          <p className="desc">
            {" "}
            En effet, lorsqu’une victime n’est pas assistée, le risque est que
            nombre de ses préjudices soient oubliés ou minimisés, et qu’elle se
            rendre compte bien plus tard que l’indemnisation qui lui a été
            versée ne compense pas ses véritables besoins. Cela est
            particulièrement le cas dans les situations de grand handicap.
            Malheureusement, une fois l’accord conclu ou le jugement rendu, il
            ne sera plus possible de solliciter une nouvelle indemnisation, sauf
            situation d’aggravation (en savoir plus).
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Le principe de réparation intégrale</span>
          </p>

          <p className="desc">
            {" "}
            Une victime d’un accident ou d’une infraction pénale bénéficie du
            droit à réparation intégrale de ses préjudices. Selon ce principe,
            la réparation a pour objet de replacer autant que possible la
            victime dans l’état où elle se trouvait si le fait dommageable
            n’avait pas eu lieu. Ainsi, cela implique que l’ensemble des
            préjudices d’une victime soient totalement et correctement évalués,
            poste de préjudice par poste de préjudice.
          </p>

          <p className="desc">
            {" "}
            <span className="bold">
              Les victimes pouvant obtenir réparation
            </span>
          </p>

          <p className="desc">
            {" "}
            Peuvent obtenir réparation de leurs préjudices :
            <br />
            - les victimes « directe » c’est à dire celle qui a subi le dommage
            dans sa personne ou ses biens ;
            <br /> - les victimes dite « indirectes » c’est-à-dire celles qui
            ont souffert d’un préjudice parce qu’une première personne, la
            victime directe, avec laquelle elle avait des liens, a subi un
            dommage (parents, fratrie, etc.).
          </p>

          <p className="desc">
            {" "}
            <span className="bold">Les préjudices indemnisables</span>
          </p>

          <p className="desc">
            {" "}
            Afin de favoriser une certaine lisibilité, un groupe de travail a
            établi une nomenclature des préjudices, dite nomenclature Dintilhac
            qui fixe une liste non exhaustive des préjudices dont peut
            solliciter réparation.
            <br />
            Une victime peut obtenir indemnisation de ses préjudices dits
            patrimoniaux c’est-à-dire des préjudices évaluables sur le plan
            économique et de ses préjudices extrapatrimoniaux c’est à dire
            touchant sa sphère personnelle.
          </p>

          <p className="desc">
            {" "}
            <span className="bold">
              - Préjudices de la victime « directe » :{" "}
            </span>
          </p>

          <p className="desc">
            {" "}
            1°) Préjudices patrimoniaux
            <br />
            <br />
            a) Préjudices patrimoniaux temporaires (avant consolidation)
            <br />
            - Dépenses de santé́ temporaires
            <br />
            - Pertes de gains professionnels actuels (P.G.P.A.)
            <br />- Frais divers
            <br />
            <br />
            b) Préjudices patrimoniaux permanents (après consolidation) :
            <br />
            - Dépenses de santé́ futures
            <br />
            - Frais de logement adapté
            <br />- Frais de véhicule adapté
            <br />
            - Assistance permanente par tierce personne
            <br />
            - Pertes de gains professionnels futures (P.G.P.F)
            <br />- Préjudice scolaire, universitaire ou de formation 2°)
            Préjudices extrapatrimoniaux
            <br />
            <br />
            a) Préjudices extrapatrimoniaux temporaires (avant consolidation) :
            <br />
            - Déficit fonctionnel temporaire (D.F.T.)
            <br />
            - Souffrances endurées temporaires
            <br />- Préjudice esthétique temporaire
            <br />
            <br />
            b) Préjudices extrapatrimoniaux permanents (après consolidation) :
            <br />
            - Déficit fonctionnel permanent (D.F.P.)
            <br />
            - Souffrances endurées permanentes
            <br />- Préjudice d’agrément
            <br />
            - Incidence professionnelle extrapatrimoniale
            <br />
            - Préjudice esthétique permanent
            <br />- Préjudice sexuel
            <br />- Préjudice d’établissement
            <br />- Préjudices permanents exceptionnels
            <br />
            <br />
            c) Préjudices à caractère personnel évolutifs (hors consolidation) :
          </p>

          <p className="desc">
            {" "}
            <span className="bold">
              - Préjudices de la victime « directe » :{" "}
            </span>
          </p>

          <p className="desc">
            {" "}
            1°) Préjudices des victimes indirectes en cas de décès de la victime
            directe
            <br />
            <br />
            a) Préjudices patrimoniaux : <br />- Frais d’obsèques
            <br />- Pertes de revenus des proches <br />- Frais divers des
            proches
            <br />
            <br />
            b) Préjudices extrapatrimoniaux :
            <br />- Préjudice d’accompagnement
            <br />- Préjudice d’affection
            <br />
            <br /> 1°) Préjudices des victimes indirectes en cas de décès de la
            victime directe
            <br />
            <br />
            a) Préjudices patrimoniaux : <br />- Pertes de revenus des proches
            <br />- Frais divers des proches <br />
            <br />
            b) Préjudices extrapatrimoniaux : <br />- Préjudice d’affection
            <br />- Préjudices extrapatrimoniaux exceptionnels <br />
            <br />
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez obtenir réparation de vos préjudices à la suite
            d’un accident ou d’une infraction pénale, n’hésitez pas à contacter
            Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de
            contact afin de lui exposer votre situation et convenir d’un
            rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default ExpMed
