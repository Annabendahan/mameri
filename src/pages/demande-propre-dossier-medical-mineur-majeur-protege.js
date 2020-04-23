import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Dpd = () => (
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
            LA DEMANDE DE SON PROPRE DOSSIER MÉDICAL OU EN TANT QUE REPRÉSENTANT
            LÉGAL D’UN MINEUR OU D’UN MAJEUR PROTÉGÉ
          </h2>

          <p className="desc">
            Pour obtenir la communication de votre propre dossier médical, vous
            devez adresser votre demande par courrier recommandé avec accusé de
            réception à l’attention du Directeur si le dossier médical est
            détenu par un établissement de santé ou directement auprès du
            professionnel de santé concerné dans le cadre d’une prise en charge
            libérale.
          </p>

          <p className="desc">
            {" "}
            Afin que le traitement de votre demande soit facilité, il vous est
            conseillé de bien identifier dans votre courrier les périodes
            d’hospitalisation ou de consultation ainsi que les services dans
            lesquels vous avez été pris en charge ou hospitalisé et dont vous
            souhaitez obtenir la copie du dossier.
          </p>

          <p className="desc">
            {" "}
            En aucun cas, vous n’avez l’obligation de motiver votre demande.
            Vous devez impérativement accompagner votre courrier de demande de
            la copie recto-verso de votre pièce d’identité. Si vous en faites la
            demande en qualité de représentant légal d’un mineur ou d’un majeur
            sous tutelle, vous devrez joindre également copie du livret de
            famille ou de la décision judiciaire vous désignant en qualité de
            tuteur.
          </p>

          <p className="desc">
            {" "}
            Vous avez la possibilité de consulter le dossier sur place ou d’en
            demander une copie. Dans ce cas, les frais de reproduction et
            d’envoi pourront être mis à votre charge.
          </p>

          <p className="desc">
            {" "}
            Bon à savoir - S’agissant des établissements hospitaliers, le coût
            de la reproduction est encadré et ne peut être supérieur à 0,18
            euros par page de format A4 en noir et blanc.
          </p>

          <p className="desc">
            {" "}
            Vous pouvez accéder à l’arrêté du 1er octobre 2001fixant la
            tarification maximale des frais de reproduction au lien suivant :
             https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000772503
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez obtenir l’ensemble des pièces de votre dossier
            médical pour retracer la totalité de la prise en charge, Maître
            Quentin MAMERI vous conseille de préciser dans votre courrier que
            vous souhaitez obtenir la communication de votre entier dossier
            d’hospitalisation incluant le dossier médical ainsi que le dossier
            infirmier et aide-soignant. Cela vous permettra d’avoir accès non
            seulement aux pièces médicales mais également aux transmissions des
            professionnels soignants.
          </p>

          <p className="desc">
            {" "}
            Me Quentin MAMERI met à votre disposition gratuitement sur son site
            internet des modèles de demande de dossier médical à adapter à votre
            cas particulier{" "}
            <span className="bold underlined">
              <Link to="/modeles-et-formulaires/">
                (accéder aux modèles de courrier).
              </Link>
            </span>
          </p>

          <p className="desc">
            {" "}
            Quelle que soit votre situation, Maître MAMERI pourra vous
            conseiller utilement et vous accompagner dans les démarches amiables
            ou judiciaires pour obtenir communication de votre dossier médical.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Dpd
