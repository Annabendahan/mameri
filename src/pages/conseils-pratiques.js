import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';

const Conseils = () => (
  <Layout>

    <div className="background-hono">

    <h1> CONSEILS PRATIQUES </h1>

    <Link to="/conseils-aux-victimes/" className=""> Conseils aux victimes</Link>
    <Link to="/conseils-aux-victimes/" className=""> Conseils aux salariés </Link>

   </div>


  </Layout>
)

export default Conseils;
