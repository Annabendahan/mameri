import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vavp = () => (
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
            VICTIME D’UN ACCIDENT DE LA VIE PRIVÉE :  PUIS-JE OBTENIR RÉPARATION DE MES PRÉJUDICES ?
          </h2>

          <p className="desc">
            <span className="bold">
              {" "}
              Si vous êtes victime d’un accident de vie privée, vous pouvez obtenir réparation
auprès du responsable, s’il y ‘en a un, ou en mobilisant votre contrat d’assurance
dit « garantie des accidents de la vie (GAV) » si vous êtes assuré à ce titre. De tels
contrats peuvent garantir des sinistres très diversifiés : accidents domestiques,
accident de loisirs, accident médicaux, etc.
            </span>
          </p>

          <p className="desc">
            Pour connaître les conditions et modalités d’indemnisation au titre d’une GAV, vous
            devez vous reporter à votre contrat d’assurance. En effet, les conditions et modalités
            de cette garantie peuvent être très différentes d’une compagnie d’assurance à une
            autre notamment au niveau des types d’accidents indemnisés, du seuil de
            déclenchement de la garantie (franchise d’IPP) ou bien encore des postes de
            préjudices indemnisables.
          </p>
          <p className="desc">
            Il est important d’être assisté par un avocat non seulement en cas de litige avec la
            compagnie d’assurance sur la mise en œuvre de la garantie mais également lorsque
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
            Si vous souhaitez mobiliser un tel contrat, si vous êtes en litige avec votre assureur
            sur l’exécution de celui-ci ou si vous souhaitez tout simplement être accompagné
            dans les démarches pour obtenir réparation, n’hésitez pas à contacter Maître
            Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui
            exposer votre situation et convenir d’un rendez-vous.
          </p>


          <p className="desc">
            <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/certificat-medical-initial/"> Le certificat médical initial</Link><br />
- Préjudices indemnisables<br />
- <Link to="/consolidation/"> La consolidation</Link><br />
          </p>
          <br />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Vavp
