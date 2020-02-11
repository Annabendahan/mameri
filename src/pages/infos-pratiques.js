import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Infos = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> INFOS PRATIQUES </h1>

          <div className="blue2">
            <Link to="/reparation-dommage-corporel/">
              <div className="indemn2 ">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <h3> RÉPARATION DU DOMMAGE CORPOREL</h3>
              </div>
            </Link>

            <Link to="/droit-du-travail/">
              {" "}
              <div className="salar2 ">
                <img src={pic3} className="picindex3" alt="fireSpot" />
                <h3> DROIT DU TRAVAIL </h3>
              </div>
            </Link>

            <Link to="/protection-sociale/">
              {" "}
              <div className="salar2 ">
                <img src={pic4} className="picindex3" alt="fireSpot" />
                <h3> PROTECTION SOCIALE </h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Infos
