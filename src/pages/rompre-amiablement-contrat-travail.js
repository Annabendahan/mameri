import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Amia = () => (
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
            Rompre amiablement son contrat de travail, mode d’emploi !
          </h2>

          <p className="desc">
            {" "}
            La rupture conventionnelle est un mode de rupture du contrat de
            travail. Elle permet à l’employeur et au salarié de mettre fin, d’un
            commun accord, au contrat de travail à durée indéterminée qui les
            lie à des conditions qu’ils déterminent ensemble.
          </p>

          <p className="desc">
            {" "}
            Cet accord est formalisé par une convention qui est négociée au
            cours d’un ou plusieurs entretiens préalables obligatoires au cours
            desquels le salarié peut être assisté par un membre de l’entreprise,
            d’un membre syndical ou d’une institution représentative du
            personnel ou, à défaut de syndicat ou d’institutions représentatives
            dans l’entreprise, par un conseiller du salarié inscrit sur une
            liste auprès de la préfecture.
          </p>

          <p className="desc">
            {" "}
            A compter de la signature de la convention, chaque partie dispose
            d’un délai de 15 jours pour se rétracter.
            <br /> <br />A l’issue de ce délai, l’employeur ou le salarié
            adressent la convention auprès de la DIREECTE pour homologation. La
            DIREECTE dispose d’un délai de 15 jours pour se prononcer. A défaut,
            l’homologation est acquise.
          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI pourra vous conseiller utilement sur les
            procédures à engager, notamment sur l’opportunité d’un tel mode de
            rupture, et veillera, le cas échéant, à ce que vos droits soient
            respectés et notamment à ce que vos indemnités de départ soient
            correctement évaluées.
          </p>

          <p className="desc">
            {" "}
            N’hésitez pas à contacter Maître Quentin MAMERI, par téléphone, mail
            ou par le formulaire de contact afin de lui exposer votre situation
            et convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Amia
