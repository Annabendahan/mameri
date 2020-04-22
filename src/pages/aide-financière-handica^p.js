import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Afh = () => (
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
            Comment obtenir une aide financière pour prendre en charge les frais
            nécessités par mon handicap ?
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              Deux prestations principales permettent de prendre en charge les
              aide humaines et techniques nécessités par le handicap : la
              prestation de compensation du handicap octroyée par la MDPH (PCH)
              et l’Allocation Personnalisée d’autonomie (APA) par le
              département.
            </span>
          </p>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              Deux prestations principales permettent de prendre en charge les
              aide humaines et techniques nécessités par le handicap : la
              prestation de compensation du handicap octroyée par la MDPH (PCH)
              et l’Allocation Personnalisée d’autonomie (APA) par le
              département.
            </span>
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - Prestation de compensation du handicap (PCH)
            </span>{" "}
          </p>

          <p className="desc">
            {" "}
            La Prestation de Compensation du Handicap (PCH) est une prestation
            accordée par la MDPH permettant de prendre en charge les dépenses
            liées au handicap des personnes résidant en France (aide humaine,
            aides techniques, aménagements …).
          </p>

          <p className="desc">
            {" "}
            Pour pouvoir bénéficier de la PCH, vous devez vous trouver, sur le
            plan médical, dans l'une des situations suivantes :
            <br />
            - Vous rencontrez une difficulté absolue pour la réalisation d'une
            activité (mobilité, entretien personnel, communication, tâches et
            exigences générales et relations avec autrui). La difficulté est
            qualifiée d'absolue si l'activité ne peut pas du tout être réalisée
            par la personne elle-même ;
            <br />- Vous avez une difficulté grave pour la réalisation d'au
            moins 2 activités (mobilité, entretien personnel, communication,
            tâches et exigences générales et relations avec autrui). La
            difficulté à accomplir ces activités est qualifiée de grave
            lorsqu'elles sont réalisées difficilement et de façon altérée par
            elle-même.
          </p>

          <p className="desc">
            {" "}
            Pour faire une demande de PCH, vous devez adresser à la MDPH le
            formulaire de demande unique accompagné du certificat médical dûment
            rempli (accéder à ces formulaires)
          </p>

          <p className="desc">
            {" "}
            En cas de refus de PCH ou d’un désaccord quant à l’évaluation des
            besoins, n’hésitez pas à contacter Maître Quentin MAMERI par
            téléphone, mail ou par le formulaire de contact afin d’évoquer votre
            situation et de convenir d’un rendez-vous.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - Allocation Personnalisée d’Autonomie (APA)
            </span>{" "}
            <p className="desc">
              {" "}
              L’allocation personnalisée d’autonomie est une aide versée par le
              Département pour prendre en charge, en tout ou partie, les
              dépenses nécessaires au maintien à domicile d’une personne.
            </p>
            <p className="desc">
              {" "}
              Pour être éligible à ce dispositif, il faut avoir au minimum 60
              ans et résider :
              <br /> - soit à votre domicile, <br /> - soit au domicile d'un
              proche qui vous héberge, <br /> - soit chez un accueillant
              familial, <br /> - soit dans une résidence autonomie (anciennement
              appelé foyer-logement).
            </p>
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Afh
