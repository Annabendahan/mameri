import React from "react"
import { Link } from "gatsby"
import '../components/noshonoraires.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/pichonoraires.png';

const NosHonoraires = () => (
  <Layout>
  <SEO title="Page two" />

  <div className="background-hono">
    <div className="noshonoraires-box">
      <div className="noshonoraires-left">
        <img  src={pic1} className="hono-pic" alt="fireSpot" />
      </div>
      <div className="noshonoraires-right">
        <h1 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#F2DC17"/>
        </svg> EVALUATION DE LA SITUATION </h1>
        <p className="desc"> Dès le premier contact téléphonique, Me MAMERI procédera à <span className="bold"> une première évaluation de votre situation </span> pour vérifier si votre affaire s’intègre bien dans le champ de compétence de son Cabinet et vous conviendrez ensemble d’un premier rendez-vous.
        Chaque affaire étant particulière, ce  premier rendez-vous est essentiel pour que Me MAMERI puisse vous rencontrer, prendre connaissance des pièces du dossier et vous proposer une stratégie personnalisée. La question des honoraires sera abordée sans aucun tabou et de manière totalement transparente. Il vous sera remis une <span className="bold"> convention d’honoraire détaillée </span> qui vous permettra de savoir ce que cela va vous coûter. </p>
      </div>
    </div>
  </div>


  <div className="high">
  “Les honoraires sont fixés selon les usages, en fonction de la situation de fortune du client, de la difficulté́ de l’affaire, des frais exposés par l’avocat, de sa notoriété́ et des diligences de celui-ci (article 11-2 du règlement intérieur de la profession d’avocat)”
  </div>

  <div className="background-hono">

    <div className="noshonoraires-box">

       <div className="noshonoraires-left">
      <h1 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> HONORAIRE FIXE </h1>
      <p className="desc"> Elle comprend un honoraire fixe qui correspond à l’honoraire pour les diligences réalisées dans votre affaire. Il sera rappelé que « Toute fixation d’honoraires, qui ne le serait qu’en fonction du résultat judiciaire, est interdite. ». Un avocat est donc juridiquement obligé de pratiquer un tel honoraire et ne peut se rémunérer sur le seul résultat.
      <span className="bold"> L’honoraire fixe est établi en fonction de la procédure à engager, des difficultés de l’affaire et des diligences réalisées. </span> Il est fixé de manière forfaitaire pour que vous puissiez prévoir à l’avance ce que cela va vous coûter. Ce n’est qu’exceptionnellement, en fonction des spécificités ou de la nature de l’affaire, que Me MAMERI pratiquera un honoraire au temps passé. Dans ce cas, il sera mentionné dans la convention d’honoraires le nombre prévisible d'heures nécessaires au traitement de votre affaire.
      Maître MAMERI peut, en fonction des situations, proposer des facilités de paiement.</p>
      </div>


      <div className="noshonoraires-right">
      <h1 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> HONORAIRE DE RESULTAT </h1>
      <p className="desc"> A l’honoraire fixe s’ajoute un honoraire de résultat qui s’applique sur <span className="bold"> le montant des sommes ou condamnations obtenues (entre 10 % et 15 %). </span></p>


      <h1 className="title"> <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg> ASSURANCE DE PROTECTION JURIDIQUE </h1>
      <p className="desc"> Les honoraires fixes de Me Quentin MAMERI <span className="bold"> peuvent être couverts en tout ou partie par une assurance de protection juridique dont vous seriez éventuellement titulaire soit pour l’avoir souscrite de manière autonome, soit de manière accessoire à un autre contrat (assurance habitation, assurance des moyens de paiement, défense-recours attaché au contrat d’assurance automobile …). </span>

      Afin de connaître les conditions et modalités de la garantie de votre assureur, vous pouvez solliciter les conditions générales et particulières de votre contrat auprès de la compagnie d’assurance.

      Maître MAMERI pourra se charger de se rapprocher de votre compagnie d’assurance de protection juridique pour les interroger sur la mise en œuvre et sur l’étendue de leur prise en charge.</p>
      </div>
    </div>
  </div>

  </Layout>
  )

export default NosHonoraires;
