import React, {Component} from "react"
import { Link } from "gatsby"
import '../components/liens.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import VisitCard from '../components/VisitCard'
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

      <VisitCard />
    </div>

</div>
  </Layout>
      )
  }
}



export default Conseils;
