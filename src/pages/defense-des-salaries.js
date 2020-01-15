import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import pic10 from "../images/te.jpeg"
import pic11 from "../images/inap.png"
import pic12 from "../images/hm.jpeg"
import pic13 from "../images/rc.jpeg"
import pic14 from "../images/la.jpg"
import pic15 from "../images/sd.jpeg"

const Salaries = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> DÉFENSE DES SALARIÉS </h1>
          <p className="desc">
            {" "}
            Vous avez un litige avec votre employeur, l’employeur a commis des
            manquements graves dans l’exécution de votre contrat de travail,
            vous venez d’être licencié, vous souhaitez rompre votre contrat aux
            torts de l’employeur, vous envisagez une rupture conventionnelle ….
            Maître MAMERI vous conseillera utilement et assurera la défense de
            vos intérêts tant par la voie amiable que par la voie judiciaire
            notamment devant le Conseil de Prud’hommes.
          </p>
          <div className="blue2">
            <Link to="/licenciements-abusifs/">
              <div className="salar2 ">
                <img src={pic14} className="picindex3" alt="fireSpot" />
                <h3> LICENCIEMENTS ABUSIFS </h3>
              </div>
            </Link>

            <Link to="/rupture-torts-employeur/">
              <div className="indemn2 ">
                <img src={pic10} className="picindex3" alt="fireSpot" />
                <h3> RUPTURE AUX TORTS DE L'EMPLOYEUR </h3>
              </div>
            </Link>

            <Link to="/harcelement-moral/">
              <div className="ass2 ">
                <img src={pic12} className="picindex3" alt="fireSpot" />
                <h3> HARCÈLEMENT MORAL</h3>
              </div>
            </Link>

            <Link to="/rupture-conventionnelle/">
              <div className="indemn2 ">
                <img src={pic13} className="picindex3" alt="fireSpot" />
                <h3> RUPTURE CONVENTIONNELLE </h3>
              </div>
            </Link>

            <Link to="/inaptitude/">
              <div className="indemn2 ">
                <img src={pic11} className="picindex3" alt="fireSpot" />
                <h3> INAPTITUDE </h3>
              </div>
            </Link>

            <Link to="/sanctions-disciplinaires/">
              <div className="ass2 ">
                <img src={pic15} className="picindex3" alt="fireSpot" />
                <h3> SANCTIONS DISCIPLINAIRES</h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Salaries
