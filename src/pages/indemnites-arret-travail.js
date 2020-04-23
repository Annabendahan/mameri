import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Iat = () => (
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
            LES INDEMNITÉS JOURNALIÈRES EN CAS D’ARRÊT DE TRAVAIL
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              L’arrêt de travail permet à un salarié dans l’impossibilité de
              travailler de justifier son absence à son employeur et de
              bénéficier du versement d’indemnités journalières par la sécurité
              sociale pour compenser sa perte de revenu. Ces indemnités
              journalières sont versées selon certaines conditions et modalités.
            </span>
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Conditions:</span>
          </p>

          <p className="desc">
            {" "}
            Pour bénéficier du versement d’indemnités journalières, il faut
            réunir des conditions administratives et médicales. Concernant les
            conditions administratives, elles varient suivant la durée de
            l’arrêt de travail.
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> - arrêt inférieur à 6 mois :</span> il faut
            avoir travaillé au moins 150 heures au cours des trois mois
            précédant l’arrêt de travail ; ou avoir cotisé sur un salaire au
            moins égal à 1 015 fois le montant du SMIC horaire au cours des six
            mois précédant l’arrêt.
            <br />
            <span className="bold"> - arrêt supérieur à 6 mois : </span> à la
            date du début de l’arrêt de travail, justifier de douze mois
            d’immatriculation en tant qu’assuré social auprès de l’Assurance
            maladie et avoir travaillé au moins 600 heures au cours des douze
            derniers mois ; ou avoir cotisé sur un salaire au moins égal à 2 030
            fois le montant du SMIC horaire au cours des douze mois précédant
            l’arrêt de travail.
          </p>

          <p className="desc">
            {" "}
            Concernant la condition médicale, il faut que le patient soit dans
            l’impossibilité de travailler ce qui prohibe le cumul avec d’autres
            activités y compris non rémunérées.
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Durée:</span>
          </p>

          <p className="desc">
            {" "}
            La durée maximum pour bénéficier d’indemnités journalières
            concernant un arrêt sans lien avec une ALD est de 360 jours sur une
            période glissante de 3 ans.
          </p>

          <p className="desc">
            {" "}
            Si l’arrêt de travail est en lien avec une ALD, la durée maximum est
            de 3 ans à partir du premier arrêt en lien avec l’ALD quel que soit
            le nombre de jours d’arrêts maladie inclus dans cette période.
          </p>

          <p className="desc">
            {" "}
            Il est possible de recharger ses droits à conditions d’avoir repris
            le travail pendant une période minimale de 1 an sans arrêt de
            travail en lien avec cette même ALD.
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Carence:</span>
          </p>

          <p className="desc">
            {" "}
            La loi prévoit un délai de carence de 3 jours pour les salariés.
            Cela signifie que vous ne percevrez pas d’indemnités journalières de
            la sécurité sociale pendant cette période.
            <br /> <br />
            Cependant, la loi prévoit certaines exceptions :
            <br />
            - Pas de délai de carence pour l’arrêt fait suite à une reprise de
            travail inferieure à 48 heures
            <br /> - Pas de délai de carence en cas d’accident du travail ou de
            maladie professionnelle
            <br />- 1 seul délai de carence pour les arrêts en lien avec une ALD
            sur une période de 3 ans (délai de carence seulement sur le premier
            arrêt). Attention : certaines conventions collectives prévoient la
            prise en charge par l’employeur des jours de carence.
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Montant:</span>
          </p>

          <p className="desc">
            {" "}
            L'indemnité journalière que vous recevrez pendant votre arrêt de
            travail est égale à 50 % de votre salaire journalier de base.
            Celui-ci est calculé sur la moyenne des salaires bruts des 3
            derniers mois précédant votre arrêt de travail (12 mois en cas
            d'activité saisonnière).
          </p>

          <p className="desc">
            {" "}
            Si vous avez au moins trois enfants à charge, votre indemnité
            journalière est majorée à partir du 31e jour d'arrêt de travail
            continu. Elle atteint alors 66,66 % du salaire journalier de base.
          </p>

          <p className="desc">
            {" "}
            Votre salaire est pris en compte dans la limite de 1,8 fois le Smic
            mensuel, soit 2.770,96 € bruts (sur la base du Smic au 1er janvier
            2020).
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> Vos obligations :</span>
          </p>

          <p className="desc">
            {" "}
            En cas d’arrêt de travail, l’assuré est tenu de respecter les
            obligations suivantes : <br />
            - envoyer son arrêt dans un délai de 48 heures,
            <br /> - se soumettre au contrôle organisé par le service médical,
            <br />- respecter les heures de sorties autorisées,
            <br /> - s’abstenir de toute activité non autorisée,
            <br />- ne pas quitter le département auquel il est rattaché ou le
            territoire sans autorisation préalable de la caisse.
          </p>

          <p className="desc">
            {" "}
            En cas de refus ou de cessation du versement d’indemnités
            journalières pour des raisons administratives ou médicales, vous
            pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le
            formulaire de contact afin d’évoquer votre situation et de convenir
            d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Iat
