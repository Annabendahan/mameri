import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import VisitCard from "../components/VisitCard"
import pic16 from "../images/ip.jpeg"
import pic3 from "../images/la.jpg"
import pic4 from "../images/P1011958.jpg"

const Vac = () => (
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
                        VICTIME D’ACCIDENT DE LA CIRCULATION : RESPONSABLE INCONNU OU NON ASSURÉ, PUIS-JE
ÊTRE INDEMNISÉ ?
          </h2>

                    <p className="desc">
                        <span className="bold">
                            {" "}
                            Oui - Le Fonds de Garantie des Assurances Obligatoires de Dommage (FGAO) est un
fonds d’indemnisation créé en 1951 pour indemniser les victimes d’accident de la
circulation impliquant un véhicule terrestre à moteur, une personne circulant sur le
sol ou un animal, lorsque le tiers-responsable ou le propriétaire n’est pas assuré ou
n’a pas pu être identifié et lorsque la victime ne peut obtenir réparation de son
dommage à un autre titre.
            </span>
                    </p>

                    <p className="desc">
                        <span className="bold">1) Puis-je saisir le FGAO ?</span>
                    </p>

                    <p className="desc">
                        • D’une part, vous pouvez saisir le FGAO si vous êtes victime directe, indirecte ou ayant
                        droit d’une victime :
          </p>
                    <p className="desc">
                        - d’un accident de la circulation impliquant un véhicule terrestre à moteur (voiture,
                        moto, scooter, etc.) survenu en France métropolitaine et en Outre-Mer (en
                        Guadeloupe, Guyane françaises, Martinique, Mayotte, Nouvelle-Calédonie, Polynésie
                        française, Réunion, Saint-Pierre-et-Miquelon)
          </p>

                    <p className="desc">
                        ou
          </p>

                    <p className="desc">
                        - d’un accident de la circulation impliquant une personne circulant sur le sol (piéton,
                        skieur …) ou un animal dans un lieu ouvert à la circulation publique et survenu en
                        France métropolitaine, en Guadeloupe, Guyane française, Martinique, Mayotte,
                        Réunion, Saint-Pierre-et-Miquelon.
          </p>



                    <p className="desc">
                        • D’autre part, pour pouvoir saisir le FGAO, il faut, en outre, que vous remplissiez une
                        condition de nationalité ou de résidence.
          </p>
                    <p className="desc">
                        Deux cas de figures sont à distinguer :
          </p>

                    <p className="desc">
                        - pour saisir le FGAO suite à un accident impliquant un véhicule terrestre à moteur,
                        vous devez être français ou avoir votre résidence principale en France ou bien encore
                        être ressortissant ou résident d’un état membre de l’Espace économique européen
                        ou du Vatican, ou enfin être ressortissant d’un État non européen mais qui a conclu
                        un accord de réciprocité avec la France.
          </p>

                    <p className="desc">
                        - pour saisir le FGAO suite à un accident impliquant une personne ou un animal, vous
                        devez être français ou avoir votre résidence en France.
          </p>

                    <p className="desc">
                        • Enfin, sachez que l’intervention du FGAO est subsidiaire c’est à dire que vous pouvez
                        réparation par ce dispositif si vous ne pouvez pas obtenir réparation à un autre titre.
          </p>




                    <p className="desc">
                        <span className="bold">2) Quelle indemnisation puis-je obtenir du FGAO ?</span>
                    </p>

                    <p className="desc">
                        Le Fonds de Garantie indemnise les dommages corporels et matériels des victimes
                        sous certaines conditions :
          </p>


                    <p className="desc">
                        <span className="bold">
                            • Dommages corporels
</span>
                    </p>


                    <p className="desc">
                        Vous pouvez obtenir indemnisation de vos dommages corporels sans plafond
                        d’indemnisation  :
          </p>

                    <p className="desc">
                        - lorsque la personne responsable du dommage est inconnue ou n'est pas assurée
          </p>

                    <p className="desc">
                        - lorsque l'animal responsable du dommage n'a pas de propriétaire (par ex : animal
                        sauvage) ou que son propriétaire est inconnu ou n'est pas assuré.

                        </p>


                    <p className="desc">
                        <span className="bold">
                            • Dommages matériels
