import React from "react"
import "../components/defense.css"
import "../components/liens.css"
import { Link } from "gatsby"
import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic3 from "../images/work2.png"

import pic4 from "../images/modeles-form.jpeg"
import pic5 from "../images/liens-utiles.jpeg"
import pic6 from "../images/conseils-pratiques.png"

const LiensUtiles = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> NOS INFOS ET CONSEILS PRATIQUES </h1>

          <div className="blue2">
            <Link to="/conseils-pratiques/">
              <div className="indemn2 ">
                <img src={pic6} className="picindex3" alt="fireSpot" />
                <h3> CONSEILS PRATIQUES</h3>
              </div>
            </Link>

            <Link to="/infos-pratiques/">
              <div className="salar2 ">
                <img src={pic3} className="picindex3" alt="fireSpot" />
                <h3> INFOS PRATIQUES </h3>
              </div>
            </Link>
            <Link to="/modeles-et-formulaires/">
              <div className="ass2 ">
                <img src={pic4} className="picindex3" alt="fireSpot" />
                <h3> MODELES ET FORMULAIRES </h3>
              </div>
            </Link>

            <Link to="/liens-utiles/">
              <div className="ass2 ">
                <img src={pic5} className="picindex3" alt="fireSpot" />
                <h3> LIENS UTILES </h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default LiensUtiles
