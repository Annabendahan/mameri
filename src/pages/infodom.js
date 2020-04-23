import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const InfoDom = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> RÉPARATION DU DOMMAGE CORPOREL </h1>

          <div className="blue2">
            <Link to="/reparation-dommage-corporel/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3> L’accès au dossier médical</h3>
                  <p className="desc-n">
                    Obtenir la communication de son dossier médical est une
                    étape essentielle pour engager une procédure amiable ou
                    judiciaire concernant un litige en lien avec la santé ou le
                    handicap. Maître Quentin MAMERI répond aux questions que
                    vous vous posez sur l’accès au dossier médical.
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

            <Link to="/expertise-medicale-dommage-corporel/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    L’expertise médicale, phase préalable incontournable de la
                    procédure en réparation de dommage corporel
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

            <Link to="/victime-accident-infraction/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Victime d’un accident ou d’une infraction : Quels sont les
                    préjudices réparables ?
                  </h3>
                  <p className="desc-n">
                    Il est difficile pour une victime d’accidents ou
                    d’infractions pénales de déterminer quels sont les
                    préjudices dont elle peut obtenir réparation. Or, connaître
                    les préjudices indemnisables est essentiel afin qu’ils ne
                    soient pas oubliés ou minimisés particulièrement lors de
                    l’expertise médicale.
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

            <Link to="/consolidation/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3> Qu’est-ce que la consolidation ?</h3>
                  <p className="desc-n">
                    La consolidation est une notion médico-légale essentielle
                    dans l’indemnisation du dommage corporel. Elle correspond à
                    la date de stabilisation de vos lésions provoquées par
                    l’accident ou l’agression et constitue une condition sine
                    qua non de votre indemnisation définitive.
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

            <Link to="/certificat-medical-initial/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Pourquoi le certificat médical initial est-il une pièce
                    essentielle d’un dossier en réparation de dommage corporel ?{" "}
                  </h3>
                  <p className="desc-n">
                    Le certificat médical initial (CMI) est une pièce
                    fondamentale du dossier en réparation du dommage corporel.
                    Il permet d’inventorier l’ensemble des lésions subies par la
                    victime afin de les rattacher à l’accident et ce afin que
                    l’ensemble de ses préjudices puisse être évalués.
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

            <Link to="/accident-cadre-professionnel/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>L’accident survenu dans un cadre professionnel </h3>
                  <p className="desc-n">
                    Si vous êtes victime d’un accident dans un cadre
                    professionnel, vous pouvez bénéficier de la législation sur
                    les risques professionnels qui vous permet de bénéficier de
                    prestations spécifiques de la sécurité sociale et d’un
                    régime protecteur en droit du travail.
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

            <Link to="/reparation-dommage-corporel/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Comment engager la responsabilité de mon employeur s’il a
                    commis une faute à l’origine de mon accident du travail ?{" "}
                  </h3>
                  <p className="desc-n">
                    La procédure en reconnaissance de faute inexcusable permet à
                    un salarié victime d’un accident du travail ou d’une maladie
                    professionnelle d’agir contre l’employeur pour obtenir,
                    d’une part, indemnisation de ses préjudices et, d’autre
                    part, une majoration de l’indemnisation forfaitaire (rente
                    ou capital) versée par la sécurité sociale.
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

            <Link to="/reparation-dommage-corporel/">
              <div className="ip">
                <img src={pic16} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’une erreur médicale, les règles d’indemnisation{" "}
                  </h3>
                  <p className="desc-n">
                    On parle dans le langage courant d’erreur médicale. Or, une
                    simple erreur ne suffit pas à engager la responsabilité d’un
                    médecin ou d’un établissement de santé. Pour engager leur
                    responsabilité, le patient doit démontrer qu’ils ont commis
                    une faute médicale. Cependant, la loi permet à un patient
                    sous certaines conditions d’obtenir indemnisation lorsqu’ils
                    sont la conséquence d’un accident médical non fautif.
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

export default InfoDom
