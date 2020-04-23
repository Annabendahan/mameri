import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Cmi = () => (
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
            QUEL STATUT POUR FACILITER MES TRANSPORTS ET DÉPLACEMENTS EN RAISON
            DE MON HANDICAP ?
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              La Carte de mobilité inclusion (CMI) est un statut accordé par la
              MDPH qui permet de faciliter les transports et les déplacements
              des personnes en situation de handicap.
            </span>
          </p>

          <p className="desc"> Il existe trois sortes de CMI :</p>

          <p className="desc">
            {" "}
            <span className="bold">- La CMI mention invalidité </span>
            permet d'obtenir une priorité d'accès aux places dans les transports
            en commun, dans les espaces et salles d'attente dans les
            établissements et les manifestations accueillant du public, et de
            bénéficier de certains avantages commerciaux. Elle est attribuée aux
            personnes qui présentent un taux d'incapacité permanente d'au moins
            80 %, ou qui sont en invalidité 3ème catégorie, ou pour les
            bénéficiaires de l’Allocation personnalisé d’autonomie (APA) classé
            en groupe 1 ou 2 de la grille Aggir.
          </p>

          <p className="desc">
            {" "}
            <span className="bold"> - La CMI mention priorité </span>
            permet d'obtenir une priorité d'accès aux places dans les transports
            en commun, dans les espaces et salles d'attente dans les
            établissements et les manifestations accueillant du public. Elle est
            attribuée aux personnes atteintes d'une incapacité inférieure à 80 %
            rendant la station debout pénible.
          </p>

          <p className="desc">
            {" "}
            <span className="bold">- La CMI mention stationnement </span>
            permet d'utiliser gratuitement et sans limitation de durée, toutes
            les places de stationnement ouvertes au public. Elle est attribuée
            aux personnes atteintes d'un handicap qui réduit de manière
            importante et durable leur capacité et leur autonomie de déplacement
            à pied ou qui impose qu’elles soient accompagnées par une tierce
            personne dans ses déplacements ou pour les bénéficiaires de
            l’Allocation personnalisé d’autonomie (APA) classé en groupe 1 ou 2
            de la grille Aggir.
          </p>

          <p className="desc">
            {" "}
            Pour faire une demande de CMI, vous devez adresser à la MDPH le
            formulaire de demande unique accompagné du certificat médical dûment
            rempli
          </p>

          <p className="desc">
            {" "}
            En cas de refus de CMI pour des raisons médicales ou
            administratives, n’hésitez pas à contacter Maître Quentin MAMERI par
            téléphone, mail ou par le formulaire de contact afin d’évoquer votre
            situation et de convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Cmi
