import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Accpro = () => (
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
            L’accident survenu dans un cadre professionnel
          </h2>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident dans un cadre professionnel, vous
            pourrez bénéficier de la législation sur les risques professionnels
            qui vous ouvre droit à certains avantages.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              1. Les types d’accidents ouvrant droit à la législation sur les
              accidents du travail
            </span>
          </p>
          <p className="desc">
            Trois types d’accident permettent au salarié de bénéficier de
            l'application de la législation sur les risques professionnels :
          </p>
          <p className="desc">
            {" "}
            - l’accident du travail au sens strict
            <br />
            Un accident est qualifié d’accident du travail lorsqu’il est survenu
            ou salarié par le fait ou à l’occasion du travail et ce quelqu’un
            soit la cause. 
          </p>

          <p className="desc">
            {" "}
            - l’accident de trajet
            <br />
            Un accident est reconnu comme un accident de trajet lorsque celui-ci
            est survenu pendant le trajet effectué par le salarié entre sa
            résidence et son lieu de travail, ainsi que sur le trajet entre son
            lieu de travail et le lieu de restauration où le salarié se rend
            pendant la pause repas. 
          </p>

          <p className="desc">
            {" "}
            - l’accident de mission
            <br />
            La jurisprudence assimile à un accident du travail l’accident
            survenu au salarié lors d’une mission professionnelle que lui a
            confié son employeur.
            <br />
            En effet, le salarié effectuant une mission a droit à la protection
            par la législation sur les risques professionnels pendant tout le
            temps de la mission qu'il accomplit pour son employeur, peu
            important que l'accident survienne à l'occasion d'un acte
            professionnel ou d'un acte de la vie courante, sauf la possibilité
            pour l'employeur ou la caisse de rapporter la preuve que le salarié
            avait interrompu sa mission pour un motif personnel. 
            <br />
            Le Cabinet de Maître Quentin MAMERI, Avocat de victimes, vous
            accompagnera et défendra vos intérêts dans l’ensemble des litiges
            avec l’employeur ou la sécurité sociale pour faire reconnaître votre
            accident.
          </p>
          <br />

          <p className="desc">
            <span className="bold">
              {" "}
              2. Les avantages de la législation sur les accidents du travail
            </span>
          </p>

          <p className="desc">
            {" "}
            L’accident de travail, de mission, et de trajet ouvre droit aux
            mêmes avantages, à savoir :
            <br />
            - une prise en charge des frais de santé à 100 % ;
            <br />
            - une dispense d’avance de frais ;
            <br />
            - le versement d’indemnités journalières en cas d’arrêt maladie sans
            délai de carence et sans durée limite jusqu’à la consolidation ;
            <br />
            - à compter de la consolidation, en cas de séquelles, le versement
            d’une rente ou d’un capital en fonction du taux d’incapacité
            retenue :
            <br />
            - l’application de règles protectrices en droit du travail
            (doublement de l’indemnité de licenciement en cas de licenciement
            pour inaptitude ; protection contre le licenciement, arrêt maladie
            considéré comme du temps de travail effectif ouvrant droit à congés
            payés…). 
            <br />
          </p>

          <p className="desc">
            {" "}
            Le Cabinet de Maître Quentin MAMERI, Avocat de victimes, vous
            accompagnera et défendra vos intérêts dans l’ensemble des litiges
            avec la sécurité sociale ou l’employeur quant à l’application des
            règles protectrices en matière d’accident du travail.
          </p>

          <p className="desc">
            {" "}
            Ainsi, Maître MAMERI intervient par exemple dans les litiges
            suivants :
            <br />
            - contestation de la date de consolidation ;
            <br />
            - contestation du taux d’incapacité permanente fixée par la sécurité
            sociale (IPP) ;
            <br />- litiges en droit du travail.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes dans une telle situation, n’hésitez pas à contacter
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

export default Accpro
