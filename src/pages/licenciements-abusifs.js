import React from "react"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

import pic14 from "../images/la.jpg"

const Abusifs = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> LICENCIEMENTS ABUSIFS </h1>
          <img src={pic14} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Vous avez été licencié pour faute par votre employeur ou pour tout
            autre motif que vous estimez infondé (licenciement pour inaptitude,
            licenciement pour arrêts de travail prolongés perturbant gravement
            le fonctionnement de l’entreprise …){" "}
          </p>
          <p className="desc">
            {" "}
            Maître Quentin MAMERI vous conseillera utilement et mettra tout en
            œuvre pour défendre vos droits de salarié devant le conseil de
            prud’hommes.{" "}
          </p>

          <p className="desc">
            {" "}
            Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou
            par le formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.{" "}
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Abusifs
