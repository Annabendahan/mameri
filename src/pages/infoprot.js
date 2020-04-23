import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"

import pic14 from "../images/p14.jpeg"
import pic13 from "../images/p13.jpeg"
import pic8 from "../images/p8.jpeg"
import pic15 from "../images/p15.jpeg"
import pic16 from "../images/p16.jpeg"
import pic17 from "../images/p17.jpeg"
import pic3 from "../images/p3.jpeg"

const InfoDt = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> PROTECTION SOCIALE </h1>

          <div className="blue2">
            <Link to="/expertise-medicale-litiges-securite-sociale/">
              <div className="ip">
                <img src={pic8} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    L’expertise médicale, étape préalable des litiges médicaux
                    avec la sécurité sociale
                  </h3>
                  <p className="desc-n">
                    L’expertise médicale est un moment clef de la procédure en
                    réparation du dommage corporel. En effet, elle constitue le
                    préalable à l’indemnisation car c’est à cette occasion que
                    le médecin-expert évaluera l’ensemble de vos préjudices sur
                    le plan médical.
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

            <Link to="/revenu-minimum-handicap/">
              <div className="ip">
                <img src={pic13} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Puis-je prétendre à un revenu minimum en raison de mon
                    handicap ?{" "}
                  </h3>
                  <p className="desc-n">
                    Oui. L’allocation aux adultes handicapés est une prestation
                    octroyée par la MDPH qui garantit un minimum de revenu aux
                    personnes en situation de handicap ayant de faibles
                    ressources et atteint d’un certain niveau d’incapacité.
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

            <Link to="/temps-partiel-therapeutique/">
              <div className="ip">
                <img src={pic14} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Comment aménager temporairement mon temps de travail en
                    raison de ma maladie ?
                  </h3>
                  <p className="desc-n">
                    Le temps partiel thérapeutique (TPT) est une prestation de
                    la sécurité sociale permettant au salarié malade de
                    reprendre son travail à temps réduit pour favoriser une
                    amélioration de son état de santé. Dans le langage courant,
                    on parle souvent de mi-temps thérapeutique à tort car le
                    temps partiel thérapeutique n’est pas nécessairement un
                    mi-temps. En matière d’accident du travail, on ne parle pas
                    de temps partiel thérapeutique mais de reprise de travail
                    léger.
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

            <Link to="/indemnites-arret-travail/">
              <div className="ip">
                <img src={pic15} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>Les indemnités journalières en cas d’arrêt de travail</h3>
                  <p className="desc-n">
                    L’arrêt de travail permet à un salarié dans l’impossibilité
                    de travailler de justifier son absence à son employeur et de
                    bénéficier du versement d’indemnités journalières par la
                    sécurité sociale pour compenser sa perte de revenu. Ces
                    indemnités journalières sont versées selon certaines
                    conditions et modalités.
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

            <Link to="/invalidite/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Comment aménager durablement mon temps de travail en raison
                    de mon handicap ou de ma maladie ?
                  </h3>
                  <p className="desc-n">
                    L’invalidité est un statut accordé par la sécurité sociale à
                    un assuré dont la capacité de travail est réduite des 2/3
                    suite à un accident ou une maladie sans caractère
                    professionnel et qui lui donne droit notamment au versement
                    d’une pension et à une prise en charge de ses frais de santé
                    à 100 %.
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

            <Link to="/aide-financiere-handicap/">
              <div className="ip">
                <img src={pic17} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Comment obtenir une aide financière pour prendre en charge
                    les frais nécessités par mon handicap ?
                  </h3>
                  <p className="desc-n">
                    Deux prestations principales permettent de prendre en charge
                    les aide humaines et techniques nécessités par le handicap :
                    la prestation de compensation du handicap octroyée par la
                    MDPH (PCH) et l’Allocation Personnalisée d’Autonomie (APA)
                    par le département.
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

            <Link to="/carte-mobilite-inclusion/">
              <div className="ip">
                <img src={pic3} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Quel statut pour faciliter mes transports et déplacements en
                    raison de mon handicap ?
                  </h3>
                  <p className="desc-n">
                    La Carte de mobilité inclusion (CMI) est un statut accordé
                    par la MDPH qui permet notamment de faciliter les transports
                    et les déplacements des personnes en situation de handicap.
                    Il existe 3 sortes de CMI, mention invalidité, mention
                    priorité et mention stationnement.
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

            <Link to="/reconnaissance-travailleur-handicape">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Comment obtenir une reconnaissance administrative de mon
                    handicap sur le plan professionnel ?
                  </h3>
                  <p className="desc-n">
                    La Reconnaissance de Qualité de Travailleur Handicapé (RQTH)
                    est un statut reconnu par la MDPH à toute personne dont les
                    possibilités d'obtenir ou de conserver un emploi sont
                    effectivement réduites par suite de l'altération d'une ou
                    plusieurs fonctions (physique, sensorielle, mentale ou
                    psychique).
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
