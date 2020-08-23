import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vir = () => (
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
            VICTIME D’INFRACTION : QUEL RECOURS SI LE RESPONSABLE NE ME VERSE PAS LES DOMMAGES
ET INTÉRÊTS AUXQUELS IL A ÉTÉ CONDAMNÉ  ?
          </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
              Vous pouvez dans ce cas saisir un huissier de justice pour le contraindre à s’exécuter mais
vous pouvez aussi avoir recours au Service d’Aide aux Recouvrement des Victimes
d’Infraction (SARVI). Le SARVI est un service du fond d’indemnisation des victimes
d’infractions (FGTI) dont la mission est d’aider les victimes d’infractions à recouvrer les
dommages et intérêts que ne leur a pas versé l’auteur condamné.
            </span>
                    </p>

                    <p className="desc">
                        <span className="bold">1) Qui peut saisir la SARVI ? </span>
                    </p>

                    <p className="desc">
                        Seuls les victimes personnes physiques peuvent saisir la SARVI. Cela exclut
                        l’ensemble des personnes morales (société, association, collectivité, etc.) mais inclut
                        les artisans, commerçants, professionnels libéraux qui se sont constitués partie civile
                        en leur nom propre.
          </p>

                    <p className="desc">
                        <span className="bold">2) A quelles conditions puis-je saisir le SARVI ?</span>
                    </p>

                    <p className="desc">
                        Pour saisir la SARVI, plusieurs conditions cumulatives doivent être réunies :
          </p>

                    <p className="desc">
                        • d’une part, la décision pénale dont vous vous prévalez doit être définitive
                        c’est-à-dire qu’elle ne doit plus être susceptible de voies de recours
          </p>

                    <p className="desc">
                        • d’autre part, vous ne devez pas avoir été indemnisée par l’auteur à
                        l’expiration d’un délai de deux mois à compter de la date à laquelle la
                        décision pénale est devenue définitive. Ainsi, par exemple, la SARVI ne
                        pourra pas intervenir si vous avez mis en place un échéancier avec l’auteur de
                        l’infraction sauf si celui-ci ne procédait plus au versement des mensualités
                        convenues.
          </p>

                    <p className="desc">
                        • enfin, il ne faut pas que vous puissiez prétendre à une indemnisation par la
                        Commission d’indemnisation des victimes d’infraction (CIVI).
          </p>

                    <p className="desc">
                        <span className="bold">3) Que puis-je obtenir du SARVI ? </span>
                    </p>

                    <p className="desc">
                        Deux hypothèses sont à envisager :
          </p>

                    <p className="desc">
                        • Si le montant de la condamnation est inférieur ou égal à 1 000 € : le SARVI
                        vous avancera la totalité de la somme et se chargera de la récupérer auprès
                        du responsable.
          </p>

                    <p className="desc">
                        • Si le montant de la condamnation est supérieur à 1 000 € : le SARVI vous
                        avancera 30% de la somme, avec un minimum de 1 000 € et un maximum de
                        3 000 €. Pour les sommes restant dues, Le SARVI vous assistera pour en
                        obtenir le recouvrement c'est-à-dire qu’il se chargera à votre place d'obtenir
                        ces sommes du condamné. Le SARVI vous informera régulièrement des
                        diligences accomplies.
          </p>

                    <p className="desc">
                        <span className="bold">4) Dans quel délai saisir le SARVI ?</span>
                    </p>


                    <p className="desc">
                        Vous devez saisir la SARVI dans un délai maximum d’un an à compter de la décision
                        définitive de condamnation. Cependant, la SARVI peut examiner un dossier hors délai
                        pour un motif légitime.
          </p>


                    <p className="desc">
                        <span className="bold">5) Comment saisir le SARVI ?</span>
                    </p>



                    <p className="desc">
                        Vous devez envoyer le formulaire d’indemnisation à la SARVI rempli, daté et signé,
                        accompagné de plusieurs pièces justificatives qui comprennent au minimum :
          </p>


                    <p className="desc">
                        - la copie d’un justificatif d’identité en cours de validité
          </p>


                    <p className="desc">
                        - un relevé d’identité bancaire (RIB ou RIP) au nom de la victime ou RIB CARPA
          </p>

                    <p className="desc">
                        - Une attestation sur l’honneur datée de moins de 2 mois et signée indiquant
                        l'absence de paiement ou le montant perçu de l’auteur ou de votre assureur, ou
                        l'échéancier de paiement
          </p>

                    <p className="desc">
                        - La copie complète de la décision pénale, vous accordant des dommages et
                        intérêts, revêtue de la formule exécutoire
          </p>

                    <p className="desc">
                        - Un certificat de non recours
          </p>

                    <p className="desc">
                        Ces démarches peuvent être réalisées par un avocat.
          </p>

                    <p className="desc">
                        Si vous êtes victime d’une infraction pénale et que vous souhaitez être accompagnée
                        par un avocat de victime dans les démarches tendant à être indemnisé de vos
                        préjudices, n’hésitez pas à contacter Maître Quentin MAMERI, par téléphone, mail ou
                        par le formulaire de contact afin de lui exposer votre situation et convenir d’un
                        rendez-vous.
          </p>



                    <p className="desc">
                        <b>Articles associés :</b><br />

- <Link to="/victime-infraction-civi/"> Victime d’infraction : le rôle de la CIVI</Link><br /> <br />

                    </p>
                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vir
