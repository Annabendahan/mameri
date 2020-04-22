import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Rmh = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h2 className="title">
            {" "}
            <svg
              className="yellows"
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="#F2DC17" />
            </svg>{" "}
            Victime de harcèlement moral : quelles voies de recours ?
          </h2>

          <p className="desc">
            {" "}
            <span className="bold">
              {" "}
              Le harcèlement moral correspond à des agissements répétés exercés
              par la hiérarchie ou non à l’encontre d’un salarié qui ont pour
              objet ou pour effet une dégradation des conditions de travail
              susceptible de porter atteinte à ses droits et à sa dignité,
              d'altérer sa santé physique ou mentale ou de compromettre son
              avenir professionnel.
            </span>
          </p>

          <p className="desc">
            {" "}
            Le harcèlement moral peut prendre plusieurs formes comme, notamment,
            des brimades, des injures, des violences, une procédure
            disciplinaire injustifiée, une « placardisation » …
          </p>

          <p className="desc">
            {" "}
            En cas de recours, il vous appartient uniquement de présenter les
            éléments de fait laissant supposer l’existence d’un harcèlement
            moral. Votre employeur devra démontrer que les faits allégués ne
            correspondent pas une situation de harcèlement moral.
          </p>

          <p className="desc">
            {" "}
            En cas de harcèlement moral, il est possible d’engager la
            responsabilité de son employeur. Il est également possible de rompre
            son contrat de travail à ses torts exclusifs ou bien encore
            d’engager une procédure pour faire requalifier son inaptitude en
            licenciement abusif.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime de harcèlement moral et que vous envisagez un
            recours contre votre employeur, n’hésitez pas à contacter Maître
            Quentin MAMERI par téléphone, mail ou par le formulaire de contact
            afin d’évoquer votre situation et de convenir d’un rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Rmh
