import React from "react"
import "../components/defense.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic11 from "../images/ar.jpeg"

const Route = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS DE LA ROUTE </h1>

          <img src={pic11} className="picdefense" alt="fireSpot" />

          <p className="desc">
            {" "}
            Que vous soyez victime d’un accident en qualité de piéton,
            conducteur ou passager transporté d’une voiture, d’un camion, d’un
            deux-roues (vélo, moto, scooter …) ou de toute autre véhicule,
            Maître MAMERI vous accompagnera à tous les stades de la procédure
            pour veiller au respect de vos droits de victimes et mettra tout en
            œuvre pour vous permettre d’obtenir la{" "}
            <span className="bold">
              {" "}
              <Link to="/reparation-dommage-corporel/#RIP">
                {" "}
                réparation intégrale
              </Link>
            </span>{" "}
            de vos préjudices.
          </p>

          <p className="desc">
            Conscient qu’une victime est en situation de fragilité physique et
            psychologique à la suite d’un accident et qu’elle se retrouve seule
            à la merci des compagnies d’assurance, Maître Quentin MAMERI vous
            accompagnera dans un cadre amiable ou judiciaire afin de rétablir
            l’équilibre et de veiller à ce que vos intérêts et vos droits de
            victimes soient préservés et respectés.{" "}
          </p>

          <p className="desc">
            {" "}
            <i>
              {" "}
              Restez toujours vigilant face aux compagnies d’assurance. Elles ne
              défendent pas l’intérêt des victimes !{" "}
            </i>{" "}
          </p>

          <p className="desc">
            Les assureurs ont mis en place des conventions entre assureurs qui
            prévoient que l’indemnisation est gérée par le propre assureur de la
            victime qui se retournera ensuite contre l’assureur du
            tiers-responsable.{" "}
          </p>

          <p className="desc">
            {" "}
            L’objectif affiché de ce dispositif est d’accélérer l’indemnisation
            mais n’est en réalité pas dans l’intérêt des victimes mais des
            assureurs. Il contribue à diminuer la vigilance des victimes qui
            sont naturellement enclines à faire confiance à leur propre assureur
            pour gérer leur indemnisation et se voit ainsi exposée au risque de
            minimisation de son préjudice tant dans le cadre de l’
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#EM">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            amiable, confiée systématiquement au médecin de la compagnie
            d’assurance, que lors de la fixation du montant de son
            indemnisation.{" "}
          </p>

          <p className="desc">
            Maître Quentin MAMERI intervient uniquement pour les victimes de
            dommage corporel que ce soit les victimes directes ou leurs proches
            et vous garantira une indépendance face à la compagnie d’assurance.
            Il vous accompagnera à tous les stades de la procédure, de
            l’expertise médicale à la phase d’indemnisation et ce jusqu’au
            recouvrement effectif de votre indemnisation.{" "}
          </p>

          <p className="desc">
            Il vous apportera non seulement un soutien juridique et technique
            mais également un soutien humain. Il vous fera bénéficier de son
            réseau de médecin-conseil et de professionnels qualifiés
            (ergothérapeute, architecte …).{" "}
          </p>

          <p className="desc">
            Vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/reparation-dommage-corporel/#RIP">
              {" "}
              Réparation intégrale
            </Link>
            link2=<Link to="/reparation-dommage-corporel/#EM">
              {" "}
              Expertise médicale
            </Link>
          />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Route
