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


   <p className="desc"> La consolidation est une notion médico-légale essentielle dans l’indemnisation du dommage corporel. </p>


 <p className="desc"> En effet, l’indemnisation définitive des préjudices de la victime ne peut se faire que lorsque la victime est consolidée. </p>

<p className="desc" > Cela ne signifie pas que la victime est guérie mais que son état de santé est stabilisé c’est-à-dire que son état n’est ni susceptible d’amélioration, ni d’aggravation. Tel n’est pas le cas si une intervention chirurgicale est programmée ou si des soins sont en cours car l’état de la victime sera encore susceptible d’évoluer positivement ou négativement.</p>

<p className="desc" > La phase de consolidation marque donc la séparation entre préjudices temporaires qui sont la conséquence des lésions faisant suite à l’accident ou l’infraction et des préjudices permanents qui correspondent à des séquelles (en savoir plus sur les préjudices indemnisables). </p>


<p className="desc" id="RIP"> En matière d’accident du travail, la consolidation marque la fin du versement des indemnités journalières et donne lieu, en cas de séquelles, au versement d’une indemnisation sous forme de rente ou de capital. </p>

<p className="desc" > Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>





  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> REPARATION INTÉGRALE DES PREJUDICES </h2>



  <p className="desc"> L’indemnisation du dommage corporel des victimes d’accident repose sur le principe de réparation intégrale des préjudices de la victime. </p>


 <p className="desc"> Selon la formule consacrée, l’indemnisation a pour objet de replacer autant que possible la victime dans l’état où elle se trouvait si le fait dommageable n’avait pas eu lieu.
</p>


 <p className="desc" id="PI"> Le rôle d’un avocat de victime est essentiel pour vous permettre que tous vos préjudices soient bien évalués lors de l’expertise médicale mais également par la suite.</p>

 <p className="desc"> Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>





    <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> PREJUDICES RÉPARABLES </h2>


 <p className="desc"> Il est important pour une victime de connaître les préjudices qui sont juridiquement réparables. </p>


<p className="desc"> En effet, il n’est pas rare qu’elle se présente seule à une expertise médicale ou signe un accord d’indemnisation avec l’assureur sans qu’elle ne connaisse véritablement l’étendue des préjudices dont elle peut obtenir réparation.
</p>

<p className="desc"> Or, quand une victime ne sait pas quel préjudice peut être indemnisé, cela a deux conséquences :</p>



<p className="desc-s"> - Si l’expert ne l’interroge pas sur un préjudice, celui-ci ne sera pas abordé et sera passé sous silence par l’expert ce qui aura pour conséquence que l’assureur ne lui fera aucune proposition à ce titre.</p>


<p className="desc"> - La victime peut être encline à accepter une sous-indemnisation. Cela n’est pas sans conséquence pour l’avenir car il arrive souvent que des préjudices importants soient oubliés et que la victime se rendre compte bien plus tard que l’indemnisation qui lui a été versée ne compense pas à ses véritables besoins.</p>

<p className="desc">
Une nomenclature dénommé nomenclature Dintilhac fixe la liste non exhaustive des préjudices dont une victime peut solliciter réparation (accéder à la nomenclature)
</p>

<p className="desc">
En application de cette nomenclature, sont tout d’abord indemnisables les préjudices de la victime directe c’est à dire celle qui a subi le dommage dans sa personne ou ses biens et les préjudices de la victime dite indirecte c’est-à-dire celles qui a souffert d’un préjudice parce qu’une première personne, la victime directe, avec laquelle elle avait des liens, a subi un dommage (parents, fratrie …).</p>


<p className="desc"> Une victime peut obtenir indemnisation de ses préjudices avant et après la consolidation. Il s’agit de préjudices dits patrimoniaux c’est-à-dire des préjudices évaluables sur le plan économiques (pertes de gains professionnels …) et des préjudices extrapatrimoniaux c’est-à-dire des préjudices personnels (souffrances endurées, préjudice esthétique …).</p>
<p className="desc"> Si vous souhaitez obtenir réparation de vos préjudices à la suite d’un accident ou d’une infraction pénale, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>





  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> LE CERTIFICAT MEDICAL INITIAL (CMI)</h2>


  <p className="desc"> Le certificat médical initial (CMI) est une pièce fondamentale du dossier en réparation du dommage corporel. </p>

   <p className="desc">

