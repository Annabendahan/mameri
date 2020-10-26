import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/cond.jpg"
import pic4 from "../images/P1011958.jpg"

const Vastr = () => (
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
            VICTIME D’ACCIDENT DE LA ROUTE : PUIS-JE OBTENIR RÉPARATION SI JE SUIS CONDUCTEUR ET
VICTIME, SANS TIERS RESPONSABLE ?
          </h2>

          <p className="desc">
            <span className="bold">
              {" "}
              Si vous êtes conducteur et que vous êtes victime d’un accident de la route sans tiers
responsable, vous ne pouvez obtenir réparation pour vos propres dommages
corporels que si vous êtes titulaire d’un contrat d’assurance dit « garantie du
conducteur ».
            </span>
          </p>

          <p className="desc">
            En effet, l’assurance obligatoire pour la conduite d’un véhicule ne garantit que votre
            responsabilité civile c’est-à-dire qu’elle couvre uniquement les dommages corporels
            que vous causez aux autres (autre conducteur, piéton, motard, passager transporté,
            etc.). Si vous êtes responsable de votre propre accident, cette assurance ne vous
            garantira pas pour vos propres dommages corporels.
          </p>
          <p className="desc">
            Une garantie du conducteur peut être incluse dans le contrat d’assurance de votre
            véhicule ou avoir été souscrite séparément.
          </p>

          <p className="desc">
            Pour savoir si  vous êtes assuré à ce titre et selon quelles modalités, vous devez vous
            reporter à vos contrats d’assurances. Si vous voulez savoir si une telle garantie est
            intégrée dans le contrat d’assurance de votre véhicule, il convient de consulter
            attentivement les conditions générales et particulières de votre contrat.
          </p>

          <p className="desc">
            Sachez que les conditions et modalités de cette garantie peuvent être très différentes
            d’une compagnie d’assurance à une autre notamment sur l’étendue des préjudices
            indemnisables – qui peut être plus restreint que pour un accident avec tiers-
            responsable - ou sur le plafond maximum d’indemnisation auquel vous pouvez
            prétendre contractuellement.
          </p>

          <p className="desc">
            {" "}
            Il est important d’être assisté par un avocat non seulement en cas de litige avec la
compagnie d’assurance sur la mise en œuvre de sa garantie mais également lorsque
celle-ci est mobilisée pour que vos intérêts soient défendus à chaque étape de la
procédure y compris pendant la phase d’expertise médicale.
          </p>

          <p className="desc">
            Maître MAMERI vous apportera non seulement un soutien juridique et technique
            mais également humain. Il pourra vous orienter vers les médecins de recours et les
            professionnels qualifiés (ergothérapeute, architecte…) avec lesquels il travaille
            habituellement.
          </p>

          <p className="desc">
            {" "}
            Si vous souhaitez mobiliser un tel contrat, si vous êtes en litige avec votre assureur
sur l’exécution de celui-ci ou si vous souhaitez tout simplement être accompagné
dans les démarche pour obtenir réparation, n’hésitez pas à contacter Maître Quentin
MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer
votre situation et convenir d’un rendez-vous.
          </p>
          <p className="desc">
            <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/certificat-medical-initial/"> Le certificat médical initial</Link><br />
- <Link to="/prejudices-reparables/"> Les préjudices indemnisables</Link><br />
- <Link to="/consolidation/"> La consolidation</Link><br />
          </p>
          <br />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Vastr
