import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vemr = () => (
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
                        VICTIME D’ERREUR MÉDICALE : DOIS-JE PORTER PLAINTE POUR OBTENIR RÉPARATION ?    </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            Vous êtes victime d’un accident médical, d’une affection iatrogène ou d’une infection
nosocomiale et vous vous interrogez sur la procédure à suivre pour obtenir réparation de
dommages corporels que vous avez subi. Vous vous demandez sûrement si vous devez
déposer plainte à l’encontre du professionnel ou de l’établissement de santé que vous
jugez responsable.
            </span>
                    </p>

                    <p className="desc">

                        Sachez que le dépôt de plainte sera nécessaire seulement si vous estimez avoir été victime
                        d’une infraction pénale (délit, crimes, etc…) et si vous souhaitez que le professionnel de
                        santé supporte une peine. Si vous souhaitez simplement obtenir réparation de vos
                        préjudices, vous pouvez directement engager une procédure civile amiable ou contentieuse.
                    </p>
                    <p className="desc">
                        La procédure débute par une phase d’expertise médicale. L’expert devra, en effet,
                        déterminer d’une part, l’origine de votre dommage : faute médicale, infection nosocomiale,
                        etc. puis dans un second temps, il évaluera l’ensemble de vos préjudices corporels poste par
                        poste.
          </p>

                    <p className="desc">
                        Une telle mesure peut être mis œuvre dans un cadre amiable ou judiciaire. Vous pouvez, en
                        effet , solliciter la mise en œuvre d’une expertise amiablement auprès du professionnel de
                        santé et son assureur, auprès du Tribunal, mais également auprès de la Commission de
                        Conciliation et d’Indemnisation des accidents médicaux (CCI)..
          </p>

                    <p className="desc">
                        Quelle que soit la procédure engagée, il est important d’être accompagné par un avocat et/ou
                        un médecin de recours qui veilleront à ce que vos droits soient respectés et rétabliront
                        l’équilibre face aux professionnels de santé et leurs assureurs notamment lors de l’expertise
                        médicale où ces derniers seront assistés de leur(s) conseil(s).
          </p>


                    <p className="desc">
                        Une fois le rapport rendu par l’Expert, il conviendra de l’exploiter et de mobiliser les
                        arguments médico-légaux pour faire reconnaître la responsabilité du ou des professionnels
                        de santé ou justifier une indemnisation par la solidarité nationale.
          </p>



                    <p className="desc">
                        Le rôle d’un avocat de victime est essentiel pour vous assister dans le cadre de ces
                        démarches afin de défendre votre droit à réparation lorsqu’il n’est pas établi ou contesté et
                        chiffrer vos dommages et intérêts en fonction des préjudices que vous avez subis, poste de
                        préjudice par poste de préjudice.
          </p>


                    <p className="desc">
                        Si vous êtes victime d’un accident ou d’une agression, n’hésitez pas à contacter Maître
                        Quentin MAMERI, par téléphone, mail ou par le formulaire de contact afin de lui exposer
                        votre situation et convenir d’un rendez-vous.
          </p>



                    <p className="desc">
                        <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/certificat-medical-initial/"> Le certificat médical initial</Link><br />
- <Link to="/erreur-medicale/"> L'erreur médicale</Link><br />
- <Link to="/infection-nosocomiale/">
                            {" "}
              L'infection nosocomiale
            </Link> <br />
- Préjudices indemnisables<br />
- <Link to="/consolidation/"> La consolidation</Link><br />
- <Link to="/victime-erreur-medicale-cci/"> Saisir la commission de conciliation et d’indemnisation des accidents médicaux (CCI/CRCI) </Link><br />


                    </p>



                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vemr