Si vous êtes pris en charge par les secours dans les suites de votre accident et hospitalisé, l’établissement d’accueil devra établir un certificat médical initial (CMI). Ce certificat médical initial fera l’inventaire des blessures constatées et fixera un taux d’incapacité. </p>

 <p className="desc">
Dans le cas où vous ne seriez pas hospitalisé, il est conseillé de vous rendre sans tarder chez votre médecin traitant afin que ce dernier puisse certifier des lésions qu’il a lui-même constaté suite à son examen clinique. <span id="EM"> </span>
Ce certificat  initial est essentiel pour rattacher les lésions à l’accident subi. </p>

  <p className="desc" > Pour toute information complémentaire, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>


 <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> L'EXPERTISE MEDICALE </h2>


  <p className="desc"> L’expertise médicale est une étape très importante de la procédure en réparation du dommage corporel en ce qu’elle a pour objet d’évaluer si les conditions de la responsabilité sont réunies et sur d’évaluer les préjudices subis par la victime sur le plan médical (en savoir plus sur les préjudices réparables).</p>
<p className="desc">L’Expertise peut être mise en place dans différents cadres :</p>
<p className="desc">  <span className="bold"> Le cadre purement amiable : </span> cela consiste en l’organisation d’une expertise amiable
avec l’établissement mis en cause ou son assureur.</p>
<p className="desc-s">  <span className="bold"> Le cadre de la Commission de conciliation et d’indemnisation des accidents
médicaux:  </span>  Cette commission a été créée en 2002 par la loi Kouchner. Cette procédure présente l’avantage de la gratuité (procédure et frais d’expertise) et d’une certaine rapidité. Cependant, la CCI n’est compétente que pour les accidents les plus graves. Le seuil de gravité est fixé par décret.
</p>
<p className="desc-s" id="AT">  <span className="bold">  Le cadre judiciaire : </span>  Ce recours auprès du Tribunal consiste à solliciter la désignation d’un expert indépendant. Les frais d’expertises sont à la charge du demandeur mais peuvent être pris en charge par une assurance de protection juridique dont vous seriez éventuellement titulaire.
</p>
<p className="desc"> Si vous souhaitez mettre en place une expertise médicale pour évaluer vos préjudicies, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.</p>


  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ACCIDENT DU TRAVAIL  </h2>


  <p className="desc"> Un accident est qualifié d’accident du travail lorsqu’il est survenu ou salarié par le fait ou à l’occasion du travail et ce quelqu’un soit la cause. </p>

    <p className="desc">La reconnaissance en accident du travail ouvre de nombreux avantages au salarié : </p>


     <p className="desc-s"> - une prise en charge de ses frais de santé à 100 % ainsi qu’une dispense d’avance de frais   </p>

 <p className="desc-s"> - le versement d’indemnités journalières en cas d’arrêt maladie sans durée limite jusqu’à la consolidation </p>




