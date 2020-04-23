import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Cdm = () => (
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
            QUE CONTIENT LE DOSSIER MÉDICAL ?
          </h2>

          <p className="desc">
            Le dossier médical regroupe toutes informations concernant la santé
            d’un patient détenues à quelque titre que ce soit, par tous
            professionnels de santé, établissements et centres de santé, qui
            sont formalisées ou ont fait l'objet d'échanges écrits entre
            professionnels de santé (CSP, art. L.1111-7).
          </p>

          <p className="desc">
            {" "}
            La loi dresse une liste non exhaustive du contenu d’un dossier
            médical et mentionne notamment les résultats d'examen, comptes
            rendus de consultation, d'intervention, d'exploration ou
            d'hospitalisation, des protocoles et prescriptions thérapeutiques
            mis en œuvre, feuilles de surveillance, correspondances entre
            professionnels de santé, à l'exception des informations mentionnant
            qu'elles ont été recueillies auprès de tiers n'intervenant pas dans
            la prise en charge thérapeutique ou concernant un tel tiers.
          </p>

          <p className="desc">
            {" "}
            L’article R 1111-2 du Code de la Santé Publique fixe une liste de
            pièces que doit comporter au minimum le dossier médical d’un patient
            hospitalisé.
          </p>

          <p className="desc art ">
            « Un dossier médical est constitué pour chaque patient hospitalisé
            dans un établissement de santé public ou privé. Ce dossier contient
            au moins les éléments suivants, ainsi classés : 
            <br />
            1° Les informations formalisées recueillies lors des consultations
            externes dispensées dans l'établissement, lors de l'accueil au
            service des urgences ou au moment de l'admission et au cours du
            séjour hospitalier, et notamment :  <br />
            a) La lettre du médecin qui est à l'origine de la consultation ou,
            en cas d'admission, la lettre de liaison prévue à l'article R.
            111 »2-1-1 ; 
            <br />
            b) Les motifs d'hospitalisation ;<br />
              c) La recherche d'antécédents et de facteurs de risques ; 
            <br />
            d) Les conclusions de l'évaluation clinique initiale ; 
            <br />
            e) Le type de prise en charge prévu et les prescriptions effectuées
            à l'entrée ; 
            <br />
            <br />
            f) La nature des soins dispensés et les prescriptions établies lors
            de la consultation externe ou du passage aux urgences ; 
            <br />
            g) Les informations relatives à la prise en charge en cours
            d'hospitalisation : état clinique, soins reçus, examens
            para-cliniques, notamment d'imagerie ; 
            <br />
            h) Les informations sur la démarche médicale, adoptée dans les
            conditions prévues à l'article L. 1111-4 ;  i) Le dossier
            d'anesthésie ;<br />
              j) Le compte rendu opératoire ou d'accouchement ; 
            <br />
            k) Le consentement écrit du patient pour les situations où ce
            consentement est requis sous cette forme par voie légale ou
            réglementaire ; 
            <br />
            l) La mention des actes transfusionnels pratiqués sur le patient et,
            le cas échéant, copie de la fiche d'incident transfusionnel
            mentionnée au deuxième alinéa de l'article R. 1221-40 ; 
            <br />
            m) Les éléments relatifs à la prescription médicale, à son exécution
            et aux examens complémentaires ; 
            <br />
            n) Le dossier de soins infirmiers ou, à défaut, les informations
            relatives aux soins infirmiers ; 
            <br />
            o) Les informations relatives aux soins dispensés par les autres
            professionnels de santé ; 
            <br />
            p) Les correspondances échangées entre professionnels de santé ; 
            <br />
            q) Les directives anticipées mentionnées à l'article L. 1111-11 ou,
            le cas échéant, la mention de leur existence ainsi que les
            coordonnées de la personne qui en est détentrice.  2° Les
            informations formalisées établies à la fin du séjour. Elles
            comportent notamment : 
            <br />
            a) La lettre de liaison remise à la sortie prévue par l'article R.
            1112-1-2 ; 
            <br />
            b) La prescription de sortie et les doubles d'ordonnance de sortie
            ; 
            <br />
            c) Les modalités de sortie (domicile, autres structures) ; 
            <br />
            d) La fiche de liaison infirmière ; 
            <br />
            3° Les informations mentionnant qu'elles ont été recueillies auprès
            de tiers n'intervenant pas dans la prise en charge thérapeutique ou
            concernant de tels tiers.  Sont seules communicables les
            informations énumérées aux 1° et 2°.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Cdm
