import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"

import pic12 from "../images/bannam.png"

const Médicaux = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> ACCIDENTS MÉDICAUX</h1>
          <img src={pic12} className="picdefense" alt="fireSpot" />
          <p className="desc">
            {" "}
            Maître Quentin MAMERI assure la défense de vos intérêts dans toutes les procédures
tendant à engager la responsabilité d’un établissement ou d’un professionnel de
santé, que vous soyez victime d’une  <span className="bold">
              {" "}
              <Link to="/erreur-medicale/"> faute médicale</Link>
            </span>{" "} ou dentaire (faute de diagnostic,
faute technique, défaut d’information, etc.), du défaut d’un produit de santé, d’une
affection iatrogène, d’une <span className="bold"> <Link to="/infection-nosocomiale/">
              {" "}
                infection nosocomiale,
              </Link>{" "} </span> ou de tout autre accident médical et
ce quel que soit la nature et l’importance de votre handicap.




           <br /> <br />

           Si vous êtes victime d’un  <span className="bold">
              <Link to="/erreur-medicale/">accident médical sans faute</Link>
            </span> (aléa thérapeutique), sachez
que vous pouvez obtenir indemnisation par la solidarité nationale (ONIAM), sous
réserve que certaines conditions soient réunies et notamment que vous atteigniez un
certain seuil de gravité fixé par décret.


          </p>

          <p className="desc">
            {" "}
            Maître Quentin MAMERI intervient exclusivement pour les victimes et
            leurs proches et vous garantira une indépendance face aux
            professionnels de santé et à leur compagnie d’assurance.{" "}
          </p>

          <p className="desc">
            Il intervient sur l’ensemble du territoire français y compris
            l’Outre-Mer, devant toutes les juridictions civiles ou
            administratives mais également devant les commissions de
            conciliation et d’indemnisation des accidents médicaux (CCI).
          </p>

          <p className="desc">
            {" "}
            Il sera présent à vos côtés à chaque stade de la procédure y compris
            lors de l’
            <span className="bold">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>{" "}
            </span>{" "}
             qui est un moment clef de la procédure puisqu’elle permet
            d’apprécier d’une part, si les conditions de la responsabilité de
            l’établissement ou du professionnel sont réunies, et d’autre part,
            d’évaluer vos préjudices sur le plan médical.{" "}
          </p>

          <p className="desc">
            {" "}
            Il vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de
            recours et les professionnels qualifiés (ergothérapeute,
            architecte…) avec lesquels il travaille habituellement.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident médical, d’un accident dentaire
            ou bien encore d’une infection nosocomiale ou du défaut d’un produit
            de santé, n’hésitez pas à contacter Maître Quentin MAMERI par
            téléphone, mail ou par le formulaire de contact afin de lui exposer
            votre situation et convenir d’un rendez-vous.
          </p>

          <MotsClefs
            link1=<Link to="/expertise-medicale-dommage-corporel/">
              {" "}
              L'expertise médicale
            </Link>
            link2=<Link to="/infection-nosocomiale/">
          {" "}
              L'infection nosocomiale
            </Link>
            link3=<Link to="/prejudices-reparables/">
          {" "}
              La réparation intégrale
            </Link>
            link4=<Link to="/erreur-medicale/"> L'erreur médicale</Link>
          />
        </div>

      <VisitCard />
    </div>
    </div>
  </Layout >
)

export default Médicaux
