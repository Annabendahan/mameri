import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vemc = () => (
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
                        VICTIME D’ERREUR MÉDICALE : PUIS-JE SAISIR LA COMMISSION DE CONCILIATION ET
D’INDEMNISATION DES ACCIDENTS MÉDICAUX (CCI/CRCI) ?          </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            La Commission de Conciliation et d’Indemnisation des Accidents médicaux (CCI /
anciennement CRCI) est une autorité administrative indépendante créée par la loi du 4
mars 2002 dont la mission est d’indemniser les victimes d’erreur médicales les plus graves,
qu’elles soient victimes d’une faute médicale, d’une infection nosocomiale, d’une affection
iatrogène ou d’un accident médical non fautif (aléa thérapeutique). Elle constitue une
alternative au rapprochement amiable avec l’assureur et à la saisine d’un Tribunal.
            </span>
                    </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
              1) Dans quel cas puis-je saisir la CCI / CRCI ?
            </span>
                    </p>
                    <p className="desc">
                        Vous pouvez saisir la CCI si vous êtes victime d’un accident médical ou ayant-droit d’une
                        victime et que vous remplissiez les conditions suivantes :
          </p>

                    <p className="desc">
                        <span className="bold">•  Un critère lié à l’acte :</span> il doit s’agir d’un accident médical ayant pour origine un acte
                        de prévention, un acte de diagnostic ou un acte thérapeutique. Les accidents liés à
                        des actes de chirurgie esthétique sont exclus de ce dispositif d’indemnisation.
          </p>

                    <p className="desc">
                        Attention - Certains accidents médicaux ne relèvent pas de la compétence de la CCI
                        mais de l’ONIAM. Tel est le cas pour les dommages résultant de contaminations
                        transfusionnelles par le VIH, le VHB, le VHC et le HTLV, les dommages résultant de
                        vaccinations obligatoires ou de celles contre la grippe A (H1N1) ainsi que les
                        accidents dus au Benfluorex. Vous devrez donc saisir directement l’ONIAM.
          </p>

                    <p className="desc">
                        <span className="bold">• Un critère temporel :</span> L&#39;acte en cause doit avoir été réalisé postérieurement au 4
                        septembre 2001
          </p>

                    <p className="desc">
                        <span className="bold">• Un critère de gravité :</span> Les dommages de l’accident médical doivent atteindre les
                        seuils suivants :
          </p>

                    <p className="desc">
                        - un taux d'atteinte permanente à l'intégrité physique ou psychique (AIPP) supérieur à
                        24 %
          </p>


                    <p className="desc">
                        ou
          </p>


                    <p className="desc">
                        - un arrêt temporaire des activités professionnelles (ATAP) pendant au moins 6 mois
                        consécutifs (ou 6 mois non consécutifs sur une période de 12 mois),
          </p>


                    <p className="desc">
                        ou
          </p>

                    <p className="desc">
                        - des gênes temporaires constitutives d'un déficit fonctionnel temporaire (DFT)
                        supérieur ou égal à un taux de 50 % pendant au moins 6 mois consécutifs (ou 6 mois
                        non consécutifs sur une période de 12 mois).
          </p>

                    <p className="desc">
                        - À titre exceptionnel, le caractère de gravité peut être reconnu lorsque la victime est
                        déclarée définitivement inapte à exercer son activité professionnelle ou lorsque ses
                        conditions d'existence s'en trouvent gravement troublées.
          </p>




                    <p className="desc">
                        <span className="bold">
                            {" "}
                            2) Dans quel délai maximum puis je saisir la CCI/CRCI ?
            </span>
                    </p>


                    <p className="desc">
                        Le délai maximum pour saisir la CCI est celui de la prescription. Le patient qui
                        s’estime victime d’un accident médicaux doit agir dans un délai de 10 ans à compter
                        de la consolidation.
                    </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            3) Comment se déroule la procédure devant la CCI/CRCI ?
            </span>
                    </p>


                    <p className="desc">
                        <span className="bold">
                            {" "}
                            • La saisine de la CCI
            </span>
                    </p>




                    <p className="desc">
                        Pour saisir la CCI, il convient de remplir un formulaire dédié accompagné de
                        l’intégralité son dossier médical et des pièces permettant de justifier de la gravité de
                        son préjudice.
          </p>


                    <p className="desc">
                        Si l’avocat n’est pas obligatoire pour mener cette procédure, il est fortement
                        recommandé car il évitera à la victime de se retrouver seule face aux professionnels
                        ou établissements de santé mis en cause.
          </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            • La phase d’expertise médicale
            </span>
                    </p>


                    <p className="desc">
                        La CCI si elle s’estime compétente va désigner un médecin-expert ou un collège
                        d’expert lequel aura pour mission d’évaluer les dommages corporels subis par la
                        victime et de déterminer leur origine : faute médicale, Infection nosocomiale,
                        accident médical non fautif, etc.
          </p>


                    <p className="desc">
                        L’avantage de cette procédure est la gratuité de l’expertise médicale.
          </p>

                    <p className="desc">
                        Une copie du rapport d’expertise est transmise à chaque partie au moins 10 jours
                        avant la date de réunion de la CCI.
          </p>


                    <p className="desc">
                        <span className="bold">
                            {" "}
                            • La phase d’indemnisation
            </span>
                    </p>

                    <p className="desc">
                        Vous serez convoqué ensuite à une réunion de la CCI à laquelle vous pourrez être
                        assisté par un avocat. À l'issue de la séance, la CCI émet un avis qui est adressé aux
                        parties et qui se prononcera sur le principe et l’étendue du droit à réparation de la
                        victime.
          </p>



                    <p className="desc">
                        Si une responsabilité est établie par la CCI, l'assureur du professionnel de santé doit
                        vous adresser une proposition d'indemnisation, dans un délai de 4 mois suivant la
                        réception de l'avis.
                    </p>

                    <p className="desc">
                        Si l'assureur n'a pas été informé de la consolidation de l'état de la victime, il ne
                        s’agira pas d’une offre définitive mais d’une offre provisionnelle c’est à dire d’une
                        avance sur indemnisation. S’il n’a pas été informé de la consolidation, l'assureur a 2
                        mois pour faire une proposition d'indemnisation définitive.
          </p>

                    <p className="desc">
                        Si l'assureur n'a pas effectué d'offre dans les 4 mois, ou si le professionnel n&#39;est pas
                        assuré, la victime ou ses ayants droit peut s'adresser à l'ONIAM afin qu’elle se
                        substitue à lui. Elle peut également engager un recours contre l’assureur devant le
                        Tribunal compétent.
                    </p>


                    <p className="desc">
                        L'acceptation de l'offre de l'assureur vaut transaction au sens du code civil. Cela
                        signifie qu’une fois accepté et le délai de rétractation expirée, vous ne pourrez plus
                        engager une nouvelle procédure d’indemnisation pour les mêmes préjudices. Il est
                        donc important de ne rien signer sans l’avoir fait vérifier préalablement par un avocat
                        de victimes.
          </p>

                    <p className="desc">
                        Maître MAMERI vous accompagnera à chaque étape de la procédure y compris
                        pendant l’expertise médicale pour défendre votre droit à réparation et faire en sorte
                        que vos préjudices soient évalués au mieux.
          </p>

                    <p className="desc">
                        Il vous apportera non seulement un soutien juridique et technique mais également
                        humain. Il pourra vous orienter vers les médecins-conseil et les professionnels
                        qualifiés (ergothérapeute, architecte…) avec lesquels il travaille habituellement.
          </p>



                    <p className="desc">
                        Si vous avez subi un accident médical de quelque nature que ce soit, une affection
                        iatrogène, une infection nosocomiale et que vous envisagez de saisir la CRCI/CCI,
                        n’hésitez pas à contacter Maître Quentin MAMERI, par téléphone, mail ou par le
                        formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-
                        vous.
                    </p>





                    <p className="desc">
                        <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/erreur-medicale/"> L'erreur médicale</Link><br />
- <Link to="/infection-nosocomiale/">
                            {" "}
              L'infection nosocomiale
            </Link> <br />
- Préjudices indemnisables<br />
- <Link to="/consolidation/"> La consolidation</Link><br />
- <Link to="/expertise-medicale-dommage-corporel/">
                            {" "}
              L'expertise médicale
            </Link> <br />

                    </p>
                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vemc
