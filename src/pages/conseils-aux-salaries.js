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

class ConseilsSala extends  Component {

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



    return(
<Layout>
<div className="background-hono">
  <div className="bigbox">
      <div className="bleft">

<h1 className="title-spe"> CONSEILS AUX SALARIÉS </h1>

  <h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> NE DÉMISSIONEZ PAS SANS AVOIR SOLLICITÉ PRÉALABLEMENT L'AVIS D'UN AVOCAT </h2>

 <p className="desc">
Nombre de salariés démissionnent de leur emploi. Or, ce n’est pas toujours un choix libre et éclairé.

Cette démission peut faire suite à des manquements de l’employeur : pression, dégradation importante des conditions de travail, manquements salariaux, harcèlement, etc. </p>

<p className="desc"> <span className="strong"> La démission n’est pas sans conséquence.  En cas de démission, vous n’aurez le droit à aucune indemnité de départ et vous vous ne pourrez pas bénéficier du versement des allocations chômages. La démission vous privera, en outre, du bénéfice de la portabilité de vos contrats d’assurance mutuelle et prévoyance. </span> </p>

<p className="desc"> Avant de vous engager dans ce choix, il est donc important de prendre conseil auprès d’un avocat pour être conseillé et accompagné dans vos démarches amiables ou judiciaires.

En effet, le droit du travail permet, sous certaines conditions, au salarié de prendre l’initiative d’une rupture de son contrat de travail aux torts de l’employeur (prise d’acte de rupture ou résiliation judiciaire).

N’hésitez pas à contacter Me MAMERI qui vous conseillera utilement sur les modes de rupture appropriés au regard de votre situation et vous présentera l’ensemble des options procédurales pour défendre au mieux vos intérêts. </p>



<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>


  </svg> SOLLICITER LA COMMUNICATION DE VOTRE DOSSIER MÉDICAL AUPRÈS DE LA MÉDECINE DU TRAVAIL </h2>

   <p className="desc">  Vous avez été amené à rencontrer le médecin du travail dans le cadre d’une visite à votre initiative ou celle de votre employeur.

Les constatations du médecin du travail peuvent être très précieuses. Elles peuvent par exemple participer à la démonstration d’une situation de harcèlement moral.

Sachez que vous bénéficier d’un droit d’obtenir directement la communication de votre dossier médical auprès de la médecine du travail. La demande se fait par courrier recommandé avec accusé de réception. Vous devez joindre à ce courrier une copie recto/verso de votre pièce d’identité.

N’hésitez pas à contacter Me MAMERI qui pourra vous accompagner dans vos démarches. </p>





<h2 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#F2DC17"/>
  </svg> NE JAMAIS SIGNER UNE RUPTURE CONVENTIONNELLE SANS L'AVOIR PRÉALABLEMENT SOUMIS À UN AVOCAT </h2>

   <p className="desc">Avant de vous engager dans une telle démarche, il est primordial de prendre contact préalablement avec un avocat.

Il pourra vous conseiller sur l’opportunité de ce mode de rupture au regard de votre situation. En effet, il arrive souvent qu’un salarié initie ou accepte une rupture conventionnelle suite à des pressions de l’employeur, des faits de harcèlement ou plus généralement de manquements graves commis par ce dernier dans la relation de travail.

Dans ce cas, d’autres modes de ruptures plus appropriés pourraient être envisagés comme par exemple la résiliation judiciaire ou la prise d’acte de rupture du contrat de travail. </p>

<p className="desc">  Une analyse de votre dossier permettra de vous conseiller utilement sur la meilleure stratégie envisageable au regard de votre situation.

L’avocat pourra vous accompagner dans la démarche tendant à obtenir une rupture conventionnelle mais également pour négocier au mieux vos indemnités de départ.

N’hésitez pas à contacter Me MAMERI qui vous conseillera utilement et vous accompagnera dans les démarches pour défendre au mieux vos intérêts.</p>

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



export default ConseilsSala;
