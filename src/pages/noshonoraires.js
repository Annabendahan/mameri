import React from "react"
import { Link } from "gatsby"
import "../components/noshonoraires.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VisitCard from "../components/VisitCard"

const NosHonoraires = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> NOS HONORAIRES </h1>
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
            LA FACTURATION DU PREMIER RENDEZ-VOUS{" "}
          </h2>
          <p className="desc">
            {" "}
            Le tarif de ce premier rendez-vous est fixé à 150 euros TTC, quelle
            que soit la durée de l&#39;entretien. Si à l&#39;issue du
            rendez-vous, vous confiez à Me MAMERI la défense de vos intérêts, le
            montant de la première consultation sera déduite du montant total de
            ses honoraires pour la procédure ou les démarches envisagées.
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
            DES HONORAIRES CLAIRS ET DETERMINÉS PAR AVANCE{" "}
          </h2>
          <p className="desc">
            {" "}
            Dès le premier rendez-vous, la question des honoraires sera abordée
            sans aucun tabou et en toute transparence. Me MAMERI vous adressera
            une <span className="bold">
              {" "}
              convention d’honoraire détaillée 
            </span>{" "}
            qui vous permettra, avant de vous engager, de connaître, par avance,
            le montant de ses honoraires pour les diligences envisagées.
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
            LA FIXATION DES HONORAIRES{" "}
          </h2>
          <p className="desc">
            Les honoraires de Me MAMERI se décomposent en un{" "}
            <span className="bold"> honoraire fixe </span> qui correspond aux
            diligences envisagées auquel s’ajoute un{" "}
            <span className="bold"> honoraire de résultat </span>. L’honoraire
            pratiquée par Me MAMERI est un{" "}
            <span className="bold"> honoraire forfaitaire </span> afin que vous
            puissiez prévoir à l’avance ce que cela va vous coûter.
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
            LA PRISE EN CHARGE DES HONORAIRES{" "}
          </h2>
          <p className="desc">
            {" "}
            Les honoraires fixes de Me Quentin MAMERI peuvent être couverts en
            tout ou partie par une
            <span className="bold">
              {" "}
              assurance de protection juridique{" "}
            </span>{" "}
            dont vous seriez éventuellement titulaire (assurance habitation,
            assurance des moyens de paiement,…).  Maître MAMERI pourra se
            rapprocher de votre compagnie d’assurance pour l’interroger sur la
            mise en œuvre et sur l’étendue de sa prise en charge. Enfin, sachez
            que la loi prévoit la possibilité pour la partie gagnante de
            solliciter auprès du juge remboursement des frais d’avocat qu’elle a
            exposé pour se défendre. Généralement, les tribunaux font droit à
            cette demande au moins partiellement.
          </p>
        </div>

        <VisitCard />
      </div>
    </div>

    <div className="high">
      “Les honoraires sont fixés selon les usages, en fonction de la situation
      de fortune du client, de la difficulté de l’affaire, des frais exposés par
      l’avocat, de sa notoriété et des diligences de celui-ci (article 11-2 du
      règlement intérieur de la profession d’avocat)”
    </div>

    <p
      style={{
        width: `330px`,
        margin: `auto`,
      }}
    >
      {" "}
      <Link to="/contact/" className="button bt2">
        {" "}
        NOUS CONTACTER{" "}
        <svg
          className="yellowr"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
            fill="yellow"
          />
        </svg>{" "}
      </Link>{" "}
    </p>
  </Layout>
)

export default NosHonoraires
