import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Inf = () => (
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
            Victime d’une infection nosocomiale, quel régime d’indemnisation ?
          </h2>

          <p className="desc">
            <span className="bold">
              {" "}
              Une infection est dite « nosocomiale » lorsqu’elle est contractée
              par un patient à l’occasion d’un séjour dans un établissement de
              santé public ou privé ou d’une prise en charge par un
              professionnel de santé et qu’elle n’était pas présente à
              l’admission.
            </span>
          </p>

          <p className="desc">
            L’infection peut avoir une origine exogène c’est à dire qu’elle
            résulte de facteurs extérieures au patient (environnement
            hospitalier, instrument, personnel…) ou endogène c’est à dire que le
            patient a été contaminé par les propres germes dont il est porteur
            sain, en général à l’occasion d’un acte invasif (intervention
            chirurgicale, piqûre …) 
          </p>
          <p className="desc">
            En matière d’infection nosocomiale, la loi a mis en place un régime
            d’indemnisation spécifique favorable aux victimes d’infections
            nosocomiales survenues en établissement de santé. 
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - Infection nosocomiale contractée en établissement de santé
            </span>
          </p>

          <p className="desc">
            L’établissement de santé est présumé responsable c’est à dire qu’il
            n’est pas nécessaire pour le patient de démontrer une faute
            d’asepsie ou d’hygiène de l’établissement. Si l’infection est
            qualifiée d’infection nosocomiale, l’établissement engage sa
            responsabilité et ne peut s’exonérer en démontrant son absence de
            faute.
          </p>

          <p className="desc">
            {" "}
            Pour les infections nosocomiales les plus graves survenues dans un
            établissement de santé, ce n’est pas l’établissement qui prendra en
            charge l’indemnisation mais la solidarité nationale par
            l’intermédiaire d’une autorité administrative, l’Office Nationale
            d’Indemnisation des Accidents Médicaux (ONIAM). Tel sera le cas pour
            les infections nosocomiales à l’origine d’un dommage supérieur à un
            taux d’IPP de 25 % ou du décès du patient.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - Infection nosocomiale contractée en cabinet libéral
            </span>
          </p>

          <p className="desc">
            {" "}
            Quand l’infection est survenue dans un cabinet d’un médecin ou d’un
            autre professionnel de santé libéral, la présomption ne s’applique
            pas et dans ce cas, le patient devra démontrer que le médecin a
            commis une faute d’hygiène ou d’asepsie qui a provoqué l’infection
            en cause.
          </p>

          <p className="desc">
            {" "}
            Si vous avez contracté une infection nosocomiale et que vous
            souhaitez engager une procédure d’indemnisation, n’hésitez pas à
            contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
          </p>
          <br />
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Inf
