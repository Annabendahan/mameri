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
            UN SALARIÉ PEUT-IL ROMPRE SON CONTRAT DE TRAVAIL EN RAISON D’UNE
            FAUTE GRAVE DE SON EMPLOYEUR ?
          </h2>

          <p className="desc">
            <span className="bold"> Oui sous certaines conditions</span> - Deux
            recours permettent de rompre son contrat de travail aux torts de son
            employeur : la prise d’acte de rupture du contrat de travail et la
            résiliation judiciaire.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - La prise d’acte de rupture du contrat de travail
            </span>
          </p>

          <p className="desc">
            Il s’agit d’un mode de rupture du contrat de travail qui permet à un
            salarié de prendre l'initiative de son départ de l'entreprise tout
            en imputant la responsabilité à son employeur car c'est lui, par son
            comportement et les fautes graves qu'il a commises, qui ne lui a
            donné d'autre choix que de quitter son emploi.{" "}
          </p>

          <p className="desc">
            Cela implique que le salarié puisse justifier de manquements graves
            de son employeur rendant impossible la poursuite de la relation de
            travail.
          </p>
          <p className="desc">
            {" "}
            - La procédure en la matière se déroule en plusieurs étapes :
            <br />
            <br />
            Courrier adressé à l’employeur prenant acte de la rupture de ton
            contrat de travail. Cela a pour effet de rompre immédiatement le
            contrat de travail sans que le salarié soit tenu d’effectuer un
            préavis. Dès que le courrier de prise d’acte a été envoyé à
            l’employeur, le contrat prend fin de manière immédiate sans
            rétractation possible.
            <br />
            Saisine du bureau de jugement du Conseil des Prud’hommes afin de
            solliciter la requalification de cette rupture en licenciement aux
            torts de l’employeur.
            <br />
            <br />A l’issue de la procédure, plusieurs cas de figures peuvent se
            présenter : <br />
            <br />- Si le Conseil des Prud’homme considère que les manquements
            reprochés à l’employeur sont caractérisés et suffisamment graves
            pour faire obstacle à la poursuite du contrat de travail, la prise
            d’acte sera requalifiée en licenciement sans cause réelle et
            sérieuse ce qui ouvrira droit au versement par l’employeur des
            indemnités afférentes au licenciement (indemnité légale ou
            conventionnelle de licenciement, indemnité de congés payés et de
            préavis) ainsi qu’à l’allocation de dommages et intérêts pour
            licenciement sans cause réelle et sérieuse.
            <br />- Dans le cas contraire, la prise d’acte sera requalifiée en
            démission. Le salarié sera alors privé d’indemnités afférentes au
            licenciement et de dommages et intérêts et pourra être condamné à
            régler à son employeur une indemnité compensatrice de préavis.
          </p>
          <p className="desc">
            Eu égard aux risques inhérents à la prise d’acte, il est essentiel
            pour un salarié de prendre conseil auprès d’un avocat de salariés
            afin que celui-ci puisse le conseiller utilement sur l’opportunité
            d’une telle procédure et constituer un dossier solide et
            suffisamment étayé.
          </p>

          <p className="desc">
            {" "}
            Maître MAMERI vous conseillera utilement sur l’opportunité d’une
            telle procédure au regard de votre situation.
          </p>

          <p className="desc">
            <span className="bold">
              {" "}
              - La résiliation judiciaire du contrat de travail
            </span>
          </p>

          <p className="desc">
            {" "}
            Il est possible de saisir le Conseil de Prud’hommes d’une demande de
            résiliation du contrat de travail.
          </p>

          <p className="desc">
            {" "}
            Dans cette hypothèse, le contrat n’est pas rompu mais il convient
            directement de saisir le conseil de prud’hommes pour lui demander de
            mettre fin au contrat de travail aux torts de l’employeur.
          </p>

          <p className="desc">
            Il convient comme la prise d’acte de démontrer des manquements
            graves de l’employeur.
          </p>

          <p className="desc">
            {" "}
            Si le juge estime le(s) manquement(s) invoqué(s) suffisamment
            grave(s), le contrat est résilié par le juge aux torts de
            l’employeur ce qui implique le versement des indemnités afférentes à
            la rupture comme pour la prise d’acte ainsi que des dommages et
            intérêts.
            <br /> <br />
            Si au contraire, le juge n’estime pas le(s) manquement(s) invoqué(s)
            suffisamment grave(s), le contrat n’est pas résilié et il
            conviendra, dans ce cas d’envisager, un autre mode de rupture
            puisque dans ce cas, le salarié fera toujours partie des effectifs
            de l’entreprise.
            <br />
            <br />
            Maître MAMERI vous conseillera utilement sur l’opportunité d’une
            telle procédure au regard de votre situation.
            <br />
            Si vous êtes victime de manquement de votre employeur et que vous
            souhaitez rompre votre contrat à ses torts, n’hésitez pas à
            contacter Maître Quentin MAMERI, par téléphone, mail ou par le
            formulaire de contact afin de lui exposer votre situation et
            convenir d’un rendez-vous.
            <br />
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Err
