import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

import pic2 from "../images/quentinmameripic.png"
import pic4 from "../images/la.jpg"

import pic15 from "../images/gh.jpeg"

const Conseils = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> CONSEILS PRATIQUES </h1>

          <div className="blue2">
            <Link to="/conseils-aux-victimes/">
              <div className="indemn2 ">
                <img src={pic15} className="picindex3" alt="fireSpot" />
                <h3> CONSEILS AUX VICTIMES</h3>
              </div>
            </Link>

            <Link to="/conseils-aux-salaries/">
              {" "}
              <div className="salar2 ">
                <img src={pic4} className="picindex3" alt="fireSpot" />
                <h3> CONSEILS AUX SALARIÉS </h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Conseils
