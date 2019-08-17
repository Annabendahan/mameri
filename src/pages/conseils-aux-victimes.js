import React, {Component} from "react"
import { Link } from "gatsby"
import '../components/liens.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"
import pic2 from '../images/quentinmameripic.png';
import Text1 from "./text1.js"

class Conseils extends  Component {

  state ={

    un: false,
    deux: false,
    trois: false,
    quatre: false,
    cinq: false
  }


  handle1 = () => {

      this.setState({un : !this.state.un})
  }

  handle2 = () => {

      this.setState({deux : !this.state.deux})
  }

  handle3 = () => {

      this.setState({trois : !this.state.trois})
  }

  handle4 = () => {

      this.setState({quatre : !this.state.quatre})
  }

  handle5 = () => {

      this.setState({cinq : !this.state.cinq})
  }


  handle6 = () => {

      this.setState({six : !this.state.six})
  }

  render (){

    let haut = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7L6.2381 2L1 7" stroke="#0D345D" stroke-width="2"/>
</svg>


let basse = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5.7619 6L11 1" stroke="#0D345D" stroke-width="2"/>
</svg>



    let text =  <p className="desc ">
  L’article R 1111-2 du Code de la Santé Publique énumère les documents que doivent composer le dossier médical :
« Un dossier médical est constitué pour chaque patient hospitalisé dans un établissement de santé public ou privé. Ce dossier contient au moins les éléments suivants, ainsi classés : 
1° Les informations formalisées recueillies lors des consultations externes dispensées dans l'établissement, lors de l'accueil au service des urgences ou au moment de l'admission et au cours du séjour hospitalier, et notamment : 
a) La lettre du médecin qui est à l'origine de la consultation ou, en cas d'admission, la lettre de liaison prévue à l'article R. 111 »2-1-1 ; 
b) Les motifs d'hospitalisation ; 
c) La recherche d'antécédents et de facteurs de risques ; 
d) Les conclusions de l'évaluation clinique initiale ; 
e) Le type de prise en charge prévu et les prescriptions effectuées à l'entrée ; 
f) La nature des soins dispensés et les prescriptions établies lors de la consultation externe ou du passage aux urgences ; 
g) Les informations relatives à la prise en charge en cours d'hospitalisation : état clinique, soins reçus, examens para-cliniques, notamment d'imagerie ; 
h) Les informations sur la démarche médicale, adoptée dans les conditions prévues à l'article L. 1111-4 ; 
i) Le dossier d'anesthésie ; 
j) Le compte rendu opératoire ou d'accouchement ; 
k) Le consentement écrit du patient pour les situations où ce consentement est requis sous cette forme par voie légale ou réglementaire ; 
l) La mention des actes transfusionnels pratiqués sur le patient et, le cas échéant, copie de la fiche d'incident transfusionnel mentionnée au deuxième alinéa de l'article R. 1221-40 ; 
m) Les éléments relatifs à la prescription médicale, à son exécution et aux examens complémentaires ; 
n) Le dossier de soins infirmiers ou, à défaut, les informations relatives aux soins infirmiers ; 
o) Les informations relatives aux soins dispensés par les autres professionnels de santé ; 
p) Les correspondances échangées entre professionnels de santé ; 
q) Les directives anticipées mentionnées à l'article L. 1111-11 ou, le cas échéant, la mention de leur existence ainsi que les coordonnées de la personne qui en est détentrice. 
2° Les informations formalisées établies à la fin du séjour. Elles comportent notamment : 
a) La lettre de liaison remise à la sortie prévue par l'article R. 1112-1-2 ; 
b) La prescription de sortie et les doubles d'ordonnance de sortie ; 
c) Les modalités de sortie (domicile, autres structures) ; 
d) La fiche de liaison infirmière ; 
3° Les informations mentionnant qu'elles ont été recueillies auprès de tiers n'intervenant pas dans la prise en charge thérapeutique ou concernant de tels tiers. 
Sont seules communicables les informations énumérées aux 1° et 2°.
  </p>
    let text2 =  <p className="desc ">  "La demande de communication de dossier médical doit être adressée par courrier recommandé avec accusé de réception à l’attention du directeur si le dossier médical est détenu par un établissement de santé, ou directement auprès du professionnel de santé concernée dans le cadre d’une prise en charge libérale. Afin que le traitement de votre demande soit facilité, il est conseillé au demandeur de bien identifier dans son courrier les périodes ainsi que les services dans lequel il a été pris en charge et dont il souhaite obtenir la copie du dossier.

