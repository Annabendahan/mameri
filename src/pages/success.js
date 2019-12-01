import React from "react"
import "../components/defense.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic10 from "../images/secu.jpeg"

const Success = () => (
  <Layout>
    <div className="background-hono">
      <p className="success desc"> Merci pour votre message !</p>
      <b>
        {" "}
        <Link to="/" className="desc">
          {" "}
          Retour à l'accueil{" "}
        </Link>{" "}
      </b>
    </div>
  </Layout>
)

export default Success
