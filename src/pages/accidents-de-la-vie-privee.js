import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic14 from "../images/avp.jpeg"

const Privée = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS DE LA VIE PRIVÉE</h1>
          <img src={pic14} className="picdefense" alt="fireSpot" />

          <p className="desc">
            {" "}
            En cas d’accidents de la vie privée, vous pouvez être indemnisé par
            votre compagnie d’assurance si vous avez souscrit une garantie dite
            des accidents de la vie.{" "}
          </p>

          <p className="desc">
            {" "}
            C’est le contrat que vous avez conclu avec votre compagnie
            d’assurance qui fixe le cas dans lesquels la garantie peut être
            mobilisée ainsi que les modalités d’indemnisation.{" "}
          </p>

          <p className="desc">
            {" "}
            Il suffit donc de se reporter aux conditions générales et
            particulières pour prendre connaissance des conditions de la
            garantie ainsi que de l’étendue des préjudices réparables.{" "}
          </p>

          <p className="desc">
            {" "}
            Il est important d’être assisté par un professionnel dans ces
            démarches que ce soit pendant la phase d’
            <span className="bold">
              <Link to="/reparation-dommage-corporel/#EM">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            que celle relative à la négociation financière de vos préjudices
            afin d’obtenir la réparation qui vous est due contractuellement.{" "}
          </p>

          <p className="desc">
            {" "}
            Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>

          <MotsClefs
            link1=<Link to="/reparation-dommage-corporel/#EM">
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

export default Privée
