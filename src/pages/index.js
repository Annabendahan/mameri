import "babel-polyfill"
import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Actgrid from "../components/actgrid"

import SEO from "../components/seo"

import VisitCard from "../components/VisitCard"
import pic1 from "../images/P1011989.jpeg"

import pic6 from "../images/P1011943.jpg"
import pic15 from "../images/malade.jpeg"
import pic16 from "../images/icone.jpeg"
import pic2 from "../images/mameriMain.png"

class IndexPage extends Component {
  render() {
    console.log(this)
    return (
      <Layout>
        <SEO title="Accueil" />
        {/* <img src={pic1} className="banner" alt="fireSpot" /> */}
        <img src={pic2} className="banner2" alt="fireSpot" />

        <div
          className="home-div"
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="transparent">
            <h1> QUENTIN MAMERI, AVOCAT AU BARREAU DE PARIS </h1>{" "}
          </div>
          <div className="box">
            <div className="leftbox">
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
                DÉFENSE DES VICTIMES, DES SALARIÉS ET DES MALADES{" "}
              </h2>

              <p className="desc-r">
                {" "}
                Maître Quentin MAMERI est Avocat au Barreau de Paris.{" "}
              </p>

              <p className="desc-r">
                {" "}
                Il assure la{" "}
                <b>
                  défense des victimes d’accidents et d’infractions pénales{" "}
                </b>{" "}
                pour obtenir réparation de leur dommage corporel, la{" "}
                <b> défense des salariés</b> dans le cadre de l’exécution ou la
                rupture de la relation de travail ainsi que la{" "}
                <b>
                  {" "}
                  défense des personnes malades et en situation de handicap{" "}
                </b>
                dans leurs litiges avec la sécurité sociale, la MDPH ou les
                compagnies d’assurance.{" "}
              </p>

              <p className="desc-r">
                {" "}
                Maître Quentin MAMERI intervient devant toutes les juridictions
                et sur l’ensemble du territoire français y compris l'Outre-Mer.{" "}
                <br />
                <br /> Maître MAMERI reçoit uniquement sur rendez-vous. Si vous
                n’êtes pas en capacité de vous déplacer, Maître MAMERI pourra se
                rendre à votre domicile ou dans le lieu où vous êtes hospitalisé
                (établissement de santé, centre de rééducation…).{" "}
              </p>
            </div>
            <VisitCard />
          </div>
          <div className="blue">
            <div className="indemn">
              <Link to="indemnisation-des-victimes">
                <img src={pic16} className="picindex" alt="fireSpot" />
                <h3> DÉFENSE DES VICTIMES </h3>
                <p>
                  Vous êtes victime d’un dommage corporel à la suite d’un
                  accident ou d’une infraction pénale. Maître Quentin MAMERI
                  intervient exclusivement pour les victimes et leurs proches et
                  assurera votre défense contre le responsable, son assureur ou
                  les fonds de garantie, par la voie amiable ou judiciaire, et
                  mettra tout en œuvre pour vous permettre d’obtenir la
                  réparation intégrale de vos préjudices.
                </p>

                <div className="lire">
                  {" "}
                  <p>
                    {" "}
                    En savoir plus{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </p>{" "}
                </div>
              </Link>
            </div>
            <div className="salar">
              {" "}
              <Link to="defense-des-salaries">
                <img src={pic6} className="picindex" alt="fireSpot" />
                <h3> DÉFENSE DES SALARIÉS </h3>
                <p>
                  Vous êtes en litige avec votre employeur ? Vous venez d’être
                  licencié et vous en contestez les motifs ? Vous envisagez une
                  rupture amiable de votre contrat de travail ? Votre employeur
                  a commis des manquements graves dans l’exécution de de votre
                  contrat de travail ? Vous souhaitez rompre votre contrat aux
                  torts de l’employeur ? Maître Quentin MAMERI vous conseillera
                  utilement et assurera la défense de vos intérêts tant par la
                  voie amiable que par la voie judiciaire.
                </p>
                <div className="lire">
                  {" "}
                  <p>
                    {" "}
                    En savoir plus{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </p>{" "}
                </div>
              </Link>
            </div>
            <div className="ass">
              <Link to="defense-des-personnes-malades-handicap">
                <img src={pic15} className="picindex2" alt="fireSpot" />
                <h3>
                  {" "}
                  DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP
                </h3>
                <p>
                  Vous êtes en litige avec la Sécurité sociale, la Maison
                  Départementale des Personnes handicapées (MDPH) ou votre
                  compagnie d’assurance ? Maître Quentin MAMERI assurera la
                  défense de vos intérêts à tous les stades de la procédure y
                  compris pendant les éventuelles expertises médicales.
                </p>
                <div className="lire">
                  {" "}
                  <p>
                    {" "}
                    En savoir plus{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </p>{" "}
                </div>
              </Link>
            </div>
          </div>

          <div className="actualites">
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
              DERNIÈRES ACTUALITÉS{" "}
            </h2>
            <div></div>

            <Actgrid />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query homActQuery {
    allWordpressPost(
      filter: { categories: { eq: 2 } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          categories
          tags
          content
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
