import React from "react"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic15 from "../images/bannsanc.png"

const Sanction = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> SANCTIONS DISCIPLINAIRES</h1>
          <img src={pic15} className="picdefense" alt="fireSpot" />

          <p className="desc">
            {" "}
            Vous avez été sanctionné disciplinairement par votre employeur et
            vous contestez la sanction dans son principe ou son étendue
            (avertissement, blâme, mise à pied, etc.).{" "}
          </p>

          <p className="desc">
            Maître Quentin MAMERI vous conseillera utilement et mettra en œuvre
            la procédure la plus adaptée pour défendre vos droits de salarié.
          </p>

          <p className="desc">
            Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Sanction
