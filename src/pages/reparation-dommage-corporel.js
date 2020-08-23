import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic8 from "../images/p8.png"
import pic9 from "../images/p7.png"
import pic10 from "../images/p10.png"
import pic11 from "../images/p11.png"
import pic1 from "../images/p1.png"
import pic12 from "../images/p12.jpeg"
import pic3 from "../images/cond.jpg"
import pic4 from "../images/avp.jpeg"
import f1 from "../images/f1.png"
import ju from "../images/ju.jpg"
import fgao from "../images/fgao.jpg"
import civi from "../images/civi.jpg"
import surg from "../images/surg.jpg"
import noso from "../images/noso.png"







const InfoDom = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> RÉPARATION DU DOMMAGE CORPOREL </h1>

          <div className="blue2">
            <Link to="/dossier-medical/">
              <div className="ip">
                <img src={pic8} className="picindex3" alt="fireSpot" />
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
                <img src={pic9} className="picindex3" alt="fireSpot" />
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

            <Link to="/prejudices-reparables/">
              <div className="ip">
                <img src={pic10} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    {" "}
                    Victime d’accident ou d’infraction : quels
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
                <img src={pic11} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3> Victime d’accident ou d’infraction : qu’est-ce que la consolidation ?</h3>
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

            <Link to="/victime-accident-infraction-aggravation/">
              <div className="ip">
                <img src={pic11} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’accident ou d’infraction : puis-je faire rouvrir mon dossier en cas
                    d’aggravation ?
                  </h3>
                  <p className="desc-n">
                    Si vos séquelles se sont aggravées depuis votre indemnisation judiciaire ou amiable, vous
                    avez la possibilité de faire rouvrir votre dossier pour être indemnisé de vos nouveaux
                    préjudices. Il peut s’agir d’une aggravation « médicale » se manifestant par l’apparition de
                    nouvelles lésions ou d’une aggravation des séquelles préexistantes.
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


            <Link to="/procedure-reparation/">
              <div className="ip">
                <img src={f1} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’accident ou d’infraction : quelles sont les grandes étapes d’une
procédure en réparation de dommage corporel ?{" "}
                  </h3>
                  <p className="desc-n">
                    Que vous soyez victime d’un dommage corporel à la suite d’un accident médical,
                    d’un accident de la route, d’un accident de la vie privée, d’un accident de sport ou
                    bien encore d’une infraction pénale, la procédure pour obtenir réparation de vos
                    préjudices se décline généralement en trois grandes étapes : la phase de
                    préparation du dossier, la phase d’expertise médicale et la phase de réparation.
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
                <img src={pic10} className="picindex3" alt="fireSpot" />
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

            <Link to="/victime-accident-sans-tiers-responsable/">
              <div className="ip">
                <img src={pic3} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’accident de la route : Puis-je obtenir réparation si je suis conducteur et
victime, sans tiers responsable ?{" "}
                  </h3>
                  <p className="desc-n">
                    Si vous êtes conducteur et que vous êtes victime d’un accident de la route sans tiers
                    responsable, vous ne pouvez obtenir réparation pour vos propres dommages
                    corporels que si vous êtes titulaire d’un contrat d’assurance dit « garantie du
                    conducteur ».
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


            <Link to="/victime-accident-circulation/">
              <div className="ip">
                <img src={fgao} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’accident de la circulation : responsable inconnu ou non assuré, puis-je être
