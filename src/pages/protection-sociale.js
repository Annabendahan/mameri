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

class Protection extends  Component {

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
      <h1> PROTECTION SOCIALE </h1>


       <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> LA RQTH  </h2>

<p className="desc"> La RQTH est reconnue à toute personne dont les possibilités d'obtenir ou de conserver un emploi sont effectivement réduites par suite de l'altération d'une ou plusieurs fonctions (physique, sensorielle, mentale ou psychique). </p>

<p className="desc"> Ce statut permet de bénéficier de plusieurs avantages au niveau de l’emploi (bénéfice de l’obligation d’emploi pour les personnes en situation de handicap, dispositifs d’insertion professionnelle…). </p>



<p className="desc"> En cas de refus de RQTH, vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous. </p>








  <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> INVALIDITÉ  </h2>


  <p className="desc">L’invalidité est un statut accordé par la sécurité sociale à un assuré dont la capacité de travail est réduite des 2/3 suite à un accident ou une maladie sans caractère professionnel et qui lui donne droit notamment au versement d’une pension et à une prise en charge de ses frais de santé à 100 %. </p>

    <p className="desc">En effet, si la restriction de la capacité de travail fait suite à un accident du travail ou une maladie professionnelle, le salarié relève de la législation sur les risques professionnels et pourra bénéficier, en cas de consolidation avec séquelles, d’une rente ou d’un capital.
 </p>


     <p className="desc">
Pour bénéficier d’un placement en invalidité, il faut réunir des conditions administratives (durée d’affiliation d’au moins 12 mois / durée de cotisation minimum) et médicales (restriction de la capacité de travail des 2/3 au moins). </p>

 <p className="desc"> Le montant de la pension d’invalidité varie en fonction du niveau d’invalidité : </p>




<p className="desc"> - <span className="bold"> Pension d’invalidité catégorie 1  : </span> Invalides capables d'exercer une activité rémunérée </p>
<p className="desc"> - <span className="bold"> Pension d’invalidité catégorie 2 : </span> Invalides absolument incapables d'exercer une profession quelconque </p>
<p className="desc" id="TPT"> - <span className="bold"> Pension d’invalidité catégorie 3 : </span> Invalides qui, étant absolument incapables d'exercer une profession, sont, en outre, dans l'obligation d'avoir recours à l'assistance d'une tierce personne pour effectuer les actes ordinaires de la vie. </p>

  <p className="desc" >En cas de refus d’invalidité pour des raisons médicales ou administratives ou en cas de contestation du niveau d’invalidité, vous pouvez contacter Me Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous.
 </p>



 <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> TEMPS PARTIEL THÉRAPEUTIQUE  </h2>


    <p className="desc">Le temps partiel thérapeutique est une prestation de la sécurité sociale permettant au salarié malade de reprendre son travail à temps réduit pour favoriser une amélioration de son état de santé. </p>


      <p className="desc" id="AT"> Le temps partiel thérapeutique a pour finalité de permettre au salarié de reprendre progressivement son activité professionnelle. La Caisse de sécurité sociale versera au salarié un complément du revenu qu’il perçoit à temps partiel sous forme d’indemnités journalières.

 </p>

 <p className="desc" > Le temps-partiel thérapeutique est limitée dans le temps. </p>



      <p className="desc" > En cas de refus de temps partiel thérapeutique, vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous. </p>


   <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ARRÊT DE TRAVAIL </h2>


    <p className="desc">L’arrêt de travail permet à un salarié dans l’impossibilité de travailler de justifier son absence à son employeur et de bénéficier du versement d’indemnités journalières par la sécurité sociale pour compenser sa perte de revenu. </p>


      <p className="desc">Pour bénéficier du versement d’indemnités journalières, il faut réunir des conditions administratives (durée d’affiliation d’au moins 12 mois / durée de cotisation minimum) et médicales (être dans l’impossibilité de travailler).
 </p>


      <p className="desc">En cas de refus ou de cessation du versement d’indemnités journalières pour des raisons administratives ou médicales, vous pouvez contacter Me Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous. </p>


<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> AFFECTION DE LONGUE DURÉE</h2>


  <p className="desc"id="AAH"> L’affection de longue durée (ALD) permet à un assuré social de bénéficier d’une prise en charge de ses frais de santé à 100 %, d’une dispense d’absence de frais, et d’un prolongement de la durée de ses droits aux indemnités journalières (3 ans à compter du premier arrêt en lien avec l’ALD). </p>


