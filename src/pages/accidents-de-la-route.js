import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic11 from "../images/bannar.png"

const Route = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS DE LA ROUTE </h1>

          <img src={pic11} className="picdefense" alt="fireSpot" />

          <p className="desc">
            {" "}
            Maître Quentin MAMERI assure la défense de vos intérêts dans toutes les procédures
tendant à obtenir réparation de vos préjudices consécutifs à un accident de la route
que vous soyez victime en qualité de piéton, conducteur ou passager transporté
d’une voiture, d’un camion, d’un deux-roues (vélo, moto, scooter,…) ou de tout autre
véhicule et ce quel que soit la nature et l’importance de votre handicap.
          </p>

          <p className="desc">
            Conscient qu’une victime est en situation de fragilité physique et
            psychologique à la suite d’un accident et qu’elle se retrouve seule
            face aux compagnies d’assurance, Maître Quentin MAMERI vous
            accompagnera dans un cadre amiable ou judiciaire afin de rétablir
            l’équilibre et de veiller à ce que vos intérêts et vos droits de
            victimes soient préservés et respectés.{" "}
          </p>

          <p className="desc">
            Les assureurs ont mis en place des conventions entre eux qui
            prévoient que l’indemnisation est gérée par le propre assureur de la
            victime qui se retournera ensuite contre l’assureur du
            tiers-responsable.{" "}
          </p>

          <p className="desc">
            {" "}
            L’objectif affiché de ce dispositif est d’accélérer l’indemnisation.
            Ce n’est en réalité pas dans l’intérêt des victimes mais des
            assureurs. Il contribue à diminuer la vigilance des victimes qui
            sont naturellement enclines à faire confiance à leur propre assureur
            pour gérer leur indemnisation et se voient ainsi exposées au risque
            de minimisation de leurs préjudices non seulement au stade de l'
            <span className="bold">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            amiable, confiée d'office au médecin de la compagnie d’assurance,
            mais également dans le cadre de l’offre d’indemnisation.{" "}
          </p>
          <p className="desc">
            En effet, vous pouvez légitimement craindre un conflit d’intérêt
            lorsque le médecin- expert est désigné par l’assureur payeur.
          </p>

          <p className="desc">
            Le rôle d’un avocat impliqué dans la défense des victimes est de
            vous accompagner à tous les stades de la procédure pour vérifier que
            vos droits soient respectés et vos préjudices correctement évalués
            et de manière impartiale.
          </p>
          <p className="desc">
            <b>Bon à savoir</b> – Si vous êtes victime d’un accident de la route sans
            tiers-responsable autrement dit si vous avez causé vous-même votre
            accident, vous ne pourrez être indemnisé que si vous bénéficiez
            d’une garantie du conducteur. Cette assurance est soit intégrée dans
            votre contrat d’assurance automobile (ce n’est pas systématique),
            soit vous en avez souscrite une de manière autonome. Le rôle d’un
            avocat est essentiel pour faire en sorte que vos préjudices soient
            correctement évalués, conformément aux stipulations contractuelles.
          </p>

          <p className="desc">
            Maître Quentin MAMERI intervient exclusivement pour les victimes
            directes ou leurs proches et vous garantira une indépendance face
            aux compagnies d’assurance. Il vous accompagnera à tous les stades
            de la procédure, de l’expertise médicale à la phase d’indemnisation
            et ce jusqu’au recouvrement effectif de votre indemnisation.
          </p>

          <p className="desc">
            Il vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de
            recours et les professionnels qualifiés (ergothérapeute,
            architecte…) avec lesquels il travaille habituellement.
          </p>

          <p className="desc">
            Si vous êtes victime d’un accident de la route, n’hésitez pas à
            contacter Maître Quentin MAMERI par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/prejudices-reparables/">
              {" "}
              La réparation intégrale des préjudices
            </Link>
            link2=<Link to="/expertise-medicale-dommage-corporel/">
          {" "}
              L'expertise médicale
            </Link>
            link3=<Link to="/prejudices-reparables/">
          {" "}
              Préjudices réparables
            </Link>
            link4=<Link to="/consolidation/"> Le consolidation</Link>
          />
        </div>

      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Route
