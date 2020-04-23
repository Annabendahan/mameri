import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Err = () => (
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
            VICTIME D’UNE ERREUR MÉDICALE, LES RÈGLES D’INDEMNISATION
          </h2>

          <p className="desc">
            {" "}
            On parle dans le langage courant d’erreur médicale. Or, une simple
            erreur ne suffit pas à engager la responsabilité d’un médecin ou
            d’un établissement de santé. Pour engager la responsabilité d’un
            établissement ou d’un professionnel de santé, le patient doit
            démontrer que ce dernier a commis une faute médicale. Cependant, la
            loi permet à un patient sous certaines conditions d’obtenir
            indemnisation lorsqu’ils sont la conséquence d’un accident médical
            non fautif.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              1. Principe : Pour obtenir indemnisation, la victime doit prouver
              une faute médicale.
            </span>
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              Pour engager la responsabilité d’un établissement ou d’un
              professionnel de santé, il faut démontrer que ces derniers ont
              commis une faute médicale autrement dit qu’ils n’ont pas respecté
              les règles de l’art. 
            </span>
          </p>
          <p className="desc">
            Les fautes médicales avoir été commises à tous les stades de la
            prise en charge (faute de diagnostic, faute dans la réalisation des
            soins, suivi, etc.), peuvent être de différentes natures.
          </p>
          <p className="desc">
            Il peut s’agir d’une faute technique. C’est par exemple le cas
            lorsqu’un médecin lèse un organe en raison d’une maladresse dans son
            geste chirurgicale ou bien encore lorsqu’il ne diagnostique pas une
            pathologie en raison d’examens insuffisants.
          </p>

          <p className="desc">
            {" "}
            La faute peut également être une faute éthique. Ainsi, en est-il
            lorsque le médecin n’informe pas un patient d’un risque de
            l’intervention ou bien encore lorsque celui-ci commet une violation
            du secret médical.
          </p>

          <p className="desc">
            {" "}
            Pour déterminer si une faute médicale a été commise, il convient de
            diligenter une{" "}
            <span className="bold underlined">
              <Link to="/expertise-medicale-dommage-corporel/">
                expertise médicale
              </Link>
            </span>
            .
          </p>

          <p className="desc">
            {" "}
            La faute n’est pas le seul élément pour engager engager la
            responsabilité d’un professionnel, encore faut-il prouver qu’elle
            est bien à l’origine du dommage subi par la victime.
          </p>
          <br />

          <p className="desc">
            <span className="bold">
              {" "}
              2. Exception : Selon certaines conditions, il est possible pour
              une victime d’obtenir indemnisation même en l’absence de faute
              médicale.
            </span>
          </p>

          <p className="desc">
            {" "}
            La loi permet à un patient sous certaines conditions d’obtenir
            indemnisation de ses préjudices par un office public, l’ONIAM,
            lorsqu’ils sont la conséquence d’un accident médical non fautif
            c’est à dire lorsque le dommage est lié à un risque inhérent à
            l’acte médical que le médecin ne pouvait maitriser.
            <br /> <br />
            La loi réserve cette possibilité d’indemnisation aux accidents
            médicaux les plus graves. Est considéré comme grave l’accident
            médical ayant entraîné un dommage supérieur aux seuils suivants :
            <br />
            <br />
            - un taux d'atteinte permanente à l'intégrité physique ou psychique
            (AIPP) supérieur à 24 % ;
            <br />
            - ou un arrêt temporaire des activités professionnelles (ATAP)
            pendant une durée au moins égale à six mois consécutifs ou à six
            mois non consécutifs sur une période de douze mois ;
            <br />
            - ou des gênes temporaires constitutives d'un déficit fonctionnel
            temporaire (DFT) supérieur ou égal à un taux de 50 % pendant une
            durée au moins égale à six mois consécutifs ou à six mois non
            consécutifs sur une période de douze mois ;
            <br />
            Ou à titre exceptionnel :
            <br />
            - lorsque la victime est déclarée définitivement inapte à exercer
            l'activité professionnelle qu'elle exerçait avant l'accident médical
            ;
            <br />- lorsque l'accident médical, l'affection iatrogène ou
            l'infection nosocomiale occasionne des troubles particulièrement
            graves, y compris d'ordre économique, dans ses conditions
            d'existence (TPGCE).
          </p>

          <p className="desc">
            {" "}
            Pour pouvoir prétendre à ce dispositif, il faut, en outre, que le
            dommage du patient soit directement imputable à des actes de
            prévention, de diagnostic ou de soins et qu’il ait eu pour le
            patient des conséquences anormales au regard de son état de santé
            comme de l’évolution prévisible de celui-ci.
          </p>

          <p className="desc">
            {" "}
            Si vous êtes victime d’un accident médical et que vous souhaitez
            engager une procédure d’indemnisation, n’hésitez pas à contacter
            Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de
            contact afin de lui exposer votre situation et convenir d’un
            rendez-vous.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Err
