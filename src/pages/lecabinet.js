import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

const LeCabinet = () => (
  <Layout>
    <SEO title="Le cabinet" />
    <div className="background-hono spe">
      <div className="bigbox">
        <div className="bleft">
          <h1> LE CABINET </h1>
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
            PRÉSENTATION{" "}
          </h2>
          <p className="desc">
            {" "}
            Maître Quentin MAMERI a suivi un{" "}
            <span className="bold">
              {" "}
              <b>
                cursus universitaire en droit de la santé et de la sécurité
                sociale
              </b>{" "}
            </span>{" "}
            qui lui a permis d’acquérir une solide expertise dans ses domaines
            d’intervention.{" "}
          </p>

          <p className="desc">
            {" "}
            Il s’est forgé une véritable expérience au sein de cabinets d’avocat
            de victimes et à travers différents stages professionnels notamment
            au sein de chambres spécialisées de la Cour de cassation. Il
            intervient depuis plusieurs années en qualité d’écoutant sur{" "}
            <span className="bold">
              {" "}
              la ligne juridique Santé Info Droits mise en place par l’Union
              Nationale des Associations Agréées du Système de Santé (France
              Assos Santé)
            </span>
            .{" "}
          </p>

          <p className="desc">
            {" "}
            Ancien chargé d’enseignement auprès des Universités de Rouen et de
            Versailles, il assure régulièrement des formations et interventions
            sur les problématiques juridiques en lien avec la Santé et le
            Handicap. A ce titre, il est notamment intervenu en qualité de{" "}
            <span className="bold"> chercheur auprès de l’INSERM </span> dans le
            cadre d’un programme de recherche sur le handicap et le diagnostic
            prénatal où il a présenté la responsabilité des professionnels du
            diagnostic prénatal depuis la loi du 4 mars 2002. Il a également
            assuré des{" "}
            <span className="bold">
              {" "}
              formations auprès de membres de CHSCT ou de professionnels de
              santé
            </span>
            .
          </p>
        </div>

        <VisitCard />
      </div>
    </div>

    <div className="parcours ">
      <h2 className="title">
        <svg
          className="yellows"
          width="15"
          height="15"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="10" height="10" fill="#F2DC17" />
        </svg>
        DIPLÔMES{" "}
      </h2>
      <p> • Master II Règlement des Différends, Faculté de Droit de Rouen </p>
      <p> • Master II Droit de la Santé, Faculté de Droit de Poitiers </p>
      <p>
        {" "}
        • DU Actions et Contentieux de la Sécurité sociale, Faculté de Droit de
        Montpellier{" "}
      </p>
      <p> • DU éthiques, soins et santé, Faculté de Médecine de Rouen </p>
    </div>

    <p
      style={{
        width: `330px`,
        margin: `auto`,
      }}
    >
      <Link to="/domaines-d-expertise/" className="button bt2">
        {" "}
        DOMAINES D'EXPERTISE{" "}
        <svg
          className="yellowr"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
            fill="yellow"
          />
        </svg>{" "}
      </Link>
    </p>
  </Layout>
)

export default LeCabinet