<p className="desc-s">- à compter de la consolidation, en cas de séquelles, le versement d’une rente ou d’un capital en fonction du taux d’incapacité retenue.  </p>
<p className="desc-s" id="ATR"> - l’application de règles protectrices en droit du travail (doublement de l’indemnité de licenciement en cas de licenciement pour inaptitude ; protection contre le licenciement …). </p>
<p className="desc"> En cas de refus de reconnaissance d’un accident du travail ou de désaccord sur votre taux d’IPP, Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>




 <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ACCIDENT DE TRAJET  </h2>


    <p className="desc"><span className="bold"> Il y a accident de trajet lorsque celui-ci est survenu pendant le trajet effectué entre sa résidence et son lieu de travail, ainsi que sur le trajet entre son lieu de travail et le lieu de restauration où le salarié se rend pendant la pause repas. </span> </p>


      <p className="desc" > L’accident de trajet est assimilable à un accident du travail et ouvre droit aux mêmes avantages, à savoir :
 </p>



      <p className="desc-s"> - une prise en charge de ses frais de santé à 100 %
       ainsi qu’une dispense d’avance de frais   </p>

        <p className="desc-s"> - le versement d’indemnités journalières en cas d’arrêt maladie sans durée limite jusqu’à la consolidation   </p>


        <p className="desc-s"> - à compter de la consolidation, en cas de séquelles, le versement d’une rente ou d’un capital en fonction du taux d’incapacité retenue. </p>

        <p className="desc-s" id="AM" > - l’application de règles protectrices en droit du travail (doublement de l’indemnité de licenciement en cas de licenciement pour inaptitude ; protection contre le licenciement …).   </p>


  <p className="desc">En cas de refus de reconnaissance d’un accident du travail ou de désaccord sur votre taux d’IPP, vous pouvez contacter Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.   </p>

   <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg>ACCIDENT DE MISSION </h2>


    <p className="desc"> La jurisprudence assimile l’accident survenu lors d’une mission professionnelle à un accident du travail.
 </p>


     <p className="desc" id="FIE"> En effet, le salarié effectuant une mission a droit à la protection (…) pendant tout le temps de la mission qu'il accomplit pour son employeur, peu important que l'accident survienne à l'occasion d'un acte professionnel ou d'un acte de la vie courante, sauf la possibilité pour l'employeur ou la caisse de rapporter la preuve que le salarié avait interrompu sa mission pour un motif personnel.  </p>

       <p className="desc">Si vous avez subi un accident dans le cadre de votre mission, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous. </p>




   <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> FAUTE INEXCUSABLE DE L'EMPLOYEUR </h2>


    <p className="desc"> <span className="bold">La procédure en reconnaissance de faute inexcusable permet à un salarié victime d’un accident du travail ou d’une maladie professionnelle d’agir contre l’employeur pour obtenir, d’une part, indemnisation de ses préjudices et, d’autre part, une majoration de l’indemnisation forfaitaire (rente ou capital) versée par la sécurité sociale. </span> </p>


     <p className="desc"> Pour que l’employeur soit tenu d’indemniser les préjudices du salarié, il vous faudra apporter la preuve de la faute inexcusable de votre employeur. Selon la jurisprudence, la faute est inexcusable lorsque l’employeur avait ou aurait dû avoir conscience du danger auquel était exposé le salarié, et qu’il n’a pas pris les mesures nécessaires pour l’en préserver.   </p>

       <p className="desc" id="IN">L’assistance d’un avocat est essentielle que ce soit au niveau de la reconnaissance de la faute inexcusable de votre employeur ou pour l’obtention de l’indemnisation de vos préjudices en cas de faute inexcusable. </p>
       <p className="desc" > Pour engager une procédure de faute inexcusable de l’employeur, vous pouvez contacter Maitre Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.  </p>



 <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> INFECTIONS NOSOCOMIALES </h2>


    <p className="desc"> Une infection est dite « nosocomiale » lorsqu’elle est contractée par un patient à l’occasion d’un séjour dans un établissement de santé public ou privé ou d’une prise en charge par un professionnel de santé et qu’elle n’était pas présente à l’admission.</p>


     <p className="desc"> L’infection peut avoir une origine exogène c’est à dire qu’elle résulte de facteurs extérieures au patient (environnement hospitalier, instrument, personnel…) ou endogène c’est à dire que le patient est contaminé par les propres germes dont il est porteur sain, en général à l’occasion d’un acte invasif (intervention chirurgicale ...) </p>

       <p className="desc">La loi a mis en place un régime d’indemnisation spécifique et ce afin de faciliter l’indemnisation des victimes. </p>
       <p className="desc"> L’établissement de santé est présumé responsable. Il n’est pas nécessaire pour le patient de démontrer une faute d’asepsie ou d’hygiène de l’établissement.
  </p>

  <p className="desc"> Si l’infection est qualifiée d’infection nosocomiale, l’établissement engage sa responsabilité et ne peut s’exonérer même en démontrant son absence de faute.

  </p>


