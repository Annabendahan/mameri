import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

import VisitCard from "../components/VisitCard"

import pic6 from "../images/P1011943.jpg"
import pic15 from "../images/malade.jpeg"
import pic16 from "../images/icone.jpeg"

const DomainesDexpertise = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> NOS DOMAINES D'EXPERTISES </h1>

          <div className="blue2">
            <Link to="/indemnisation-des-victimes/">
              <div className="indemn2 ">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <h3> DÉFENSE DES VICTIMES </h3>
              </div>
            </Link>
            <Link to="/defense-des-salaries/">
              <div className="salar2 ">
                <img src={pic6} className="picindex3" alt="fireSpot" />
                <h3> DÉFENSE DES SALARIÉS </h3>
              </div>
            </Link>
            <Link to="/defense-des-personnes-malades-handicap/">
              <div className="ass2">
                <img src={pic15} className="picindex3" alt="fireSpot" />
                <h3>
                  {" "}
                  DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP{" "}
                </h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default DomainesDexpertise
