import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';

const Infos = () => (
  <Layout>

    <div className="background-hono">

      <h1> INFOS PRATIQUES </h1>

      <Link to="/reparation-dommage-corporel/" className=""> Réparation du dommage corporel </Link>
    <Link to="/droit-du-travail/" className=""> Droit du travail </Link>

    </div>


  </Layout>
)

export default Infos;
