import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import VisitCard from "../components/VisitCard"
import MotsClefs from "../components/Mots-Clefs"
import pic1 from "../images/AdobeStock_1457653601.png"

const Mentions = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1>MENTIONS LÉGALES </h1>

          <img src={pic1} className="picdefense" alt="fireSpot" />

          <h2 className="title">
            {" "}
            I - CONDITIONS GÉNÉRALES D’UTILISATION DU SITE{" "}
          </h2>

          <p className="desc">
            {" "}
            Les présentes Conditions Générales d’Utilisation (« CGU ») sont
            applicables à toute personne physique qui consulte le Site
            www.qm-avocat.com (ci-après « Utilisateur(s) »). En utilisant le
            Site, chaque Utilisateur accepte les mentions légales accessibles
            ci-dessous et les présentes conditions d’utilisation du Site, sans
            réserve, modification ou restriction. Ces conditions d’utilisation
            sont susceptibles d’être modifiées ou complétées à tout moment, les
            utilisateurs du site www.qm-avocat.com sont donc invités à les
            consulter de manière régulière.{" "}
          </p>
          <h2 className="title"> II - INFORMATIONS LÉGALES </h2>

          <p className="desc">
            <b>Responsable de la publication : </b> Me Quentin MAMERI, Siret
            n°789 279 783 00052, 16 rue Sauffroy, 75017 PARIS <br /> - Téléphone
            : +33 (0)6 40 84 36 19 <br /> - Télécopie : +33 (0)1 84 10 55 86{" "}
            <br /> - E-mail : mameri@qm-avocat.com.
            <br /> Me Quentin MAMERI, en sa qualité d’avocat inscrit au barreau
            de Paris, est soumis aux règles professionnelles applicables à la
            profession d’avocat. <br /> <b>Créatrice : </b> Madame{" "}
            <a href="annabdh.com" target="blank">
              Anna BENDAHAN{" "}
            </a>{" "}
            <br />
            <b>Hébergeur :</b> Société OVH - RCS Lille Métropole 424 761 419
            00045 - Siège social : 2 rue Kellermann - 59100 Roubaix (France).
            <br /> <b>Crédit photo : </b>© Quentin MAMERI, © Adobestock
          </p>

          <h2 className="title"> III - RESPONSABILITÉ </h2>

          <p className="desc">
            Me Quentin MAMERI s’engage à faire tout son possible pour assurer
            aux Utilisateurs une accessibilité du Site à tout moment. Toutefois,
            la responsabilité de Me Quentin MAMERI ne peut être engagée en cas
            de : <br /> - défaillance, panne, difficulté ou interruption de
            fonctionnement, empêchant ou gênant l’accès au Site ou à une de ses
            fonctionnalité, <br /> - l’inaccessibilité temporaire ou définitive
            au Site, <br />- l’utilisation frauduleuse par des tiers des
            informations mises à disposition sur le Site. <br />
            La responsabilité de Me Quentin MAMERI ne saurait être engagée en
            cas de dommages matériels ou immatériels résultant de l’accès ou de
            l’utilisation du site ou des informations qui y figurent, quelle
            qu’en soit la nature. <br /> L’utilisateur de ce site devra prendre
            toutes les mesures nécessaires afin de se protéger d’éventuelles
            contaminations par virus ou autres infections circulant sur
            internet. <br /> Me Quentin MAMERI décline toute responsabilité en
            cas de dommages subis par lutilisateur à raison notamment de la
            perte, de la détérioration ou de l'altération de fichiers, de la
            transmission de virus qui pourraient infecter son équipement
            informatique ou tout autre bien à l'occasion de la connexion et/ou
            de la consultation et/ou de l'utilisation du site.
          </p>

          <h2 className="title">IV - CONTENU ET MISE À JOUR </h2>

          <p className="desc">
            Le site www.qm-avocat.com a pour objet de fournir une information
            concernant l’ensemble des activités de Me Quentin MAMERI et
            notamment ses domaines d’intervention. <br /> Il n’a pas vocation à
            fournir des conseils personnalisés ou des consultations juridiques
            dans les domaines d’expertise du Cabinet. Ces informations ne
            sauraient par ailleurs être considérées comme constituant un
            démarchage, une sollicitation et/ou une offre de services. <br /> Me
            Quentin MAMERI s’efforce de fournir sur le site www.qm-avocat.com
             des informations aussi précises et actualisées que possible.
            Toutefois, il ne pourra être tenue responsable des omissions, des
            inexactitudes et des carences dans la mise à jour, qu’elles soient
            de son fait ou du fait des tiers partenaires qui lui fournissent ces
            informations. En effet, les informations accessibles sur le site
            peuvent nécessiter une mise à jour qui n’a pu être diffusée à la
            date de leur consultation pour des motifs techniques ou non. <br />{" "}
            Toutes les informations indiquées sur le site www.qm-avocat.com sont
            données à titre indicatif et non exhaustive.
          </p>

          <h2 className="title">V - PROPRIÉTÉ INTELLECTUELLE </h2>

          <p className="desc">
            {" "}
            L’intégralité du site www.qm-avocat.com tant dans son contenu que
            dans sa structure, ainsi que chacun des éléments qui le compose
            notamment les données, logiciels, textes, images animées ou non,
            sons, fichiers sont la propriété exclusive de Me Quentin MAMERI ou
            de tiers qui lui ont accordé une licence. <br /> Les Utilisateurs
            s’interdisent en conséquence toute reproduction, représentation,
            utilisation ou adaptation, sous quelque forme que ce soit, à titre
            onéreux ou gratuit, de tout ou partie du Site et de son Contenu,
            sans l’accord préalable et écrit de Me Quentin MAMERI. <br /> Toute
            représentation totale ou partielle du site ou d’un de ses éléments
            sans l’autorisation expresse de Me Quentin MAMERI est formellement
            interdite et constituerait une contrefaçon prévue et réprimée par
            les articles L.335-2 et suivants du Code de la propriété
            intellectuelle.
          </p>

          <h2 className="title"> VI - MÉDIATEUR A LA CONSOMMATION </h2>

          <p className="desc">
            Le client consommateur est informé de la possibilité de recourir, en
            cas de contestation relative aux présentes conditions générales, à
            une procédure de médiation conventionnelle ou à tout autre mode
            alternatif de règlement des différends. <br /> A cet effet, le
            client consommateur est informé qu’il peut saisir, après avoir tenté
            au préalable de résoudre à l’amiable le litige directement avec le
            cabinet, le médiateur à la consommation de la profession d’avocat –
            180 boulevard Haussmann 75008 Paris. <br /> Pour davantage
            d’informations sur le processus de médiation, le client consommateur
            est invité à consulter le site internet du médiateur de à la
            consommation de la profession d’avocat :
            https://mediateur-consommation-avocat.fr/. <br /> Le médiateur peut
            notamment être contacté par courrier électronique à l’adresse
            suivante : mediateur@mediateur-consommation-avocat.fr, par courrier
            postal à l’adresse précitée ou en remplissant le formulaire en ligne
            accessible à l’adresse suivante https://mediateur-
            consommation-avocat.fr/contacter-le-mediateur/.
          </p>

          <h2 className="title">VII - LOI ET JURIDICTION COMPÉTENTE</h2>

          <p className="desc">
            La loi française est applicable tant pour les règles de forme que de
            fond. Tout litige découlant directement ou indirectement de
            l’utilisation du site relèvera de la compétence des juridictions
            françaises.{" "}
          </p>

          <h2 className="title">
            VIII - PROTECTION DES DONNÉES A CARACTÈRE PERSONNEL
          </h2>

          <p className="desc">
            La présente politique de confidentialité est fondée sur le Règlement
            UE 2016/679 relatif à la protection des données (RGPD). Elle a pour
            objectif de vous informer sur le traitement de vos données à
            caractère personnel. <br /> Les données à caractère personnel sont
            définis comme toute information se rapportant à une personne
            physique identifiée ou identifiable. <br /> Cette politique de
            confidentialité ne s'applique qu'aux renseignements recueillis par
            le site www.qm-avocat.com, bien que ce dernier puisse contenir des
            liens vers d'autres sites externes que Me MAMERI ne peut
            systématiquement vérifier. <br /> Nous nous réservons la possibilité
            de modifier à tout moment cette politique de confidentialité, ces
            modifications entrant en vigueur immédiatement. Or, à chaque
            nouvelle utilisation du présent site, vous vous soumettez à la
            politique de confidentialité en vigueur. Nous vous invitons donc à
            relire cette page de manière régulière.
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
            Quels renseignements sont collectés sur ce site ?
          </h2>

          <p className="desc">
            Lorsque vous visitez le site internet de Me Quentin MAMERI, vous
            êtes anonyme. Les informations collectées au cours de votre
            navigation servent à analyser votre comportement sur ce site et
            l'usage que vous en avez afin d'améliorer votre expérience
            utilisateur. Les autres données personnelles que nous collectons,
            tels que vos nom, prénom, adresse postale, numéro de téléphone ou
            adresse mail, ainsi que les informations relatives à votre demande
            ne sont collectées que si vous acceptez de nous les fournir, par
            exemple lorsque vous utilisez le formulaire de contact pour être
            recontacté par le Cabinet. Le Cabinet de Me Quentin MAMERI veille à
            ne collecter et traiter que des données strictement nécessaires au
            regard de la finalité pour laquelle elles sont traitées (principe de
            minimisation des données).
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
            Comment vos données à caractère personnel sont-elles utilisées ?
          </h2>

          <p className="desc">
            Me Quentin MAMERI s’engage à respecter la stricte confidentialité de
            vos données personnelles et de les utiliser uniquement pour les
            finalités pour lesquelles vous avez accepté de les lui communiquer.
            Toutefois, elles ne seront pas conservées plus longtemps que
            nécessaire, soit durant toute la durée de notre collaboration
            augmentée du délai de prescription légale. Après quoi, elles seront
            détruites.
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
            Quels sont vos droits ?
          </h2>

          <p className="desc">
            Vous avez le droit de ne pas vouloir nous communiquer de données
            personnelles. Dans ce cas, vous pourrez naviguer sur ce site,
            cependant vous n'aurez pas accès à l'ensemble de ses fonctionnalités
            et notamment le formulaire de contact. <br /> Vous avez un droit
            d'accès, de modification et d’effacement de vos données
            personnelles. <br /> Vous pouvez exercer ce droit, par exemple en
            les mettant à jour, en nous demandant de les rectifier, de les
            compléter, de les mettre à jour, ou de les supprimer en nous
            contactant à l'adresse suivante et en joignant à votre demande une
            copie d'une pièce d'identité en cours de validité (carte d'identité
            ou passeport). <br /> Vous avez également un droit à la portabilité
            de vos données à caractère personnel. Vous pouvez demander à Me
            Quentin MAMERI qu’il vous restitue sur un support utilisable toutes
            les données personnelles que vous nous avez fournies en vue par
            exemple de les transférer à un tiers. <br /> Enfin, vous bénéficiez
            d’un droit d'opposition au traitement de vos données pour des motifs
            légitimes ainsi qu'un droit d'opposition à ce que ces données soient
            utilisées à d'autres fins que celles auxquelles vous avez
            consenti(e). Vous pouvez user de ce droit en contactant le
            responsable du traitement, Me Quentin MAMERI aux coordonnées
            reproduites supra. <br /> Vous avez le droit d'introduire une
            réclamation auprès de la CNIL si vous l'estimez nécessaire. Dans ce
            cas, nous vous invitons à consulter leur site internet (www.cnil.fr)
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
            Contact
          </h2>

          <p className="desc">
            Pour toutes questions cernant cette politique de confidentialité ou
            vos données à caractère personnel, n'hésitez pas à contacter
            directement Me Quentin MAMERI à l’adresse suivante :
            mameri@qm-avocat.com.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>
  </Layout>
)

export default Mentions
