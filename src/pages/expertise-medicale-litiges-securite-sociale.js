import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Expml = () => (
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
            L’expertise médicale, étape préalable des litiges médicaux avec la
            sécurité sociale
          </h2>

          <p className="desc">
            {" "}
            L’expertise médicale est un moment clef dans les procédures tendant
            à contester une décision d’ordre médical de la CPAM.
          </p>

          <p className="desc">
            {" "}
            En effet, la loi prévoit que les contestations d'ordre médical
            relatives à l'état du malade ou à l'état de la victime, et notamment
            à la date de consolidation en cas d'accident du travail et de
            maladie professionnelle et celles relatives à leur prise en charge
            thérapeutique, donnent lieu à une procédure d'expertise médicale.
            Donne lieu également à expertise les contestations d'ordre médical
            relatives à l'état de santé de l'enfant pour l'ouverture du droit à
            l'allocation journalière de présence parentale.
          </p>

          <p className="desc">
            {" "}
            Le médecin expert est choisi par accord entre le médecin-conseil
            près de la caisse et le médecin traitant désigné par l'assuré. À
            défaut d'accord, le médecin expert est désigné par le directeur
            départemental des affaires sanitaires et sociales qui doit
            obligatoirement choisir l'un des médecins figurant dans la liste des
            experts spécialisés en matière de Sécurité sociale de la cour
            d'appel.
          </p>

          <p className="desc">
            {" "}
            L'avis de l'expert s'impose à l'assuré et à la caisse.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez contester cette expertise, il conviendra d’engager
            une procédure judiciaire devant le Tribunal Judiciaire, Pôle Social.
          </p>

          <p className="desc">
            {" "}
            Plus précisément, ce recours auprès du Tribunal consistera à
            solliciter la désignation d’un médecin-expert indépendant inscrit
            sur la liste des Tribunaux. Les frais d’expertises seront alors à
            votre charge mais peuvent être pris en charge par une ou plusieurs
            assurances de protection juridique dont vous seriez éventuellement
            titulaire.
          </p>

          <p className="desc">
            {" "}
            Il est important que vous soyez accompagné d’un avocat et/ou d’un
            médecin-conseil lors de cette phase d’expertise médicale afin de
            veiller à ce que vos droits soient préservés et respectés et que vos
            préjudices soient correctement évalués et de manière impartiale.
          </p>

          <p className="desc">
            {" "}
            Maître MAMERI défendra vos intérêts pendant cette phase d’expertise
            médicale afin que vous ne vous retrouviez pas seul face aux avocats
            et médecins-conseils de l’assureur ou du responsable.Il vous
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

export default Expml
