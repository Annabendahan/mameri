import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Inas = () => (
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
            L’INAPTITUDE DES SALARIÉS
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              Le médecin du travail peut se prononcer sur l’aptitude ou
              l’inaptitude du salarié dans le cadre d’une visite de reprise
              après une période d’au moins 30 jours d’arrêt maladie ou à tout
              moment à l’initiative de l’employeur, du salarié ou de la médecine
              du travail.
            </span>
          </p>

          <p className="desc">
            {" "}
            En cas d’inaptitude, cela n’est pas sans conséquence pour le
            salarié. L’employeur peut soit procéder à son reclassement par
            aménagement, transformation ou changement de poste, soit procéder à
            son licenciement pour inaptitude.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes en désaccord avec les avis, propositions, conclusions
            écrites ou indications émis par le médecin du travail, vous pouvez
            les contester devant le Conseil de prud’hommes dans un délai de 15
            jours à compter de la notification de la décision. Ce délai est très
            court, soyez donc très vigilant !
          </p>

          <p className="desc">
            {" "}
            Si vous êtes en accord avec la position du médecin du travail mais
            que vous contestez le licenciement prononcé par votre employeur,
            vous pouvez saisir le Conseil de Prud’hommes.
          </p>

          <p className="desc">
            {" "}
            Si votre inaptitude a pour origine un manquement de l’employeur,
            pourra se poser la question de l’opportunité d’un recours tendant à
            rompre votre contrat de travail au tort de l’employeur.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez contester une inaptitude, un licenciement pour
            inaptitude ou obtenir une requalification de cette inaptitude en
            licenciement abusif, n’hésitez pas à contacter Maître Quentin MAMERI
            par téléphone, mail ou par le formulaire de contact afin d’évoquer
            votre situation et de convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Inas
