import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic4 from "../images/t.png"

import pic15 from "../images/gh.jpeg"

class ConseilsSala extends Component {
  render() {
    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              <h1> CONSEILS AUX SALARIÉS </h1>
              <img src={pic4} className="picdefense" alt="fireSpot" />

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
                SOLLICITER LA COMMUNICATION DE VOTRE DOSSIER MÉDICAL AUPRÈS DE
                LA MÉDECINE DU TRAVAIL{" "}
              </h2>

              <p className="desc">
                {" "}
                Vous avez été amené à rencontrer le médecin du travail dans le
                cadre d’une visite à votre initiative ou celle de votre
                employeur. Les constatations et préconisations du médecin du
                travail peuvent s’avérer essentielles.{" "}
              </p>

              <p className="desc">
                Elles peuvent par exemple participer à la démonstration d’une
                situation de harcèlement moral ou bien encore que votre
                employeur n’a pas aménagé votre poste en lien avec votre
                handicap ou votre état de santé. <br />
                <br /> Sachez que vous bénéficiez d’un droit d’obtenir
                directement la communication de votre dossier médical auprès de
                la médecine du travail. La demande se fait par courrier
                recommandé avec accusé de réception. Vous devez joindre à ce
                courrier une copie recto/verso de votre pièce d’identité.{" "}
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
                N’hésitez pas à contacter Maître Quentin MAMERI qui pourra vous
                accompagner dans vos démarches.{" "}
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
                NE JAMAIS SIGNER UNE RUPTURE CONVENTIONNELLE SANS AVOIR CONSULTÉ
                PRÉALABLEMENT UN AVOCAT{" "}
              </h2>

              <p className="desc">
                Avant de vous engager dans une telle démarche, il est primordial
                de prendre contact préalablement avec un avocat.{" "}
              </p>

              <p className="desc">
                Il pourra vous conseiller sur l’opportunité de ce mode de
                rupture au regard de votre situation. <br /> <br /> En effet, il
                arrive souvent qu’un salarié initie ou accepte une rupture
                conventionnelle suite à des pressions de l’employeur, des faits
                de harcèlement ou plus généralement de manquements graves commis
                par ce dernier dans la relation de travail. Dans ce cas,
                d’autres modes de ruptures plus appropriés pourraient être
                envisagés comme par exemple la{" "}
                <span className="bold">
                  <Link to="/droit-du-travail">prise d’acte de rupture</Link>{" "}
                </span>
                ou la{" "}
                <span className="bold">
                  <Link to="/droit-du-travail/#RJ">
                    {" "}
                    résiliation judiciaire
                  </Link>
                </span>{" "}
                du contrat de travail.{" "}
              </p>

              <p className="desc">
                {" "}
                Une analyse de votre dossier permettra de vous conseiller
                utilement sur la meilleure stratégie envisageable au regard de
                votre situation. Me Quentin MAMERI pourra vous accompagner dans
                la démarche tendant à obtenir une rupture conventionnelle mais
                également pour négocier au mieux vos indemnités de départ.{" "}
                <br />
                <br /> N’hésitez pas à contacter Maître Quentin MAMERI qui vous
                conseillera utilement et vous accompagnera dans les démarches
                pour défendre au mieux vos intérêts.
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
                NE DÉMISSIONNEZ PAS SANS AVOIR SOLLICITÉ PRÉALABLEMENT L'AVIS
                D'UN AVOCAT{" "}
              </h2>

              <p className="desc">
                Nombre de salariés démissionnent de leur emploi. Or, ce n’est
                pas toujours un choix libre et éclairé. Cette démission peut
                faire suite à des manquements de l’employeur: pression,
                dégradation importante des conditions de travail, manquements
                salariaux, harcèlement, etc.{" "}
              </p>

              <p className="desc">
                {" "}
                La démission n’est pas sans conséquence. En cas de démission,
                vous n’aurez le droit à aucune indemnité de départ et vous ne
                pourrez pas bénéficier du versement des allocations chômage. La
                démission vous privera, en outre, du bénéfice de la portabilité
                de vos contrats d’assurance mutuelle et prévoyance.{" "}
              </p>

              <p className="desc">
                {" "}
                Avant de vous engager dans ce choix, il est donc important de
                prendre conseil auprès d’un avocat pour être conseillé et
                accompagné dans vos démarches amiables ou judiciaires. En effet,
                le droit du travail permet, sous certaines conditions, au
                salarié de prendre l’initiative d’une rupture de son contrat de
                travail aux torts de l’employeur (
                <span className="bold">
                  <Link to="/droit-du-travail">
                    Prise d’acte de rupture du contrat
                  </Link>{" "}
                </span>
                ou{" "}
                <span className="bold">
                  <Link to="/droit-du-travail/#RJ">
                    {" "}
                    résiliation judiciaire
                  </Link>
                </span>
                ).{" "}
              </p>

              <p className="desc">
                N’hésitez pas à contacter Maître Quentin MAMERI qui vous
                conseillera utilement sur les modes de rupture appropriés au
                regard de votre situation et vous présentera l’ensemble des
                options procédurales pour défendre au mieux vos intérêts.
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
                ATTENTION AUX DÉLAIS !{" "}
              </h2>

              <p className="desc">
                {" "}
                Vous devez être vigilant sur les délais qui sont très nombreux
                en droit du travail et qui ont, pour beaucoup, été réduits
                depuis les dernières réformes.
              </p>

              <p className="desc">
                {" "}
                Ainsi, voici quelques exemples de délai de prescription :
              </p>

              <p className="desc">
                {" "}
                - Toute action portant sur l'exécution du contrat de travail :
                délai de 2 ans (Article L1471-1 du Code du travail)
              </p>
              <p className="desc">
                {" "}
                - Toute action portant sur la rupture du contrat de travail :
                délai de 12 mois (Article L1471-1 du Code du travail)
              </p>
              <p className="desc">
                {" "}
                - Contestation d’un solde de tout compte : délai de 6 mois
                (Article L1234-20 du Code du travail)
              </p>
              <p className="desc">
                {" "}
                À noter également que depuis la dernière réforme, le salarié
                licencié dispose d’un délai de  15 jours suivant la date de
                réception de la lettre de licenciement pour demander à
                l'employeur des précisions sur les motifs énoncés dans la
                lettre. Le salarié effectue sa demande par lettre recommandée
                avec avis de réception (LRAR) ou remise contre récépissé.
              </p>

              <p className="desc">
                {" "}
                Si vous devez contester une décision de l’employeur ou de la
                médecine du travail ou engager un recours en droit du travail,
                n’hésitez pas à contacter rapidement Maître Quentin MAMERI qui
                vous conseillera utilement et vous accompagnera dans les
                démarches pour défendre au mieux vos intérêts.
              </p>
            </div>

            <VisitCard />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ConseilsSala
