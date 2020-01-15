import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

class Conseils extends Component {
  render() {
    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              <h1> CONSEILS AUX VICTIMES </h1>

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
                SOLLICITER LA COMMUNICATION DE VOTRE ENTIER DOSSIER MEDICAL{" "}
              </h2>

              <p className="desc">
                {" "}
                Avant toute procédure, il est essentiel pour une victime
                d’obtenir la communication de son dossier médical auprès de
                chaque professionnel ou établissement de santé qui a assuré sa
                prise en charge.
              </p>

              <p className="desc">
                {" "}
                Ce dossier médical est essentiel quel que soit la nature de
                l’accident dont vous avez été victime pour déterminer l’étendue
                de vos lésions et séquelles et pouvoir ainsi se prononcer sur
                vos préjudices sur le plan médical.{" "}
              </p>

              <p className="desc">
                En matière de responsabilité médicale, hospitalière ou même
                dentaire, le dossier médical permet au-delà de l’évaluation du
                préjudice de déterminer si les conditions de la responsabilité
                du professionnel sont médicalement réunies.{" "}
              </p>

              <p className="desc">
                Depuis la loi du 4 mars 2002, le patient a un droit d’accès
                direct aux éléments médicaux formalisés qui le concerne. Il
                n’est donc pas obligé de le solliciter par l’intermédiaire de
                son médecin traitant.{" "}
              </p>

              <p className="desc">
                {" "}
                •
                <span className="bold">
                  {" "}
                  <Link to="/reparation-dommage-corporel/">
                    {" "}
                    En savoir plus sur le dossier médical{" "}
                    <svg
                      className="arrow"
                      width="29"
                      height="16"
                      viewBox="0 0 29 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0L0 9Z"
                        fill="#063D6C"
                      />
                    </svg>
                  </Link>{" "}
                </span>{" "}
              </p>

              <p className="desc">
                {" "}
                •{" "}
                <span className="bold">
                  {" "}
                  <Link to="/modeles-et-formulaires/">
                    {" "}
                    Accéder aux modèles de demande de dossier médical{" "}
                    <svg
                      className="arrow"
                      width="29"
                      height="16"
                      viewBox="0 0 29 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0L0 9Z"
                        fill="#063D6C"
                      />
                    </svg>
                  </Link>{" "}
                </span>{" "}
              </p>

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
                NE JAMAIS RIEN SIGNER SANS L'AVOIR FAIT VÉRIFIER PAR UN AVOCAT{" "}
              </h2>

              <p className="desc">
                {" "}
                Dès la survenance de l’accident, vous devez être vigilant quant
                au document que vous serez amené à signer que ce soit avec les
                personnes impliquées dans l’accident ou avec l’assureur.
              </p>

              <p className="desc">
                Ne jamais signer de documents sans les avoir lu préalablement et
                fait vérifié par un avocat.
              </p>

              <p className="desc">
                N’oubliez pas que la signature d’un protocole d’indemnisation
                définitif avec l’assureur met fin au litige et vous empêche de
                faire un recours même dans le cas où vous auriez été mal
                indemnisé, hormis l’hypothèse de l’aggravation.{" "}
              </p>

              <p className="desc">
                Enfin, pensez à conserver une copie des documents que vous avez
                adressés à l’assureur et notamment des courriers que vous lui
                adressez.{" "}
              </p>

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
                CONSERVER LES DOCUMENTS MEDICAUX ET ADMINITRATIFS RELATIFS À
                VOTRE AFFAIRE{" "}
              </h2>

              <p className="desc">
                {" "}
                Les pièces relatives à votre accident sont essentielles pour
                constituer votre dossier en vue de la réparation de vos
                préjudices. Ces pièces seront essentielles lors de l’expertise
                médicale qui sera mis en œuvre pour se prononcer sur les
                conditions de la responsabilité du professionnel ou de
                l’établissement et dans tous les cas sur les séquelles et
                lésions consécutives à l’accident ou à l’agression.
              </p>

              <p className="desc">
                {" "}
                Il convient préalablement à toute procédure de solliciter une
                copie de votre dossier médical (en savoir plus sur l’accès au
                dossier médical).{" "}
              </p>

              <p className="desc">
                Il convient également de conserver toutes les pièces relatifs à
                votre accident idéalement classés de manière chronologique que
                ce soit les pièces médicales (certificat médical initiales,
                prescriptions médicales, arrêt de travail) ou administratives
                (courriers échangés avec l’assureur, avec la sécurité sociale
                ….).{" "}
              </p>

              <p className="desc">
                Vous devez conserver un double de toutes les pièces médicales
                (courriers, ordonnances, clichés et compte-rendu des imageries
                réalisées (radiologie, IRM, …).et ne jamais remettre les
                originaux à l’assureur.{" "}
              </p>

              <p className="desc">
                Enfin, vous pouvez prendre des photographies périodiques de vos
                lésions ce qui pourra être précieux notamment pour démontrer
                notamment l’importance des répercussions sur le plan esthétique.
              </p>

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
                NE JAMAIS VOUS RENDRE A UNE EXPERTISE MEDICALE SANS ETRE ASSISTÉ
                PAR UN AVOCAT{" "}
              </h2>

              <p className="desc">
                {" "}
                Nombre de victimes se présentent seule à l’expertise amiable
                médicale organisée par la compagnie d’assurance. Que ce soit le
                médecin-conseil de votre compagnie d’assurance ou de la
                compagnie adverse, n’oubliez jamais que ce médecin est mandaté
                par la compagnie d’assurance qui le rémunère. Le médecin-conseil
                de compagnie d’assurance n’est donc pas impartial. Il ne défend
                pas vos intérêts mais ceux de la compagnie pour laquelle il
                travaille..{" "}
              </p>

              <p className="desc">
                {" "}
                Dans ces conditions, il est important pour vous victime d’être
                accompagné par un avocat lors de cette expertise afin que vos
                droits puissent être défendus et que vous puissiez être
                conseillé utilement.{" "}
              </p>

              <p className="desc">
                Il est important d’être assisté même lorsque l’expertise est
                organisée dans un cadre judiciaire. En effet, dans ce cas,
                l’ensemble des mis en cause sont convoqués et pourront être
                assisté d’un avocat et d’un médecin-conseil. Le rôle de l’avocat
                est de vous conseiller et de défendre vos droits de victime tout
                au long de l’expertise. Son assistance est primordiale tant en
                terme de soutien humain que sur le plan juridique.
              </p>
            </div>

            <VisitCard />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Conseils
