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

<h1 > CONSEILS AUX SALARIÉS </h1>

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

     <VisitCard />
    </div>



</div>
  </Layout>
      )
  }
}



export default ConseilsSala;
