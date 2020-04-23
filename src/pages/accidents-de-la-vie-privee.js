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
            votre compagnie d’assurance si vous avez souscrit un contrat dit
            « garantie des accidents de la vie » (GAV).{" "}
          </p>

          <p className="desc">
            {" "}
            Il faut se reporter aux conditions générales et particulières de
            votre contrat pour prendre connaissance de l’objet et des conditions
            de la garantie ainsi que de l’étendue des préjudices réparables.{" "}
          </p>

          <p className="desc">
            {" "}
            Il est important d’être assisté par un professionnel non seulement
            en cas de litiges avec la compagnie sur la mise en œuvre de la
            garantie mais également lorsque celle-ci est mobilisée. Maître
            MAMERI défendra vos intérêts pendant la phase d’
            <span className="bold">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>
            </span>
            .{" "}
          </p>

          <p className="desc">
            {" "}
            Il est important d’être assisté par un professionnel dans ces
            démarches que ce soit pendant la phase d’
            <span className="bold">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>{" "}
            </span>{" "}
            que celle relative à la négociation financière de vos préjudices
            afin d’obtenir la réparation qui vous est due contractuellement.{" "}
          </p>

          <p className="desc">
            {" "}
            Il vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de
            recours les professionnels qualifiés (ergothérapeute, architecte…)
            avec lesquels il travaille habituellement.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez mobiliser un tel contrat ou si vous êtes en litige
            avec votre assureur sur l’exécution de cette garantie, n’hésitez pas
            à contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
          </p>

          <MotsClefs
            link1=<Link to="/expertise-medicale-dommage-corporel/">
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