</span>
                    </p>


                    <p className="desc">
                        Vous pouvez obtenir indemnisation de vos dommages matériels avec un plafond
                        d’indemnisation  :
          </p>

                    <p className="desc">
                        - lorsque le responsable (ou le propriétaire de l'animal responsable) de l&#39;accident est
                        inconnu et que la victime a subi en même temps des dommages corporels
          </p>

                    <p className="desc">
                        - lorsque le responsable (ou le propriétaire de l’animal) est identifié mais n&#39;est pas
                        assuré.
                            </p>



                    <p className="desc">
                        <span className="bold">
                            • Dommages exclus du dispositif
                                </span>

                    </p>


                    <p className="desc">
                        Vous ne pourrez pas obtenir réparation de vos dommages par le FGAO si vous êtes
                        dans l’une des situations suivantes :
          </p>

                    <p className="desc">
                        - lorsque le dommage résulte d’un accident de la circulation impliquant un véhicule
                        terrestre à moteur, les dommages corporels subis par le conducteur auteur et par le
                        propriétaire du véhicule ainsi que les dommages matériels subis par le véhicule
                        impliqué dans l'accident ainsi que les dommages aux biens du conducteur de ce
                        même véhicule ne sont pas indemnisables par le FGAO.
          </p>

                    <p className="desc">
                        - lorsque les dommages ont été causés par un animal ou par une chose autre qu&#39;un
                        véhicule terrestre à moteur sont exclus : le propriétaire ou la personne qui a la garde
                        de l'animal ou de la chose au moment de l'accident ainsi que son conjoint, ses
                        ascendants et descendants et dont la responsabilité est engagée du fait de l'accident
                        ainsi que les représentants légaux de la personne morale propriétaire de l'animal ou
                        de la chose.

</p>

                    <p className="desc">
                        - lorsque les dommages ont été causés à l’auteur de l&#39;accident, son conjoint, ses
                        ascendants et descendants.

</p>


                    <p className="desc">
                        - Sont également exclus de l’indemnisation par le FGAO, les dommages matériels ou
                        corporels subis par les voleurs du véhicule, de l’animal ou de la chose, leurs
                        complices et toutes les personnes transportées par le véhicule ou l’animal si celles-ci
                        avait connaissance du vol.

</p>



                    <p className="desc">
                        <span className="bold">3) Dans quel délai maximum dois-je saisir le FGAO ?</span>
                    </p>

                    <p className="desc">
                        Les délais maximum pour saisir le FGAO varient selon que le responsable est identifié
                        ou non.
          </p>





                    <p className="desc">
                        - Si le responsable est connu, la victime a un délai d’un an au maximum pour
                        saisir le FGAO.
          </p>

                    <p className="desc">
                        - Si le responsable est inconnu, la victime a un délai de 3 ans à compter soit de
                        la date de la transaction, soit de la date de la décision de justice passée en
                        force de chose jugée pour saisir le FGAO.
          </p>

                    <p className="desc">
                        Dans tous les cas, les victimes doivent, dans le délai de 5 ans à compter de l’accident,
                        avoir conclu un accord ou avoir intenté une action en justice, soit envers l’auteur
                        connu, soit envers le Fonds de Garantie si l’auteur est demeuré inconnu.

                        </p>


                    <p className="desc">
                        En outre, les victimes ou leurs ayants droit doivent, dans le délai de cinq ans à
                        compter de l'accident :

                        </p>

                    <p className="desc">
                        - Si le responsable est inconnu, avoir réalisé un accord avec le fonds de garantie
                        ou avoir engagé une action en justice contre lui.

                        </p>

                    <p className="desc">
                        - Si le responsable est connu, avoir conclu une transaction avec celui-ci ou
                        intenté contre lui une action en justice.

                        </p>


                    <p className="desc">
                        Ces délais courent à compter du jour où la victime ou ses ayants-droits a eu
                        connaissance de son dommage, sauf si elle prouve qu'elle l'a ignoré jusque-là.

                        </p>


                    <p className="desc">
                        Ces différents délais sont impartis à peine de forclusion sauf si la victime prouve
                        qu'elle a été dans l'impossibilité d'agir avant l'expiration de ces délais.

                        </p>



                    <p className="desc">
                        <span className="bold">4) Comment puis-je saisir le FGAO ?</span>
                    </p>

                    <p className="desc">
                        Il faut adresser au FGAO formulaire d’ouverture du dossier dûment rempli et signé,
                        accompagné des pièces justificatives.
          </p>





                    <p className="desc">
                        Il est important d’être assisté par un avocat dans ses démarches afin que vos intérêts
                        puissent être défendus à tous les stades de la procédure que ce soit lors de
                        l’expertise médicale qui sera diligentée que pour l’évaluation financière de vos
                        dommages et intérêts.
          </p>

                    <p className="desc">
                        Si vous êtes victime d’un accident de la circulation et que vous envisagez de saisir le
                        FGAO, n’hésitez pas à contacter Maître Quentin MAMERI, par téléphone, mail ou par
                        le formulaire de contact afin de lui exposer votre situation et convenir d’un rendez-
                        vous.
          </p>




                    <p className="desc">
                        <b>Articles associés :</b><br />

- <Link to="/dossier-medical/"> L’accès au dossier médical</Link><br />
- <Link to="/certificat-medical-initial/"> Le certificat médical initial</Link><br />
- <Link to="/expertise-medicale-dommage-corporel/">
                            {" "}
              L'expertise médicale
            </Link><br />
- <Link to="/procedure-reparation/"> Les grandes étapes d’une
procédure en réparation de dommage corporel </Link> <br />
- <Link to="/consolidation/"> La consolidation</Link><br />
- Les préjudices réparables <br />
                    </p>
                    <br />
                </div>

                <VisitCard />
            </div>
        </div>
    </Layout>
)

export default Vac