indemnisé ?{" "}
                  </h3>
                  <p className="desc-n">
                    Oui - Le Fonds de Garantie des Assurances Obligatoires de Dommage (FGAO) est un
                    fonds d’indemnisation créé en 1951 pour indemniser les victimes d’accident de la
                    circulation impliquant un véhicule terrestre à moteur, une personne circulant sur le
                    sol ou un animal, lorsque le tiers-responsable ou le propriétaire n’est pas assuré ou
                    n’a pas pu être identifié et lorsque la victime ne peut obtenir réparation de son
                    dommage à un autre titre.
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

            <Link to="/victime-accident-vie-privee/">
              <div className="ip">
                <img src={pic4} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’un accident de la vie privée :  puis-je obtenir réparation de mes préjudices ?{" "}
                  </h3>
                  <p className="desc-n">
                    Si vous êtes victime d’un accident de vie privée, vous pouvez obtenir réparation
                    auprès du responsable, s’il y ‘en a un, ou en mobilisant votre contrat d’assurance
                    dit « garantie des accidents de la vie (GAV) » si vous êtes assuré à ce titre. De tels
                    contrats peuvent garantir des sinistres très diversifiés : accidents domestiques,
                    accident de loisirs, accident médicaux, etc.
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

            <Link to="/erreur-medicale/">
              <div className="ip">
                <img src={pic12} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’erreur médicale : les règles d’indemnisation{" "}
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


            <Link to="/infection-nosocomiale/">
              <div className="ip">
                <img src={noso} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’une infection nosocomiale, quel régime
                    d’indemnisation ?{" "}
                  </h3>
                  <p className="desc-n">
                    Une infection est dite « nosocomiale » lorsqu’elle est
                    contractée par un patient à l’occasion d’un séjour dans un
                    établissement de santé public ou privé ou d’une prise en
                    charge par un professionnel de santé et qu’elle n’était pas
                    présente à l’admission.
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



            <Link to="/victime-erreur-medicale/">
              <div className="ip">
                <img src={pic9} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’erreur médicale : l’obligation d’information du professionnel de santé{" "}
                  </h3>
                  <p className="desc-n">
                    Les professionnels de santé (médecin, chirurgien-dentiste ….) sont non seulement tenus de
                    dispenser à leurs patients des soins consciencieux, attentifs et conformes aux règles de
                    l’art mais également de les informer sur leur état de santé. Cette obligation d’information
                    initialement consacrée par la jurisprudence a été reprise par la loi du 4 mars 2002 qui la
                    considère expressément comme un droit du patient. L’information médicale permet au
                    patient de consentir de manière libre et éclairée aux soins ou aux traitements proposés.
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



            <Link to="/victime-erreur-medicale-reparation/">
              <div className="ip">
                <img src={pic12} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’erreur médicale : dois-je porter plainte pour obtenir réparation ?
                  </h3>
                  <p className="desc-n">
                    Vous êtes victime d’un accident médical, d’une affection iatrogène ou d’une infection
                    nosocomiale et vous vous interrogez sur la procédure à suivre pour obtenir réparation de
                    dommages corporels que vous avez subi. Vous vous demandez sûrement si vous devez
                    déposer plainte à l’encontre du professionnel ou de l’établissement de santé que vous
                    jugez responsable.
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

            <Link to="/victime-erreur-medicale-cci/">
              <div className="ip">
                <img src={surg} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’erreur médicale : Puis-je saisir la Commission de conciliation et
                    d’indemnisation des accidents médicaux (CCI/CRCI) ?
                  </h3>
                  <p className="desc-n">
                    La Commission de Conciliation et d’Indemnisation des Accidents médicaux (CCI /
                    anciennement CRCI) est une autorité administrative indépendante créée par la loi du 4
                    mars 2002 dont la mission est d’indemniser les victimes d’erreur médicales les plus graves,
                    qu’elles soient victimes d’une faute médicale, d’une infection nosocomiale, d’une affection
                    iatrogène ou d’un accident médical non fautif (aléa thérapeutique). Elle constitue une
                    alternative au rapprochement amiable avec l’assureur et à la saisine d’un Tribunal.
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
                <img src={pic1} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>L’accident survenu dans le cadre du travail (accident du travail) </h3>
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

            <Link to="/faute-inexcusable/">
              <div className="ip">
                <img src={pic1} className="picindex3" alt="fireSpot" />
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



            <Link to="/victime-infraction-civi/">
              <div className="ip">
                <img src={civi} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’infraction : Puis-je être indemnisé par la CIVI ?{" "}
                  </h3>
                  <p className="desc-n">
                    La CIVI est une juridiction civile spécialisée et autonome dont la mission est
                    d’examiner les demandes d’indemnisation des victimes d’infraction pénales dirigées
                    à l’égard du Fonds de Garantie des Victimes d’Infraction (FGTI). Ce fonds
                    d’indemnisation, créé en 1990 , indemnise, sous certaines conditions, les victimes
                    d’infractions pénales ayant subi une atteinte à leur personne ou à leurs biens.
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








            <Link to="/victime-infraction-recours/">
              <div className="ip">
                <img src={ju} className="picindex3" alt="fireSpot" />
                <div className="ip__text">
                  <h3>
                    Victime d’infraction : quel recours si le responsable ne me verse pas les dommages
et intérêts auxquels il a été condamné  ?{" "}
                  </h3>
                  <p className="desc-n">
                    Vous pouvez dans ce cas saisir un huissier de justice pour le contraindre à s’exécuter mais
                    vous pouvez aussi avoir recours au Service d’Aide aux Recouvrement des Victimes
                    d’Infraction (SARVI). Le SARVI est un service du fond d’indemnisation des victimes
                    d’infractions (FGTI) dont la mission est d’aider les victimes d’infractions à recouvrer les
                    dommages et intérêts que ne leur a pas versé l’auteur condamné.
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