   <p className="desc"  > La demande d’ALD est faite par l’intermédiaire du médecin-traitant.</p>





  <p className="desc"  > En cas de refus d’ALD, vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous.
 </p>




  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> ALLOCATIONS AUX ADULTES HANDICAPÉS</h2>


    <p className="desc"> L’allocation aux adultes handicapés garantit un minimum de revenu aux personnes en situation de handicap ayant de faibles ressources et atteint d’un certain niveau d’incapacité.
</p>



      <p className="desc" id="CMI"> D’un point de vue médical, l’AAH est attribué : - aux personnes atteintes d’un taux d’incapacité de 80 % - aux personnes atteintes d’un taux d’incapacité compris entre 50 et 79 % et présentant une restriction substantielle et durable d’accès à l’emploi. D’un point de vue administratif, pour bénéficier de l’AAH, il faut également résider en France de manière permanente et être âgé de 20 ans ou plus. En cas de refus d’AAH pour des raisons médicales ou administratives, vous pouvez contacter Maître Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous.
 </p>


    <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> CARTE DE MOBILITÉ-INCLUSION</h2>


  <p className="desc"> <span className="bold">La CMI permet de faciliter les transports et les déplacements. </span></p>
  <p className="desc">Il existe trois sortes de CMI :</p>


   <p className="desc"> - <span className="bold"> La CMI mention invalidité </span> permet d'obtenir une priorité d'accès aux places dans les transports en commun, dans les espaces et salles d'attente dans les établissements et les manifestations accueillant du public, et de bénéficier de certains avantages commerciaux.

Elle est attribuée aux personnes qui présentent un taux d'incapacité permanente d'au moins 80 %, ou qui sont en invalidité 3ème catégorie, ou pour les bénéficiaires de l’Allocation personnalisé d’autonomie (APA) classé en groupe 1 ou 2 de la grille Aggir. </p>


 <p className="desc"> - <span className="bold"> La CMI mention priorité </span> permet d'obtenir une priorité d'accès aux places dans les transports en commun, dans les espaces et salles d'attente dans les établissements et les manifestations accueillant du public.

Elle est attribuée aux personnes atteintes d'une incapacité inférieure à 80 % rendant la station debout pénible. </p>


 <p className="desc" id="PCH"> - <span className="bold"> La CMI mention stationnement </span>  permet d'utiliser gratuitement et sans limitation de durée, toutes les places de stationnement ouvertes au public.

Elle est attribuée aux personnes atteintes d'un handicap qui réduit de manière importante et durable leur capacité et leur autonomie de déplacement à pied ou qui impose qu’elles soient accompagnées par une tierce personne dans ses déplacements ou pour les bénéficiaires de l’Allocation personnalisé d’autonomie (APA) classé en groupe 1 ou 2 de la grille Aggir. </p>


<p className="desc" > En cas de refus de CMI pour des raisons médicales ou administratives, vous pouvez contacter Me Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous.</p>






   <h2 className="title" > <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> PRESTATION DE COMPENSATION DU HANDICAP</h2>


   <p className="desc"> La PCH est une prestation permettant de prendre en charge les dépenses liées au handicap des personnes résidant en France (aide humaine, aides techniques, aménagements …). </p>

     <p className="desc"> Pour pouvoir bénéficier de la PCH, vous devez vous trouver, sur le plan médical, dans l'une des situations suivantes : </p>


     <p className="desc"> - Vous rencontrez une difficulté absolue pour la réalisation d'une activité (mobilité, entretien personnel, communication, tâches et exigences générales et relations avec autrui). La difficulté est qualifiée d'absolue si l'activité ne peut pas du tout être réalisée par la personne elle-même, </p>

     <p className="desc"> - Vous avez une difficulté grave pour la réalisation d'au moins 2 activités (mobilité, entretien personnel, communication, tâches et exigences générales et relations avec autrui). La difficulté à accomplir ces activités est qualifiée de grave lorsqu'elles sont réalisées difficilement et de façon altérée par elle-même. </p>


     <p className="desc"> En cas de refus de PCH ou d’un désaccord quant à l’évaluation des besoins, vous pouvez contacter Me Quentin MAMERI par téléphone, mail ou par le formulaire de contact afin d’évoquer votre situation et de convenir d’un rendez-vous. </p>


</div>

     <VisitCard />
    </div>


      </div>
      </Layout>


      )
  }
}


  export default Protection