<p className="desc"> La seule possibilité pour l’établissement de s’exonérer de sa responsabilité consiste à prouver que l’infection nosocomiale est due à une cause étrangère qui est en général très difficile à caractériser.
  </p>


<p className="desc" id="AMNF"> Quand l’infection est survenue dans un cabinet libéral, la présomption ne s’applique pas et dans ce cas, le patient devra démontrer que le médecin a commis une faute d’hygiène ou d’asepsie qui a provoqué l’infection en cause.
  </p>

<p className="desc"> Vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
  </p>



  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ACCIDENT MÉDICAL NON FAUTIF </h2>


    <p className="desc"> Pour engager la responsabilité d’un établissement ou d’un professionnel de santé, le patient doit démontrer que ce dernier a commis une faute médicale.</p>


     <p className="desc"> Cependant, la loi permet à un patient sous certaines conditions d’obtenir indemnisation de ses préjudices par un office public, l’ONIAM, lorsqu’ils sont la conséquence d’un accident médical non fautif c’est à dire lorsque le dommage est lié à un risque inhérent à l’acte médical que le médecin ne pouvait maitriser.</p>

       <p className="desc">La loi réserve cette possibilité d’indemnisation aux accidents médicaux les plus graves.
 </p>
       <p className="desc"> Est considéré comme grave l’accident médical ayant entraîné un dommage supérieur aux seuils suivants:
  </p>

  <p className="desc-s"> - un taux d'atteinte permanente à l'intégrité physique ou psychique (AIPP) supérieur à 24 % ;

  </p>


<p className="desc-s"> - ou un arrêt temporaire des activités professionnelles (ATAP) pendant une durée au moins égale à six mois consécutifs ou à six mois non consécutifs sur une période de douze mois ;
  </p>


<p className="desc-s"> - ou des gênes temporaires constitutives d'un déficit fonctionnel temporaire (DFT) supérieur ou égal à un taux de 50 % pendant une durée au moins égale à six mois consécutifs ou à six mois non consécutifs sur une période de douze mois ;
  </p>

<p className="desc">Ou à titre exceptionnel :
  </p>

  <p className="desc-s"> - lorsque la victime est déclarée définitivement inapte à exercer l'activité professionnelle qu'elle exerçait avant l'accident médical ;
  </p>

  <p className="desc-s"> - lorsque l'accident médical, l'affection iatrogène ou l'infection nosocomiale occasionne des troubles particulièrement graves, y compris d'ordre économique, dans ses conditions d'existence (TPGCE).
  </p>

  <p className="desc" id="FM">Pour pouvoir prétendre à ce dispositif, il faut, en outre, que le dommage du patient soit directement imputable à des actes de prévention, de diagnostic ou de soins et qu’ils aient eu pour le patient des conséquences anormales au regard de son état de santé comme de l’évolution prévisible de celui-ci.
  </p>

  <p className="desc">
Si vous envisagez une action en responsabilité médicale, vous pouvez contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
  </p>


  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> FAUTE MÉDICALE </h2>


    <p className="desc"> Pour engager la responsabilité d’un établissement ou d’un professionnel de santé, il faut démontrer que ces derniers ont commis une faute médicale autrement dit qu’ils n’ont pas respecté les règles de l’art. </p>


     <p className="desc">Les fautes médicales peuvent être des fautes techniques ou d’information. Elles peuvent, en outre, avoir été commises à tous les stades de la prise en charge (diagnostic, soins, suivi …).
</p>

       <p className="desc">Pour déterminer si une faute a été commise, il convient de recourir à une expertise médicale.
 </p>
       <p className="desc"> La faute n’est pas cependant suffisante à engager la responsabilité d’un professionnel, encore faut-il prouver qu’elle est bien à l’origine du préjudice subi par la victime.  </p>


       <p className="desc"> Si vous envisagez une action en responsabilité médicale, vous pouvez contacter Maître Quentin MAMERI, avocat de victime à Paris, par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
  </p>







</div>

     <VisitCard />
    </div>


      </div>
      </Layout>


      )
  }
}


  export default Reparation
