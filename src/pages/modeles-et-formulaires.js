import React from "react"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pdf from "../images/formulaire de demande.pdf"
import pdf2 from "../images/certificat-medical.pdf"
import pdf3 from "../images/guide-pratique.pdf"

import m1 from "../images/1.pdf"
import m2 from "../images/2.pdf"
import m3 from "../images/3.pdf"
import m4 from "../images/4.pdf"
import m5 from "../images/5.pdf"
import m6 from "../images/6.pdf"
import m7 from "../images/7.pdf"
import m8 from "../images/8.pdf"
import m9 from "../images/9.pdf"
import m10 from "../images/10.pdf"
import m11 from "../images/11.pdf"

const Modeles = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> MODÈLES ET FORMULAIRES </h1>

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
            MODÈLES{" "}
          </h2>

          <h3 className="subt">
            {" "}
            MODÈLE DE DEMANDE DE COMMUNICATION DE DOSSIER MÉDICAL OU DENTAIRE{" "}
          </h3>

          <h3> - Demande de son propre dossier médical </h3>
          <p className="desc-s">
            {" "}
            Auprès d'un établissement de santé:{" "}
            <a href={m10} download>
              Télécharger ici
            </a>{" "}
          </p>
          <p className="desc-s">
            {" "}
            Auprès d'un médecin libéral:{" "}
            <a href={m9} download>
              Télécharger ici
            </a>{" "}
          </p>

          <p className="desc-s">
            {" "}
            Auprès d'un dentiste :{" "}
            <a href={m11} download>
              Télécharger ici
            </a>{" "}
          </p>
          <p className="desc">
            {" "}
            Auprès d'un médecin-conseil:{" "}
            <a href={m8} download>
              Télécharger ici
            </a>{" "}
          </p>

          <h3>
            {" "}
            - Demande de dossier médical en tant que représentant légal ou
            tuteur, curateur{" "}
          </h3>

          <p className="desc-s">
            {" "}
            Auprès d'un établissement de santé :
            <a href={m6} download>
              Télécharger ici
            </a>{" "}
          </p>

          <p className="desc-s">
            {" "}
            Auprès d'un médecin libéral :{" "}
            <a href={m4} download>
              Télécharger ici
            </a>{" "}
          </p>

          <p className="desc-s">
            {" "}
            Auprès d'un dentiste :{" "}
            <a href={m7} download>
              Télécharger ici
            </a>{" "}
          </p>
          <p className="desc">
            {" "}
            Auprès d'un médecin-conseil :{" "}
            <a href={m5} download>
              Télécharger ici
            </a>{" "}
          </p>

          <h3>
            {" "}
            - Demande de dossier médical en tant qu'ayant droit d'une personne
            décédée{" "}
          </h3>

          <p className="desc-s">
            {" "}
            Auprès d'un établissement de santé : 
            <a href={m1} download>
              Télécharger ici
            </a>{" "}
          </p>
          <p className="desc-s">
            {" "}
            Auprès d'un médecin libéral :{" "}
            <a href={m4} download>
              Télécharger ici
            </a>{" "}
          </p>
          <p className="desc">
            {" "}
            Auprès de médecin-conseil:{" "}
            <a href={m3} download>
              Télécharger ici
            </a>{" "}
          </p>

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
            FORMULAIRES{" "}
          </h2>

          <h3 className="subt"> DEMANDES AUPRÈS DE LA MDPH  </h3>

          <p className="desc-s">
            {" "}
            - Formulaire de demande :{" "}
            <a href={pdf} download>
              Télécharger ici
            </a>{" "}
          </p>

          <p className="desc-s">
            {" "}
            - Certificat médical MDPH :{" "}
            <a href={pdf2} download>
              Télécharger ici
            </a>
          </p>

          <p className="desc-s">
            {" "}
            - Guide-Barème pour l'évaluation des déficiences et incapacités :{" "}
            <a
              href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000027037614&cidTexte=LEGITEXT000006074069"
              target="blank"
            >
              Voir ici
            </a>{" "}
          </p>

          <p className="desc">
            {" "}
            - Guide "Facile à lire et à comprendre" (documentation CNSA) :{" "}
            <a
              href="https://www.cnsa.fr/documentation/cnsa_fiche_facilealire_7-aah-vf.pdf"
              target="blank"
            >
              Voir ici
            </a>
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Modeles