En aucun cas, vous n’avez l’obligation de motiver votre demande.

La demande de communication du dossier médical doit être accompagnée de la copie recto-verso de la pièce d’identité de la personne qui le demande et, en cas de demande formée par les représentants légal d’un enfant mineur ou d’un majeure sous tutelle, le livret de famille ou la décision judiciaire désignant le tuteur.

Vous avez la possibilité de consulter le dossier sur place ou d’en demander une copie. Dans ce cas, les frais de reproduction et d’envoi seront à votre charge.

S’agissant des établissements hospitaliers, le coût de la reproduction est encadré et ne peut être supérieur à 0,18 euros par page de format A4 en noir et blanc (arrêté du 1er octobre 2001 au lien suivant :
https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000772503)

Si vous souhaitez obtenir l’ensemble des pièces de votre dossier médical pour retracer la totalité de la prise en charge, le cabinet vous conseille de préciser dans votre courrier que vous souhaitez obtenir la communication de votre entier dossier d’hospitalisation incluant le dossier médical ainsi que le dossier infirmier et aide-soignant. Cela permettra d’avoir accès aux transmissions des professionnels soignants. " </p>



let text6 =  <p className="desc ">  La demande de communication de dossier médical doit être adressée par courrier recommandé avec accusé de réception à l’attention du directeur si le dossier médical est détenu par un établissement de santé, ou directement auprès du professionnel de santé concernée dans le cadre d’une prise en charge libérale.

La demande de dossier médical ne peut être sollicitée pour un proche décédé que par ses ayants droit, son époux, son concubin ou son partenaire de PACS.

S’agissant de l’ayant droit, il s’agit de l’héritier au sens de la succession (héritiers légaux ou testamentaires). Pour justifier sa qualité d’ayant droit, il faudra que le proche de la personne décédée joigne au courrier en plus de sa pièce d’identité un document justifiant de sa qualité d’héritier. Il peut s’agir d’un acte de notoriété qui doit être sollicité auprès du notaire .

Pour l’époux, ou le partenaire de pacs, il faudra joindre une copie de la convention de pacs ou un acte de naissance ou livret de famille.

A la différence d’une demande concernant son propre dossier médical, vous devez lorsque vous sollicitez le dossier médical d’un proche décédé motiver votre demande par l’un des objectifs prévus par la loi : connaitre les causes du décès, faire valoir ses droits ou défendre la mémoire du défunt.

Il faut veiller à bien préciser les circonstances dans lesquelles la mémoire du défunt doit être défendue (attaque publique, atteinte à la vie privée...) ou la nature du droit que vous souhaitez faire valoir (action en indemnisation …).

En fonction du motif invoqué, l’établissement procédera à un tri et ne vous remettra que les pièces médicales nécessaires pour parvenir à l’objectif sur lequel vous vous êtes positionné.

Maître MAMERI pourra vous conseiller utilement et vous accompagner pour obtenir votre dossier médical.
</p>


let text3 = <p className="desc ">  Les établissements de santé sont soumis à une obligation de conservation du dossier médical pendant un délai de vingt ans à compter de la date du dernier séjour de son titulaire dans l'établissement ou de la dernière consultation externe en son sein.  </p>


let text4 =  <p className="desc">  L’établissement de santé dispose d’un délai de 8 jours pour vous remettre les documents concernés, ce délai étant porté à deux mois pour les dossiers médicaux datés de plus de 5 ans.</p>


let text5 = <p className="desc">
En cas de refus de l’établissement résultant de son silence pendant cette période, ou en cas de refus explicite, vous avez la possibilité de saisir la Commission d’accès au document administratif ou si le refus émane d’un médecin libéral, auprès de l’ordre dont relève le professionnel concerné (Ordre des Médecins, Ordre des Chirurgiens-dentistes …). Vous avez également la possibilité d’agir par la voie judiciaire.

