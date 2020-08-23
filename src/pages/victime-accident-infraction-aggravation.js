import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vaia = () => (
    <Layout>
        <div className="background-hono">
            <div className="bigbox">
                <div className="bleft">
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
                        VICTIME D’ACCIDENT OU D’INFRACTION : PUIS-JE FAIRE ROUVRIR MON DOSSIER EN CAS
D’AGGRAVATION ?        </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            Si vos séquelles se sont aggravées depuis votre indemnisation judiciaire ou amiable, vous
avez la possibilité de faire rouvrir votre dossier pour être indemnisé de vos nouveaux
préjudices. Il peut s’agir d’une aggravation « médicale » se manifestant par l’apparition de
nouvelles lésions ou d’une aggravation des séquelles préexistantes.
            </span>
                    </p>

                    <p className="desc">

                        {" "}
              1) Dans quel cas puis-jIl conviendra alors de solliciter auprès de votre médecin un certificat médical décrivant
précisément la nature de l’aggravation et établissant le lien avec l’accident initial. Ce
certificat est essentiel pour mettre en place une nouvelle évaluation par voie d’expertise
médicale amiable ou judiciaire.
                    </p>
                    <p className="desc">
                        Outre l’aggravation médicale, la jurisprudence a reconnu, dans certains cas, une
                        « aggravation situationnelle » en permettant à une victime dont l’état de santé ne s’est pas
                        médicalement aggravé d’obtenir une nouvelle indemnisation en cas de changement de
                        situation postérieurement à l’indemnisation initiale (ex : besoin en aide humaine nouveau
                        du fait de la naissance d’un enfant / nécessité d’un logement adapté suite à un
                        déménagement, etc.).
          </p>

                    <p className="desc">
                        Maître MAMERI vous assistera dans les démarches amiables ou judiciaires tendant à faire
                        reconnaître votre situation d’aggravation. Il défendra vos droits de victime à chaque stade
                        de la procédure y compris pendant l’expertise médicale .Il vous apportera non seulement un
                        soutien juridique et technique mais également humain. Il pourra vous orienter vers les
                        médecins de recours et les professionnels qualifiés (ergothérapeute, architecte…) avec
                        lesquels il travaille habituellement.
          </p>

                    <p className="desc">
                        Si vous avez subi une aggravation de vos dommages depuis votre dernière indemnisation,
                        n’hésitez pas à contacter Maître Quentin MAMERI, par téléphone, mail ou par le formulaire
                        de contact afin de lui exposer votre situation et convenir d’un rendez-vous.
          </p>







                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vaia
