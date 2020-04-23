import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Rqth = () => (
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
            COMMENT OBTENIR UNE RECONNAISSANCE ADMINISTRATIVE DE MON HANDICAP
            SUR LE PLAN PROFESSIONNEL ?
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              La Reconnaissance de Qualité de Travailleur Handicapé (RQTH) est
              un statut reconnu par la MDPH à toute personne dont les
              possibilités d'obtenir ou de conserver un emploi sont
              effectivement réduites par suite de l'altération d'une ou
              plusieurs fonctions (physique, sensorielle, mentale ou psychique).
            </span>
          </p>

          <p className="desc">
            {" "}
            Ce statut permet de bénéficier de plusieurs avantages au niveau de
            l’emploi :
            <br />
            - dispositifs dédiés à l'insertion professionnelle
            <br />- aménagement de vos horaires et poste de travail,
            <br /> - soutiens spécialisés pour la recherche d'emploi au sein,
            par exemple, de Cap Emploi, etc.
            <br />- obligation d’emploi
          </p>

          <p className="desc">
            {" "}
            Pour faire une demande de RQTH, vous devez adresser à la MDPH le
            formulaire de demande unique accompagné du certificat médical dûment
            rempli{" "}
            <span className="bold underlined">
              <Link to="/modeles-et-formulaires/">
                (accéder à ces formulaires).
              </Link>
            </span>
          </p>

          <p className="desc">
            {" "}
            En cas de harcèlement moral, il est possible d’engager la
            responsabilité de son employeur. Il est également possible de rompre
            son contrat de travail à ses torts exclusifs ou bien encore
            d’engager une procédure pour faire requalifier son inaptitude en
            licenciement abusif.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime de harcèlement moral et que vous envisagez un
            recours contre votre employeur, n’hésitez pas à contacter Maître
            Quentin MAMERI par téléphone, mail ou par le formulaire de contact
            afin d’évoquer votre situation et de convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Rqth
