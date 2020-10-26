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
            POURQUOI LE CERTIFICAT MÉDICAL INITIAL EST-IL UNE PIÈCE ESSENTIELLE
            D’UN DOSSIER EN RÉPARATION DE DOMMAGE CORPOREL ?
          </h2>

          <p className="desc">
            {" "}
            Le certificat médical initial (CMI) est une pièce fondamentale du
            dossier en réparation du dommage corporel. Il permet d’inventorier
            l’ensemble des lésions subis par la victime à la suite de l’accident
            ou de l’infraction et ce afin que l’ensemble de ses préjudices
            puisse être évalués.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes pris en charge par les secours dans les suites de votre
            accident et hospitalisé, l’établissement d’accueil devra établir un
            certificat médical initial (CMI). Ce certificat médical initial fera
            l’inventaire des blessures constatées et mentionnera un taux
            d’incapacité.
          </p>
          <p className="desc">
            En tant que victime, vous devez bien vérifier que chacune de vos
            lésions soient bien inventoriées dans le certificat médical initial.
            Si tel n’était pas le cas ou si de nouvelles lésions apparaissaient
            par la suite, prenez rendez-vous chez votre médecin traitant afin
            que ce dernier les consigne dans un certificat médical
            complémentaire.
          </p>
          <p className="desc">
            {" "}
            Dans le cas où vous ne seriez pas hospitalisé, il est conseillé de
            vous rendre sans tarder chez votre médecin traitant afin que ce
            dernier puisse certifier des lésions qu’il a lui-même constaté suite
            à son examen clinique.
          </p>


          <p className="desc">
            {" "}
            Le certificat médical initial est fondamental pour identifier les
            préjudices que vous avez subis et établir qu’ils ont bien été causés
            par l’accident ou l’infraction dont vous avez été victime.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez engager une procédure d’indemnisation ou être
            accompagné pendant cette phase, n’hésitez pas à contacter Maître
            Quentin MAMERI, par téléphone, mail ou par le formulaire de contact
            afin de lui exposer votre situation et convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>

      <p className="desc">
        <b>Articles associés :</b><br />


        - <Link to="/dossier-medical/"> L’accès au dossier médical</Link> <br />
        - <Link to="/prejudices-reparables/"> Les préjudices indemnisables</Link><br />

      </p>

    </div>
  </Layout>
)

export default Cmi