Maître MAMERI pourra vous conseiller utilement et vous accompagner pour obtenir votre dossier médical</p>

    let un = this.state.un? text : ""
    let bas1 = this.state.un? haut : basse

    let deux  = this.state.deux? text2 : ""
    let bas2 = this.state.deux? haut : basse

    let trois  = this.state.trois? text3 : ""
    let bas3 = this.state.trois? haut : basse


    let quatre  = this.state.quatre? text4 : ""
    let bas4 = this.state.quatre? haut : basse

    let cinq  = this.state.cinq? text5 : ""
    let bas5 = this.state.cinq? haut : basse

    let six  = this.state.six? text6 : ""
    let bas6 = this.state.six? haut : basse



    return(
<Layout>
<div className="background-hono">


 <div className="bigbox">
      <div className="bleft">

 <h1 > CONSEILS AUX VICTIMES </h1>

  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> SOLLICITER LA COMMUNICATION DE VOTRE ENTIER DOSSIER MEDICAL  </h2>

 <p className="desc"> <span className="bold"> Avant toute procédure, il est essentiel pour une victime d’obtenir la communication de son dossier médical auprès de chaque professionnel de santé ou d’établissement de santé qui a assuré sa prise en charge. </span> </p>

<p className="desc"> Ce dossier médical est essentiel quel que soit la nature de l’accident dont vous avez été victime pour déterminer l’étendue de vos lésions et séquelles et pouvoir ainsi se prononcer sur vos préjudices sur le plan médical.

En matière de responsabilité médicale, hospitalière ou même dentaire, le dossier médical permet au-delà de l’évaluation du préjudice de déterminer si les conditions de la responsabilité du professionnel sont médicalement réunies. L’examen des pièces médicales permettra notamment de se prononcer sur la qualité de la prise en charge et ainsi de mettre en évidence une faute commise que ce soit dans l’établissement du diagnostic, dans la mise en œuvre du traitement ou de l’intervention ou bien encore dans le cadre du suivi.

Depuis la loi du 4 mars 2002, le patient a un droit d’accès direct aux éléments médicaux formalisés qui le concerne. Il n’est donc pas obligé de passer par son médecin traitant. </p>

<p className="desc"> Foire au question sur le dossier médical : lien vers sous onglet Info pratiques dans info et conseils utiles – sous sous onglet : le dossier médical </p>


<h3 className="o" onClick={this.handle1}> Que contient le dossier médical? {bas1} </h3>
{un}

<h3> Comment faire la demande de dossier médical?  </h3>

<h3 className="o" onClick={this.handle2}>  La demande de son propre dossier médical {bas2} </h3>

{deux}

<h3 className="o" onClick={this.handle6}>  La demande du dossier médical d’un proche décédé {bas6}</h3>

{six}


<h3 className="o" onClick={this.handle3}> Délai de conservation du dossier médical {bas3}</h3>

{trois}

<h3 className="o" onClick={this.handle4}> Dans quel délai l’établissement ou le médecin doit il me remettre mon dossier médical ? {bas4} </h3>


{quatre}

<h3 className="o p" onClick={this.handle5}> Que faire en cas de refus de l’établissement ou du médecin ? {bas5}</h3>

{cinq}


<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> NE JAMAIS RIEN SIGNER SANS L'AVOIR FAIT VÉRIFIER PAR UN AVOCAT </h2>

   <p className="desc">  Dès l’accident, vous devez être vigilant.

Vous devez, en premier lieu, faire attention à la rédaction du constat amiable.

Pensez à conserver une copie des documents que vous avez adressés à l’assureur
Ne jamais signer un document sans l’avoir lu et sans l’avoir fait vérifié par un avocat </p>





<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> CONSERVER LES DOCUMENTS MEDICAUX ET ADMINITRATIFS RELATIFS À VOTRE AFFAIRE </h2>

   <p className="desc">  Les pièces relatives à votre accident sont essentielles pour constituer votre dossier en vue de la réparation de vos préjudices.

Ces pièces seront essentielles lors de l’expertise médicale qui sera mis en œuvre pour se prononcer sur les conditions de la responsabilité du professionnel ou de l’établissement et dans tous les cas sur les séquelles et lésions consécutives à l’accident ou à l’agression. </p>

<p className="desc"> Il convient préalablement à toute procédure de solliciter une copie de votre dossier médical (en savoir plus).

Il convient également de conserver toutes les pièces relatifs à votre accident idéalement classés de manière chronologique que ce soit les pièces médicales (certificat médical initiales, prescriptions médicales, arrêt de travail) ou administratives (courriers échangés avec l’assureur, avec la sécurité sociale ….).

Vous devez conserver un double de toutes les pièces médicales (courriers, ordonnances, clichés et compte-rendu des imageries réalisées (radiologie, IRM, …).et ne jamais remettre les originaux à l’assureur.

Enfin, vous pouvez prendre des photographies périodiques de vos lésions ce qui pourra être précieux notamment pour démontrer notamment l’importance des répercussions sur le plan esthétique.</p>

<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> NE JAMAIS VOUS RENDRE A UNE EXPERTISE MEDICALE SANS ETRE ASSISTÉ PAR UN AVOCAT </h2>

   <p className="desc">  Nombre de victimes se présentent seule à l’expertise amiable médicale organisée par la compagnie d’assurance.

Que ce soit le médecin-conseil de votre compagnie d’assurance ou de la compagnie adverse, n’oubliez jamais que ce médecin est mandaté par la compagnie d’assurance qui le rémunère.

Le médecin-conseil de compagnie d’assurance n’est donc pas impartial. Il ne défend pas vos intérêts mais ceux de la compagnie pour laquelle il travaille. </p>

<p className="desc"> <span className="bold"> Dans ces conditions, il est important pour vous victime d’être accompagné par un avocat lors de cette expertise afin que vos droits puisse être défendus et que vous puissiez être conseillé utilement.

Il est important d’être assisté même lorsque l’expertise est organisé dans un cadre judiciaire. </span>

En effet, dans ce cas, l’ensemble des mis en cause sont convoqués et pourront être assisté d’un avocat et d’un médecin-conseil.

Le rôle de l’avocat est de vous conseiller et de défendre vos droits de victime tout au long de l’expertise. Son assistance est primordiale tant en terme de soutien humain que sur le plan juridique.
</p>


</div>

      <div className="rightbox">
      <div className="contact-box">
        <div className="contact-left">
          <img  src={pic2} className="profile-pic-contact" alt="fireSpot" />
        </div>

        <Link to="/contact/">
        <div className="contact-right">
        <h3 className="titleQ"> QUENTIN MAMERI </h3>


        <p className="uuup"> 16 rue Sauffroy, 75017 PARIS </p>



        <p className="uup"> <svg className="yellows" width="13" height="13" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z" fill="#2a4b80"/>
      </svg>
       06 40 84 36 19 </p>

         <p className="uup"> <svg className="yellows3" width="13" height="18" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8549 3.01208H15.2476V17.9321C15.2476 18.9232 14.4408 19.7301 13.4496 19.7301H7.2964H2.40332V20.2831C2.40332 20.9165 2.91735 21.4305 3.55068 21.4305H9.70173H15.8528C16.4861 21.4305 17.0001 20.9165 17.0001 20.2831V4.15944C17.0001 3.52612 16.4883 3.01208 15.8549 3.01208Z" fill="#244C82"/>
<path d="M7.29624 19.0794H13.4473C14.0806 19.0794 14.5946 18.5653 14.5946 17.932V3.01205V1.80831C14.5946 1.17498 14.0806 0.66095 13.4473 0.66095H7.29624H5.25095V1.04051C5.25526 1.07955 5.25745 1.12076 5.25745 1.16197V3.66273V4.30473C5.25745 5.19615 4.53304 5.92057 3.64161 5.92057H2.99961H0.498851C0.466317 5.92057 0.431614 5.9184 0.399081 5.91623H0V17.932C0 18.5653 0.514033 19.0794 1.14736 19.0794H2.40533H7.29624ZM7.52831 15.1797H3.51798C3.21867 15.1797 2.97575 14.9367 2.97575 14.6374C2.97575 14.3381 3.21867 14.0952 3.51798 14.0952H7.53048C7.82979 14.0952 8.07271 14.3381 8.07271 14.6374C8.07271 14.9367 7.82762 15.1797 7.52831 15.1797ZM11.5408 12.4122H3.51798C3.21867 12.4122 2.97575 12.1692 2.97575 11.8699C2.97575 11.5706 3.21867 11.3277 3.51798 11.3277H11.5408C11.8401 11.3277 12.083 11.5706 12.083 11.8699C12.083 12.1692 11.8401 12.4122 11.5408 12.4122ZM3.51798 8.38879H11.5408C11.8401 8.38879 12.083 8.63171 12.083 8.93102C12.083 9.23033 11.8401 9.47325 11.5408 9.47325H3.51798C3.21867 9.47325 2.97575 9.23033 2.97575 8.93102C2.97575 8.63171 3.21867 8.38879 3.51798 8.38879Z" fill="#244C82"/>
<path d="M0.498756 5.26988H3.64152C3.64369 5.26988 3.64802 5.26988 3.65019 5.26988C4.17507 5.26554 4.60018 4.84043 4.60452 4.31555C4.60452 4.31338 4.60452 4.30905 4.60452 4.30688V1.16195C4.60452 0.871317 4.36593 0.678284 4.1187 0.678284C3.99941 0.678284 3.88012 0.721662 3.78035 0.821432L0.156067 4.44569C-0.147581 4.74934 0.0671417 5.26988 0.498756 5.26988Z" fill="#244C82"/>
</svg>01 84 10 55 86
</p>

        <p className="uup" > <svg className="yellows2" width="18" height="11" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.59146 5.88196C2.93301 6.09875 3.96255 6.74264 5.68015 7.81327C7.3978 8.88391 8.71364 9.70828 9.62772 10.2864C9.72814 10.3498 9.9415 10.4875 10.2679 10.6999C10.5944 10.9124 10.8656 11.0841 11.0814 11.215C11.2974 11.3459 11.5586 11.4928 11.8651 11.6554C12.1715 11.8178 12.4603 11.94 12.7315 12.0209C13.0028 12.1025 13.2538 12.1429 13.4848 12.1429H13.5H13.5152C13.7462 12.1429 13.9974 12.1024 14.2686 12.0209C14.5397 11.94 14.8288 11.8177 15.1349 11.6554C15.4412 11.4926 15.7023 11.3459 15.9183 11.215C16.1343 11.0841 16.4054 10.9124 16.7319 10.6999C17.0583 10.4874 17.2719 10.3498 17.3723 10.2864C18.2963 9.70828 20.6469 8.23998 24.4236 5.88167C25.1568 5.42107 25.7694 4.86529 26.2615 4.21472C26.754 3.56443 27 2.88224 27 2.16852C27 1.57211 26.7613 1.06157 26.2841 0.636952C25.807 0.212238 25.2419 0 24.5892 0H2.41061C1.63722 0 1.04205 0.234882 0.6252 0.704645C0.2084 1.1745 0 1.7618 0 2.46649C0 3.03571 0.276319 3.65253 0.828692 4.31659C1.38101 4.98069 1.9688 5.50253 2.59146 5.88196Z" fill="#2a4b80"/>
      <path d="M25.4932 7.33201C22.1989 9.33767 19.6975 10.8964 17.9901 12.0079C17.4176 12.3872 16.9531 12.6833 16.5964 12.8955C16.2397 13.1078 15.7654 13.3247 15.1726 13.5459C14.5801 13.7675 14.0279 13.878 13.5155 13.878H13.5001H13.485C12.9727 13.878 12.4202 13.7675 11.8277 13.5459C11.2351 13.3247 10.7604 13.1078 10.4039 12.8955C10.0474 12.6833 9.58277 12.3872 9.01029 12.0079C7.65419 11.1134 5.15814 9.5546 1.52204 7.33201C0.949347 6.9889 0.442094 6.59561 0.00012207 6.15295V16.9137C0.00012207 17.5104 0.236069 18.0206 0.708228 18.4453C1.18028 18.8701 1.74791 19.0824 2.41089 19.0824H24.5895C25.2523 19.0824 25.8199 18.8701 26.292 18.4453C26.7643 18.0205 27.0001 17.5104 27.0001 16.9137V6.15295C26.5681 6.58645 26.066 6.97974 25.4932 7.33201Z" fill="#2a4b80"/>
      </svg>
       qmameri.avocat@gmail.com</p>

        </div>
         </Link>


      </div>

      </div>
    </div>

</div>
  </Layout>
      )
  }
}



export default Conseils;
