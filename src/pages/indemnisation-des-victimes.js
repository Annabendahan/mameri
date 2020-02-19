import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import pic8 from "../images/AT.png"

import pic11 from "../images/ar.png"
import pic12 from "../images/am.png"
import pic13 from "../images/as.jpeg"
import pic14 from "../images/avp.jpeg"
import pic15 from "../images/gh.jpeg"

import pic16 from "../images/ip.jpeg"
import pic17 from "../images/agg.png"

const Indemnisation = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> DÉFENSE DES VICTIMES </h1>
          <p className="desc">
            {" "}
            Vous êtes victime d’un dommage corporel à la suite d’un accident ou
            d’une infraction pénale. <br />
            <br />
            Maître Quentin MAMERI intervient exclusivement pour les victimes et
            leurs proches et assurera votre défense contre le responsable, son
            assureur ou les fonds de garantie, par la voie amiable ou
            judiciaire, et mettra tout en œuvre pour vous permettre d’obtenir la
            réparation intégrale de vos préjudices. Il vous apportera non
            seulement un soutien juridique et technique mais également humain
            tout au long de la procédure et veillera à ce que vos droits de
            victimes soient préservés et respectés. <br />
            <br /> Si vous avez subi un dommage corporel à la suite d’un
            accident ou d’une agression, n’hésitez pas à contacter Maître
            Quentin MAMERI par téléphone, mail ou par le formulaire de contact
            afin de lui exposer votre situation et convenir d’un rendez-vous.
          </p>
          <div className="blue2">
            <Link to="/accidents-de-la-route/">
              <div className="indemn2 ">
                <img src={pic11} className="picindex3" alt="fireSpot" />
                <h3> ACCIDENTS DE LA ROUTE </h3>
              </div>
            </Link>

            <Link to="/accidents-medicaux/">
              <div className="ass2 ">
                <img src={pic12} className="picindex3" alt="fireSpot" />
                <h3> ACCIDENTS MEDICAUX</h3>
              </div>
            </Link>

            <Link to="/accidents-de-sport/">
              <div className="indemn2 ">
                <img src={pic13} className="picindex3" alt="fireSpot" />
                <h3> ACCIDENTS DE SPORT </h3>
              </div>
            </Link>

            <Link to="/accidents-du-travail/">
              <div className="salar2 ">
                <img src={pic8} className="picindex3" alt="fireSpot" />
                <h3> ACCIDENTS DU TRAVAIL </h3>
              </div>
            </Link>
          </div>

          <div className="blue2">
            <Link to="/accidents-de-la-vie-privee/">
              <div className="ass2 ">
                <img src={pic14} className="picindex3" alt="fireSpot" />
                <h3> ACCIDENTS DE LA VIE PRIVÉE </h3>
              </div>{" "}
            </Link>

            <Link to="/infractions-penales/">
              <div className="salar2 ">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <h3> INFRACTIONS PÉNALES</h3>
              </div>{" "}
            </Link>

            <Link to="/grand-handicap/">
              <div className="salar2 ">
                <img src={pic15} className="picindex3" alt="fireSpot" />
                <h3> INDEMNISATION DU GRAND HANDICAP</h3>
              </div>{" "}
            </Link>

            <Link to="/aggravation/">
              <div className="salar2 ">
                <img src={pic17} className="picindex3" alt="fireSpot" />
                <h3> RÉOUVERTURE EN AGGRAVATION </h3>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Indemnisation
