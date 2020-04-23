import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

import pic1 from "../images/p1.png"

import pic5 from "../images/p5.jpeg"
import pic6 from "../images/p6.jpeg"
import pic7 from "../images/p7.jpeg"

const InfoDt = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> DROIT DU TRAVAIL </h1>

          <div className="blue2">
            <Link to="/faute-grave-employeur/">
              <div className="ip">
                <img src={pic1} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Un salarié peut-il rompre son contrat de travail en raison
                    d’une faute grave de son employeur ?
                  </h3>
                  <p className="desc-n">
                    Oui - Deux recours permettent à un salarié de rompre son
                    contrat de travail aux torts de son employeur : la prise
                    d’acte de rupture du contrat de travail et la résiliation
                    judiciaire du contrat de travail. Maître Quentin MAMERI vous
                    présente ces deux voies de recours.
                  </p>
                  <p className="pluss">
                    {" "}
                    EN SAVOIR PLUS{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="#2a4b80"
                      />
                    </svg>{" "}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/rompre-amiablement-contrat-travail/">
              <div className="ip">
                <img src={pic5} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Rompre amiablement son contrat de travail, mode d’emploi !
                  </h3>
                  <p className="desc-n">
                    La rupture conventionnelle est un mode de rupture du contrat
                    de travail. Elle permet à l’employeur et au salarié de
                    mettre fin, d’un commun accord, au contrat de travail à
                    durée indéterminée qui les lie à des conditions qu’ils
                    déterminent ensemble.
                  </p>
                  <p className="pluss">
                    {" "}
                    EN SAVOIR PLUS{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="#2a4b80"
                      />
                    </svg>{" "}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/victime-harcelement-moral/">
              <div className="ip">
                <img src={pic6} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Victime de harcèlement moral, quelles voies de recours ?
                  </h3>
                  <p className="desc-n">
                    Le harcèlement moral correspond à des agissements répétés
                    exercés par la hiérarchie ou non à l’encontre d’un salarié
                    qui ont pour objet ou pour effet une dégradation des
                    conditions de travail susceptible de porter atteinte à ses
                    droits et à sa dignité, d'altérer sa santé physique ou
                    mentale ou de compromettre son avenir professionnel.
                  </p>
                  <p className="pluss">
                    {" "}
                    EN SAVOIR PLUS{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="#2a4b80"
                      />
                    </svg>{" "}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/inaptitude-salaries/">
              <div className="ip">
                <img src={pic7} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>L’inaptitude des salariés</h3>
                  <p className="desc-n">
                    Le médecin du travail peut se prononcer sur l’aptitude ou
                    l’inaptitude du salarié dans le cadre d’une visite de
                    reprise après une période d’au moins 30 jours d’arrêt
                    maladie ou à tout moment à l’initiative de l’employeur, du
                    salarié ou de la médecine du travail.
                  </p>
                  <p className="pluss">
                    {" "}
                    EN SAVOIR PLUS{" "}
                    <svg
                      className="arrow"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                        fill="#2a4b80"
                      />
                    </svg>{" "}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default InfoDt
