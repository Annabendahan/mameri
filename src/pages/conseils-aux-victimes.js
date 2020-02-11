import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic4 from "../images/la.jpg"

import pic15 from "../images/gh.jpeg"

class Conseils extends Component {
  render() {
    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              <h1> CONSEILS AUX VICTIMES </h1>
              <img src={pic15} className="picdefense" alt="fireSpot" />

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
                Ce dossier médical est essentiel quelle que soit la nature de
                l’accident dont vous avez été victime pour déterminer l’étendue
                de vos lésions et séquelles ce qui permettra ainsi de se
                prononcer sur vos préjudices sur le plan médical qui est le
                préalable à l’évaluation de votre indemnisation.{" "}
              </p>

              <p className="desc">
                En matière de responsabilité médicale, hospitalière ou même
                dentaire, le dossier médical permet au-delà de l’évaluation du
                préjudice de déterminer si les conditions de la responsabilité
                du professionnel sont médicalement réunies. Cela permettra
                notamment de se prononcer sur le fait de savoir si ces derniers
                ont commis une faute médicale de diagnostic ou de soins ou s’il
                s’agit d’un accident médical non fautif ouvrant droit à une
                indemnisation par la solidarité nationale. Le dossier médical
                sera également indispensable pour se prononcer sur le caractère
                nosocomiale d’une infection que vous auriez contractée.{" "}
              </p>

              <p className="desc">
                Depuis la loi du 4 mars 2002, le patient a un droit d’accès
                direct aux éléments médicaux formalisés qui le concernent. Il
                n’est donc pas obligé de le solliciter par l’intermédiaire de
                son médecin traitant.{" "}
              </p>

              <p className="desc">
                {" "}
                <span className="bold">
                  {" "}
                  <Link to="/reparation-dommage-corporel/">
                    {" "}
                    En savoir plus sur le dossier médical{" "}
                    <svg
                      className="arrow"
                      width="19"
                      height="9"
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
                <span className="bold">
                  {" "}
                  <Link to="/modeles-et-formulaires/">
                    {" "}
                    Accéder aux modèles de demande de dossier médical{" "}
                    <svg
                      className="arrow"
                      width="19"
                      height="9"
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
                aux documents que vous serez amenés à signer ou à communiquer
                que ce soit au(x) personne(s) impliqué(es) dans l’accident ou
                avec l’assureur, même s’il s’agit de votre propre compagnie
                d’assurance !
              </p>

              <p className="desc">
                Le Cabinet vous conseille de ne pas signer un document relatif à
                votre indemnisation sans l’avoir lu préalablement et sans
                l’avoir fait vérifier par un avocat et particulièrement s’il
                s’agit d’une offre transactionnelle d’indemnisation.
              </p>

              <p className="desc">
                N’oubliez pas que la signature d’un protocole d’indemnisation
                définitif avec l’assureur met fin au litige et vous empêche de
                faire un recours même dans le cas où vous auriez été
                sous-indemnisé, hormis l’hypothèse de l’
                <span className="bold">
                  <Link to="/aggravation" target="blank">
                    aggravation
                  </Link>
                </span>
                .{" "}
              </p>

              <p className="desc">
                De manière générale, il est recommandé de soumettre
                préalablement les offres d’indemnisation à un avocat de victime
                afin qu’il puisse vérifier que vos droits ont été sauvegardés et
                que vos préjudices n’ont pas été sous-évalués.{" "}
              </p>

              <p className="desc">
                N’hésitez pas à contacter Maître Quentin MAMERI qui vous
                accompagnera à chaque stade de la procédure d’indemnisation et
                mettra tout en œuvre afin de défendre vos droits de victime et
                assurer la réparation intégrale de vos préjudices.{" "}
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
                CONSERVER LES DOCUMENTS MEDICAUX ET ADMINISTRATIFS RELATIFS À
                VOTRE AFFAIRE{" "}
              </h2>

              <p className="desc">
                {" "}
                Les pièces relatives à votre accident ou votre agression sont
                essentielles pour constituer un dossier solide en vue de la
                réparation intégrale de vos préjudices corporels. <br /> <br />{" "}
                Ces pièces seront importantes notamment lors de l’expertise
                médicale. Quelle que soit la nature de l’accident, ces pièces
                permettront à l’expert d’évaluer sur le plan médical les
                séquelles et lésions consécutives à l’accident ou à l’agression.{" "}
                <br /> <br />
                Si votre affaire concerne une situation de responsabilité
                médicale, elles seront indispensables pour que l’Expert puisse
                se prononcer sur les conditions de la responsabilité du
                professionnel ou de l’établissement de santé concerné et
                notamment sur le fait de savoir si ce dernier a commis une faute
                médicale ou s’il s’agit d’un accident médical non fautif ouvrant
                droit à une indemnisation par la solidarité nationale.
              </p>

              <p className="desc">
                {" "}
                Quel que soit l’accident ou l’agression dont vous avez été
                victime, il convient donc préalablement à toute démarche
                d’indemnisation de solliciter une copie de votre dossier médical{" "}
              </p>
              <p className="desc">
                {" "}
                <span className="bold">
                  {" "}
                  <Link to="/modeles-et-formulaires/">
                    {" "}
                    En savoir plus sur l'accès au dossier médical{" "}
                    <svg
                      className="arrow"
                      width="19"
                      height="9"
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
                De manière générale, vous devez conserver toutes les pièces
                relatives à votre accident idéalement classées de manière
                chronologique que ce soit les pièces médicales (certificat
                médical initial, prescriptions médicales, arrêt de travail) et /
                ou administratives (courriers échangés avec l’assureur, échanges
                avec la sécurité sociale…).{" "}
              </p>

              <p className="desc">
                Vous ne devez jamais remettre les pièces originales à l’assureur
                mais lui adresser seulement une copie des pièces médicales
                (courriers, ordonnances, clichés et compte-rendu des imageries
                réalisées : radiologie, IRM, etc.).{" "}
              </p>

              <p className="desc">
                Enfin, n’hésitez pas à prendre périodiquement des photographies
                de vos lésions ce qui pourra être précieux notamment pour
                démontrer notamment l’étendue des répercussions sur le plan
                esthétique.
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
                NE JAMAIS SE RENDRE À UNE EXPERTISE MÉDICALE SANS ÊTRE ASSISTÉ
                PAR UN AVOCAT{" "}
              </h2>

              <p className="desc">
                {" "}
                Nombre de victimes se présentent seules à l’expertise amiable
                médicale organisée par la compagnie d’assurance. Que ce soit le
                médecin-conseil de votre compagnie d’assurance ou celui de la
                compagnie adverse, n’oubliez jamais que ce dernier est mandaté
                par l’assureur qui le rémunère. Les médecin-conseils des
                compagnies d’assurance ne sont donc pas impartiaux. Ils ne
                défendent pas vos intérêts mais ceux de la compagnie pour
                laquelle ils travaillent.{" "}
              </p>

              <p className="desc">
                {" "}
                Dans ces conditions, il est important pour vous, victime, d’être
                accompagnée par un avocat et/ ou un médecin-conseil de victime
                lors de cette expertise afin que vos droits puissent être
                défendus et vos préjudices intégralement évalués.{" "}
              </p>

              <p className="desc">
                Il est important d’être assisté même lorsque l’expertise est
                organisée dans un cadre judiciaire d’une part pour pouvoir
                apporter la contradiction à l’expert et défendre vos intérêts de
                victime mais également pour que vous ne soyez pas seul face à la
                compagnie d’assurance qui n’hésite pas à mandater ses avocats et
                médecins- conseils pour défendre ses intérêts lors de
                l’expertise.
              </p>
              <p className="desc">
                Maître Quentin MAMERI est toujours présent aux expertises
                médicales aux côtés des victimes.
              </p>
              <p className="desc">
                Si vous êtes victime d’un dommage corporel, n’hésitez pas à
                contacter Maître Quentin MAMERI même après une expertise amiable
                et ce afin que vous puissiez faire un point sur votre situation
                et que soit mise en œuvre la stratégie la plus adaptée pour
                assurer la réparation intégrale de vos préjudices.
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
