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

class Reparation extends  Component {

  state ={

    un: false,
    deux: false,
    trois: false,
    quatre: false,
    cinq: false
  }


  render() {

    return(

      <Layout >
     <div className="background-hono">



     <div className="bigbox">
      <div className="bleft">
      <h1 id="C"> RÉPARATION DU DOMMAGE CORPOREL </h1>



      <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> LE DOSSIER MEDICAL  </h2>

 <p className="desc"> <span className="bold"> <Link to="/conseils-aux-victimes">  Voir comment solliciter votre dossier médical  </Link> </span> </p>



<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> LA CONSOLIDATION </h2>


   <p className="desc"> La consolidation est une notion médico-légale essentielle dans l’indemnisation du dommage
corporel. </p>


 <p className="desc"> En effet, l’indemnisation définitive des préjudices de la victime ne peut se faire que lorsque
la victime est consolidée. </p>

<p className="desc" id="RIP"> Cela ne signifie pas que la victime est guérie mais que son état de santé est stabilisé c’est-à-
dire que son état n’est ni susceptible d’amélioration, ni d’aggravation. Tel n’est pas le cas si
une intervention chirurgicale est programmée ou si des soins sont en cours car l’état sera
encore susceptible d’évoluer.</p>

<p className="desc" > La phase de consolidation marque donc la séparation entre préjudices temporaires qui sont
le résultat des lésions et des préjudices permanents qui correspondent à des séquelles. </p>







  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> REPARATION INTÉGRALE DES PREJUDICES </h2>



  <p className="desc"> L’indemnisation du dommage corporel des victimes d’accident repose sur le principe de
réparation intégrale des préjudices de la victime. </p>


 <p className="desc"> Selon la formule consacrée, cela implique par le versement de l’indemnisation à replacer la
victime dans l’état où elle se trouvait si le fait dommageable n’avait pas eu lieu.</p>


 <p className="desc" id="PI"> Le rôle d’un avocat de victime est essentiel pour vous permettre que tous vos préjudices
soient évalués lors de l’expertise médicale et qu’ils soient bien évalués sur le plan financier.</p>

 <p className="desc"> Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.</p>





    <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> PREJUDICES INDEMNISABLES </h2>


 <p className="desc">  Il est essentiel pour une victime de connaître les préjudices qui sont juridiquement
indemnisables. </p>


<p className="desc"> En effet, il n’est pas rare qu’une victime se présente seule à une expertise médicale ou signe
un accord d’indemnisation avec l’assureur sans qu’elle ne connaisse véritablement l’étendue
des préjudices dont elle peut obtenir réparation.</p>

<p className="desc"> Or, quand une victime ne sait pas quel préjudice peut être indemnisé, cela a deux
conséquences :</p>



<p className="desc-s"> - Si l’expert ne l’interroge pas sur un préjudice, celui-ci ne sera pas abordé et sera
passé sous silence par l’expert ce qui aura pour conséquence que l’assureur ne lui
fera aucune proposition à ce titre.</p>


<p className="desc"> - La victime peut être encline à accepter une sous-indemnisation. Cela n’est pas sans
conséquence pour l’avenir car il arrive souvent que des préjudices importants soient
oubliés et que la victime se rendre compte bien plus tard que l’indemnisation qui lui
a été versée ne compense pas ses besoins.</p>

<p className="desc">
Les préjudices sont listés par une nomenclature des préjudices « la nomenclature dintilhac »
qui est adopté par la majorité des juridictions.</p>

<p className="desc">
Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.</p>


<p className="desc">  Préjudices de la victime directe et des victimes par ricochet
Sont indemnisables : </p>
<p className="desc-s"> - <span className="bold"> les préjudices de la victime directe </span> c’est à dire celle qui a subi le dommage dans sa
personne ou ses biens </p>
<p className="desc-s"> - <span className="bold"> les préjudices de la victime dite indirecte </span> c’est-à-dire celles qui a souffert d’un
préjudice parce qu’une première personne, la victime directe, avec laquelle elle avait
des liens, a subi un dommage. </p>
<p className="desc"> Types de préjudice envisageables :
<p className="desc-s"> <span className="bold"> Préjudices patrimoniaux et extrapatrimoniaux </span> </p>
Une victime peut obtenir indemnisation de ses préjudices dits patrimoniaux c’est-à-dire des
préjudices évaluables sur le plan économiques (pertes de gains professionnels …) et des
préjudices extrapatrimoniaux c’est-à-dire des préjudices personnels (souffrances endurées,
préjudice esthétique …).
<p className="desc-s"> <span className="bold"> Préjudices temporaires et préjudice permanents </span> </p>


Une victime peut obtenir indemnisation de préjudices patrimoniaux ou extrapatrimoniaux
dit temporaire c’est à dire avant consolidation et des préjudices patrimoniaux ou
extrapatrimoniaux dits permanents c’est à dire après consolidation. </p>





  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> LE CERTIFICAT MEDICAL INITIAL (CMI)</h2>


  <p className="desc"> Le certificat médical initial (CMI) est une pièce fondamentale d’un dossier en réparation du
dommage corporel.
Si vous êtes pris en charge par les secours dans les suites de votre accident et hospitalisé,
l’établissement d’accueil devra établir un certificat médical initial (CMI).
Ce certificat médical initial fera l’inventaire des blessures constatées et fixera un taux
d’incapacité.
Dans le cas où vous ne seriez pas hospitalisé, il est conseillé de vous rendre sans tarder chez
votre médecin traitant afin que ce dernier puisse certifier des lésions qu’il a lui-même
constaté suite à son examen clinique. <span id="EM"> </span>
Ce certificat est initial est essentiel pour rattacher les lésions à l’accident subi. </p>

  <p className="desc" > Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.
Exemples de certificat médical initial :
http: </p>


 <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> L'EXPERTISE MEDICALE </h2>


  <p className="desc"> L’expertise médicale est une étape très importante de la procédure en réparation du
dommage corporel car er d’évaluer sur le plan médical le préjudice subis par la victime (en
savoir plus sur les préjudices indemnisables).</p>
<p className="desc">L’Expertise peut être mise en place dans différents cadres :</p>
<p className="desc">  <span className="bold"> Le cadre purement amiable : </span> cela consiste en l’organisation d’une expertise amiable
avec l’établissement mis en cause ou son assureur.</p>
<p className="desc-s">  <span className="bold"> Le cadre de la Commission de conciliation et d’indemnisation des accidents
médicaux (uniquement pour les actions en responsabilité médicale) :  </span>  Cette
commission a été créée en 2002 par la loi Kouchner. Cette procédure présente
l’avantage de la gratuité (procédure et frais d’expertise) et d’une certaine rapidité.
Cependant, la CCI n’est compétente que pour les accidents les plus graves. Le seuil de
gravité est fixé par décret.</p>
<p className="desc-s">  <span className="bold">  Le cadre judiciaire : </span>  ce recours auprès du Tribunal consiste à solliciter la désignation
d’un expert indépendant. Les frais d’expertises sont à la charge du demandeur mais
peuvent être pris en charge par une assurance de protection juridique dont vous
seriez éventuellement titulaire.
</p>
<p className="desc"> Pour toute information complémentaire, vous pouvez contacter Maitre Quentin MAMERI,
avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui
exposer votre situation et convenir d’un rendez-vous.</p>


  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ACCIDENT DU TRAVAIL  </h2>


  <p className="desc"> <span className="bold"> Un accident est qualifié d’accident du travail  lorsqu’il est survenu ou salarié par le fait ou à l’occasion du travail et ce quelqu’un soit la cause. </span>  </p>

    <p className="desc">La reconnaissance en accident du travail ouvre de nombreux avantages au salarié : </p>


     <p className="desc-s"> - une prise en charge de ses frais de santé à 100 % ainsi qu’une dispense d’avance de frais   </p>

 <p className="desc-s"> - le versement d’indemnités journalières en cas d’arrêt maladie sans durée limite jusqu’à la consolidation </p>




<p className="desc-s">- à compter de la consolidation, en cas de séquelles, le versement d’une rente ou d’un capital en fonction du taux d’incapacité retenue.  </p>
<p className="desc-s"> - l’application de règles protectrices en droit du travail (doublement de l’indemnité de licenciement en cas de licenciement pour inaptitude ; protection contre le licenciement …). </p>
<p className="desc"> En cas de refus de reconnaissance d’un accident du travail ou de désaccord sur votre taux d’IPP, Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>




 <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ACCIDENT DE TRAJET  </h2>


    <p className="desc"><span className="bold"> Il y a accident de trajet lorsque celui-ci est survenu pendant le trajet effectué entre sa résidence et son lieu de travail, ainsi que sur le trajet entre son lieu de travail et le lieu de restauration où le salarié se rend pendant la pause repas. </span> </p>


      <p className="desc"> L’accident de trajet est assimilable à un accident du travail et ouvre droit aux mêmes avantages, à savoir :
 </p>



      <p className="desc-s"> - une prise en charge de ses frais de santé à 100 %
       ainsi qu’une dispense d’avance de frais   </p>

        <p className="desc-s"> - le versement d’indemnités journalières en cas d’arrêt maladie sans durée limite jusqu’à la consolidation   </p>


        <p className="desc-s"> - à compter de la consolidation, en cas de séquelles, le versement d’une rente ou d’un capital en fonction du taux d’incapacité retenue. </p>

        <p className="desc-s" id="FIE"> - l’application de règles protectrices en droit du travail (doublement de l’indemnité de licenciement en cas de licenciement pour inaptitude ; protection contre le licenciement …).   </p>


  <p className="desc">En cas de refus de reconnaissance d’un accident du travail ou de désaccord sur votre taux d’IPP, vous pouvez contacter Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.   </p>

   <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> FAUTE INEXCUSABLE DE L'EMPLOYEUR </h2>


    <p className="desc"> <span className="bold">La procédure en reconnaissance de faute inexcusable permet à un salarié victime d’un accident du travail ou d’une maladie professionnelle d’agir contre l’employeur pour obtenir, d’une part, indemnisation de ses préjudices et, d’autre part, une majoration de l’indemnisation forfaitaire (rente ou capital) versée par la sécurité sociale. </span> </p>


     <p className="desc"> Pour que l’employeur soit tenu d’indemniser les préjudices du salarié, il vous faudra apporter la preuve de la faute inexcusable de votre employeur. Selon la jurisprudence, la faute est inexcusable lorsque l’employeur avait ou aurait dû avoir conscience du danger auquel était exposé le salarié, et qu’il n’a pas pris les mesures nécessaires pour l’en préserver.   </p>

       <p className="desc">L’assistance d’un avocat est essentielle que ce soit au niveau de la reconnaissance de la faute inexcusable de votre employeur ou pour l’obtention de l’indemnisation de vos préjudices en cas de faute inexcusable. </p>
       <p className="desc"> Pour engager une procédure de faute inexcusable de l’employeur, vous pouvez contacter Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.  </p>


</div>

     <VisitCard />
    </div>


      </div>
      </Layout>


      )
  }
}


  export default Reparation
