import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic17 from "../images/bannagg.png"

const Aggravation = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> AGGRAVATION </h1>
          <img src={pic17} className="picdefense" alt="fireSpot" />

          <p className="desc">
            {" "}
            Si vos séquelles se sont aggravées depuis votre indemnisation
            judiciaire ou amiable, vous avez la possibilité de faire rouvrir
            votre dossier pour être indemnisé de vos nouveaux préjudices.{" "}
          </p>

          <p className="desc">
            Il peut s’agir d’une aggravation « médicale » se manifestant par
            l’apparition de nouvelles lésions ou d’une aggravation des séquelles
            préexistantes.{" "}
          </p>

          <p className="desc">
            Il conviendra alors de solliciter auprès de votre médecin un
            certificat médical décrivant précisément la nature de l’aggravation
            et établissant le lien avec l’accident initial. Ce certificat est
            essentiel pour mettre en place une nouvelle évaluation par voie d’
            <span className="bold">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            amiable ou judiciaire.{" "}
          </p>

          <p className="desc">
            Outre l’aggravation médicale, la jurisprudence a reconnu, dans certains cas, une
            « aggravation situationnelle » en permettant à une victime dont l’état de santé ne
            s’est pas médicalement aggravé d’obtenir une nouvelle indemnisation en cas de

            2
            changement de situation postérieurement à l’indemnisation initiale (ex : besoin en
            aide humaine nouveau du fait de la naissance d’un enfant / nécessité d’un logement
adapté suite à un déménagement, etc.).{" "}
          </p>

          <p className="desc">
            Maître MAMERI vous assistera dans les démarches amiables ou judiciaires tendant à
            faire reconnaître votre situation d’aggravation. Il défendra vos droits de victime à
            chaque stade de la procédure y compris pendant l’expertise médicale.
          </p>

          <p className="desc">
            Il vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de
            recours et les professionnels qualifiés (ergothérapeute,
            architecte…) avec lesquels il travaille habituellement.
          </p>

          <p className="desc">
            Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/expertise-medicale-dommage-corporel/">
              {" "}
              L'expertise médicale
            </Link>
            link2=<Link to="/prejudices-reparables/">
          {" "}
              La réparation intégrale des préjudices
            </Link>
            />

      </div>
      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Aggravation
