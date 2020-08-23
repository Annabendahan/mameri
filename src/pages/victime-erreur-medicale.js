import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vem = () => (
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
                        VICTIME D’ERREUR MÉDICALE : L’OBLIGATION D’INFORMATION DU PROFESSIONNEL DE SANTÉ          </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            Les professionnels de santé (médecin, chirurgien-dentiste ….) sont non seulement tenus de
dispenser à leurs patients des soins consciencieux, attentifs et conformes aux règles de
l’art mais également de les informer sur leur état de santé. Cette obligation d’information
initialement consacrée par la jurisprudence a été reprise par la loi du 4 mars 2002 qui la
considère expressément comme un droit du patient. L’information médicale permet au
patient de consentir de manière libre et éclairée aux soins ou aux traitements proposés.
            </span>
                    </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
              1) Quelles informations doivent être délivrer ?
            </span>
                    </p>
                    <p className="desc">
                        La loi précise le contenu de l’information qui doit être délivrée par le professionnel de santé
                        à son patient.
          </p>

                    <p className="desc">
                        D’une part, il doit l’informer sur les différentes investigations, traitements ou actions de
                        prévention qui sont proposés, leur utilité, leur urgence éventuelle, leurs conséquences, les
                        risques fréquents ou graves normalement prévisibles qu'ils comportent ainsi que sur les
                        autres solutions possibles et sur les conséquences prévisibles en cas de refus. Cela inclut les
                        risques fréquents dépourvus de gravité et les risques graves même exceptionnels.
          </p>

                    <p className="desc">
                        D’autre part, le professionnel doit informer son patient sur la possibilité, lorsque son état de
                        santé le lui permet, de bénéficier d’une prise en charge en ambulatoire ou à domicile.
          </p>

                    <p className="desc">
                        Enfin, il doit informer la personne concernée lorsque, postérieurement à l&#39;exécution des
                        investigations, traitements ou actions de prévention, des risques nouveaux sont identifiés,
                        sauf en cas d'impossibilité de la retrouver.
          </p>



                    <p className="desc">
                        <span className="bold">
                            {" "}
                            2) Qui doit être informé ?
            </span>
                    </p>


                    <p className="desc">
                        <span className="bold">
                            {" "}
                            • Le patient
            </span>
                    </p>



                    <p className="desc">
                        Le professionnel de santé doit informer son patient sauf en cas d’urgence ou d’impossibilité
                        d’informer. Tel est le cas lorsque le patient est hors d’état de recevoir l’information (coma,
                        état végétatif, etc.).
          </p>


                    <p className="desc">
                        En tout état de cause, si le patient a fait part à son médecin de sa volonté d&#39;être tenu dans
                        l'ignorance d'un diagnostic ou d'un pronostic, ce dernier doit respecter sa décision sauf
                        lorsque des tiers sont exposés à un risque de transmission.
          </p>


                    <p className="desc">
                        Il convient enfin de rappeler que le secret médical interdit au professionnel de santé de
                        délivrer des informations concernant la santé d’un patient à des tiers sauf dans les cas où la
                        loi l’y contraint ou l’y autorise.
          </p>


                    <p className="desc">
                        En dehors des cas prévus par le droit pénal (sévices sur mineurs…), le code de la santé
                        publique prévoit une information des proches et de la personne de confiance, si elle a été
                        désignée, dans certaines situations :
          </p>

                    <p className="desc">
                        - La personne de confiance est informée lorsque le patient est hors d’état de
                        manifester sa volonté ou lorsqu’elle l’accompagne lors des entretiens médicaux pour
                        l’aider à sa prise de décision
          </p>

                    <p className="desc">
                        - En cas de diagnostic ou de pronostic grave, la famille, les proches de la personne
                        malade ou la personne de confiance peuvent recevoir les informations nécessaires
                        destinées à leur permettre d&#39;apporter un soutien direct à celle-ci, sauf opposition de
                        sa part. Seul un médecin est habilité à délivrer, ou à faire délivrer sous sa
                        responsabilité, ces informations.
          </p>



                    <p className="desc">
                        <span className="bold">
                            {" "}
              • Le cas particulier du mineurs et du majeur sous tutelle
            </span>
                    </p>

                    <p className="desc">
                        Si les soins concernent un mineur ou un majeur sous tutelle, le professionnel de santé doit
                        informer ses représentants légaux : parents ou tuteur. Toutefois, il doit également informer
                        le mineur ou le majeur sous tutelle et le laisser participer à la prise de décision le
                        concernant, d'une manière adaptée soit à son degré de maturité s'agissant du mineur, soit à
                        ses facultés de discernement s'agissant du majeur sous tutelle.
          </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            3) Comment doit être délivré l’information ?
            </span>
                    </p>


                    <p className="desc">
                        La loi prévoit que l’information médicale doit être avant tout être délivrée oralement au
                        cours d’un entretien individuel. En pratique, le professionnel de santé a la possibilité de
                        compléter l’information orale par la remise d’un document écrit mais ne peut en aucun cas
                        la remplacer.
          </p>

                    <p className="desc">
                        Le Code de déontologie médicale prévoit que le médecin doit à la personne qu&#39;il examine,
                        qu'il soigne ou qu'il conseille, une information loyale, claire et appropriée sur son état, les
                        investigations et les soins qu'il lui propose. Tout au long de la maladie, il doit tenir compte
                        de la personnalité du patient dans ses explications et veille à leur compréhension.
          </p>

                    <p className="desc">
                        L’information ne doit donc pas être standardisée mais adaptée à chaque patient. En outre,
                        elle ne doit pas induire le patient en erreur.
          </p>



                    <p className="desc">
                        <span className="bold">
                            {" "}
              4) Qui doit prouver le défaut d’information  ?
            </span>
                    </p>

                    <p className="desc">
                        En cas de litige, il n’appartient pas au patient de prouver que le professionnel de santé ne l’a
                        pas informé sur les risques qui se sont réalisés. En effet, la loi prévoit au contraire que c’est
                        au professionnel ou à l'établissement de santé d'apporter la preuve que l'information a bien
                        été délivrée au patient. Cette preuve peut être apportée par tout moyen.
          </p>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            5) Quelle indemnisation en cas de défaut d’information ?
            </span>
                    </p>

                    <p className="desc">
                        Si vous n’avez pas été informé d’un risque préalablement aux soins ou au traitement réalisés
                        par un professionnel ou un établissement de santé et que ce risque s’est réalisé, vous
                        pouvez engager une procédure amiable ou contentieuse pour obtenir réparation de vos
                        préjudices.
          </p>

                    <p className="desc">
                        Vous pourrez être indemnisé uniquement de la perte de chance que vous auriez eue de
                        refuser l’acte médical et donc d’échapper au risque qui s’est réalisé.
          </p>

                    <p className="desc">
                        Il existe, en effet, une incertitude sur le fait qu’un patient, même correctement informé,
                        aurait refusé l’acte médical proposé par le praticien. En pratique, vous serez donc indemnisé
                        de l’ensemble de vos dommages corporels seulement à hauteur de la chance qui a été
                        perdue, laquelle est évaluée en pourcentage, fixée au cas par cas.
          </p>

                    <p className="desc">
                        Toutefois, une telle réparation est exclue si vous deviez impérativement vous soumettre à
                        l’acte médical litigieux pour des raisons vitales car dans ce cas, la jurisprudence considère
                        que vous n’aviez rétrospectivement aucune chance de le refuser et donc d’échapper au
                        risque.
          </p>


                    <p className="desc">
                        La jurisprudence a néanmoins reconnu le droit pour une victime d’obtenir réparation de son
                        préjudice moral correspondant à son impossibilité de se préparer au risque qui s’est réalisé
                        (Civ. 1ère, 23 janvier 2014, n°12.22.123 ; Cour Cass. 1ère civ., 23 janv. 2019, n° 18-10706).
          </p>

                    <p className="desc">
                        Si vous êtes victime du défaut d’information d’un médecin, vous pouvez également engager
                        une procédure disciplinaire à son encontre devant le Conseil de l’ordre des Médecins car il
                        s’agit d’un devoir déontologique.
          </p>



                    <p className="desc">
                        Si vous êtes victime d’un accident médical faisant suite à une faute de diagnostic, une faute
                        technique ou un défaut d’information , n’hésitez pas à contacter Maître Quentin MAMERI,
                        par téléphone, mail ou par le formulaire de contact afin de lui exposer votre situation et
                        convenir d’un rendez-vous.
          </p>






                    <p className="desc">
                        <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/infection-nosocomiale/">
                            {" "}
              L'infection nosocomiale
            </Link> <br />
- <Link to="/victime-erreur-medicale-cci/"> Saisir la commission de conciliation et d’indemnisation des accidents médicaux (CCI/CRCI) </Link><br />

                    </p>
                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vem
