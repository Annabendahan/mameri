import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Consolidation = () => (
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
            Qu’est-ce que la consolidation ?
          </h2>

          <p className="desc">
            {" "}
            La consolidation est une notion médico-légale essentielle dans
            l’indemnisation du dommage corporel. Elle correspond à la date de
            stabilisation de vos lésions provoquées par l’accident ou
            l’agression et constitue une condition sine qua non de votre
            indemnisation définitive.
          </p>

          <p className="desc">
            {" "}
            Cela ne signifie pas que vous êtes guéri mais que votre état de
            santé est stabilisé c’est-à-dire qu’il n’est ni susceptible
            d’amélioration, ni d’aggravation. Tel n’est pas le cas si une
            intervention chirurgicale est programmée ou si des soins sont en
            cours car votre état sera encore susceptible d’évoluer positivement
            ou négativement.
          </p>
          <p className="desc">
            Vous ne pourrez être indemnisé définitivement que si votre état de
            santé est consolidé. La date de consolidation marquera la séparation
            entre les préjudices temporaires, qui sont la conséquence de vos
            lésions faisant suite à l’accident ou l’infraction, et les
            préjudices permanents qui correspondent à vos séquelles (en savoir
            plus).
          </p>
          <p className="desc">
            {" "}
            Si vous avez subi un accident du travail, de trajet ou de mission
            (en savoir plus), la consolidation marque la fin du versement des
            indemnités journalières par la sécurité sociale et donne lieu, en
            cas de séquelles, au versement d’une indemnisation sous forme de
            rente ou de capital. 
          </p>
          <br />

          <p className="desc">
            {" "}
            Si vous souhaitez contester la date de consolidation qui vous a été
            attribuée par un expert ou un médecin-conseil de la sécurité
            sociale, n’hésitez pas à contacter Maître Quentin MAMERI, par
            téléphone, mail ou par le formulaire de contact afin de lui exposer
            votre situation et convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Consolidation
