import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";

const  ConditionsGenerales = async () => {

    return (
        <Container>
            <Heading
                subtitle="Mentions légales"
                title="Conditions de services"
            />
            <strong style={{fontSize:20}}>Conditions de service pour les utilisateurs européens</strong>
            <p>
            En tant que consommateur ou consommatrice résidant dans l'EEE, vous pouvez accéder à la plateforme en ligne de résolution des litiges de la Commission européenne ici : <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a> . Veuillez noter qu'AtypikHouse ne s'engage pas et n’est pas tenue de recourir à une entité de règlement extrajudiciaire des litiges au sens de la directive 2013/11/UE afin de résoudre des litiges avec les consommateurs. La plateforme de résolution des litiges en ligne de la Commission européenne n'est pas disponible pour les résidents de la Suisse ou du Royaume-Uni.

            L'article 25 des présentes Conditions contient une convention d'arbitrage et de renonciation à recours collectif qui s'appliquent à toute demande d'indemnisation engagée contre AtypikHouse aux États-Unis. Veuillez les lire attentivement.
            </p><br />
            <p>
            Les présentes Conditions de service pour les utilisateurs européens (les « Conditions ») sont un contrat juridique contraignant entre vous et AtypikHouse qui régit votre droit d'utilisation des sites web, applications et autres offres d'AtypikHouse (appelés collectivement, la « Plateforme AtypikHouse »). Lorsqu'ils sont utilisés dans ces conditions, les termes « AtypikHouse », « nous », « nos » ou « notre » désignent l'entité AtypikHouse mentionnée à l'Annexe 1 avec laquelle vous concluez un contrat. 
            </p><br />
            <p>
            La Plate-forme Airbnb offre un outil en ligne permettant aux utilisateurs (« Membres ») de publier, de proposer, de rechercher et de réserver des services. Les Membres qui publient et proposent des services sont des « Hôtes » et les Membres qui recherchent, réservent ou utilisent des services sont des « Voyageurs ». Les Hôtes offrent des hébergements (« Hébergements »), des activités, des excursions et des événements (« Expériences »), ainsi qu'une variété de services de voyage et autres (collectivement, les « Services d'hôte », et chaque offre de Service d'hôte, une « Annonce »). En tant que fournisseur de la Plate-forme Airbnb, Airbnb ne possède, ne contrôle, ne propose et ne gère ni les annonces, ni les Services d'hôte ni aucun service touristique. Airbnb n'est pas partie aux contrats conclus directement entre les Hôtes et les Voyageurs, et Airbnb n'est pas agent immobilier, agence de voyage, ni assureur, pas non plus organisateur ou détaillant de voyages organisés en vertu de la directive (UE) 2015/2302. Airbnb n'agit pas en qualité de mandataire d'un quelconque Membre, sauf comme le prévoient les Conditions de service relatives aux paiements (« Conditions de paiement »). Pour en savoir plus sur le rôle d'Airbnb, consultez l'article 17.
            </p><br />
            <p>
            <strong>Contenu</strong>

                <strong>Conditions relatives aux voyageurs</strong><br />

                <strong><a href="#1">1. Recherche et réservation sur Airbnb.</a></strong><br />

                <strong><a href="#2">2. Annulations, Problèmes de réservation, Remboursements et Modifications de réservation.</a></strong><br />

                <strong><a href="#3">3. Vos responsabilités.</a></strong><br />

                <strong>Conditions relatives aux hôtes</strong> <br />

                <strong><a href="#4">4. Accueil de voyageurs avec Airbnb.</a></strong><br />

                <strong><a href="#5">5. Gestion de votre Annonce.</a></strong><br />

                <strong><a href="#6">6. Annulations, Problèmes de réservation et Modifications de réservation.</a></strong><br />

                <strong><a href="#7">7. Taxes.</a></strong><br />

                <strong>Conditions d'application générale</strong><br />

                <strong><a href="#8">8. Commentaires.</a></strong><br />

                <strong><a href="#9">9. Contenu.</a></strong><br />

                <strong><a href="#10">10. Frais.</a></strong><br />

                <strong><a href="#11">11. Règlement de la Plate-forme Airbnb.</a></strong><br />

                <strong><a href="#12">12. Notifications de contenu et Modération de contenu.</a></strong><br />

                <strong><a href="#13">13. Résiliation, suspension et autres mesures.</a></strong><br />

                <strong><a href="#14">14. Système de traitement des réclamations.</a></strong><br />

                <strong><a href="#15">15. Modification des présentes Conditions.</a></strong><br />

                <strong><a href="#16">16. Traitement des réclamations et des Demandes d'indemnisation pour dommages entre Membres.</a></strong><br />

                <strong><a href="#17">17. Rôle d'Airbnb.</a></strong><br />

                <strong><a href="#18">18. Comptes des membres.</a></strong><br />

                <strong><a href="#19">19. Exclusion de responsabilité.</a></strong><br />

                <strong><a href="#20">20. Responsabilité.</a></strong><br />

                <strong><a href="#21">21. Indemnisation.</a></strong><br />

                <strong><a href="#22">22. Entités contractantes.</a></strong><br />

                <strong><a href="#23">23. Droit applicable et juridiction.</a></strong><br />

                <strong><a href="#24">24. Divers.</a></strong><br />

                <strong><a href="#25">25. Résolution des litiges et convention d'arbitrage aux États-Unis.</a></strong><br />

                <strong>Conditions supplémentaires spécifiques aux Hôtes professionnels</strong><br />

                <strong><a href="#26">26. Accueil de voyageurs sur Airbnb en tant qu'Hôte professionnel.</a></strong><br />

                <strong><a href="#27">27. Traitement des réclamations et médiation.</a></strong><br />

                <strong><a href="#28">28. Accès aux données.</a></strong><br />

                <strong><a href="#29">29. Canaux de distribution supplémentaires.</a></strong><br />
            </p><br />
            <p>
                <strong style={{fontSize:18}}>Conditions relatives aux Voyageurs</strong><br />

                <strong id="1">1. Recherche et réservation sur Airbnb.</strong><br />

                <strong>1.1 Recherche.</strong> Vous pouvez rechercher des Services d'hôte en utilisant des critères tels que le type de Service d'hôte, le type de logement, la destination du voyage, les dates du voyage et le nombre de Voyageurs. Vous pouvez également utiliser des filtres pour affiner vos résultats de recherche. Les résultats de la recherche sont basés sur leur pertinence par rapport à votre recherche et à d'autres critères. La pertinence tient compte de facteurs tels que le prix, la disponibilité, les commentaires, l'historique de la relation avec l'assistance utilisateurs et celui des annulations, la popularité, les voyages précédents et les Annonces sélectionnées, les exigences de l'Hôte (par exemple, nombre de nuits minimum ou maximum), et plus encore. Pour en savoir plus sur les résultats de recherche, consultez l'article 5.3 et notre Centre d'aide. 
            </p><br />
            <p>
            <strong>1.2 Réservation.</strong> Lorsque vous réservez une Annonce, vous acceptez de payer tous les frais relatifs à votre réservation, y compris le prix du logement fixé dans l'Annonce, les frais applicables tels que les frais de service d'Airbnb, les frais perçus en personne, les taxes et tout autre élément identifié lors du paiement (collectivement, le « Prix total »). Si vous choisissez de payer en utilisant une devise qui diffère de la devise définie par l'Hôte pour son Annonce, le prix qui vous est affiché est basé sur un taux de conversion de devise déterminé par nous. Lorsque vous recevez la confirmation de réservation, un contrat pour les Services d'hôte (une « Réservation ») est formé directement entre vous et l'Hôte. Outre les présentes Conditions, vous serez soumis et responsable du respect de toutes les conditions de la Réservation, y compris, mais sans s'y limiter, les conditions d'annulation et tous les autres règlements, normes, politiques ou exigences identifiés dans l'Annonce ou lors du paiement qui s'appliquent à la Réservation. Il est de votre responsabilité de lire et de comprendre ces règlements, normes, politiques et exigences avant de réserver une Annonce. Sachez que certains Hôtes travaillent avec un co-hôte ou en tant que membre d'équipe pour fournir leurs Services d'hôte. 
            </p><br />
            <p>
            <strong>1.3 Réservations d'hébergement.</strong> Une réservation d'Hébergement est une licence limitée pour entrer, occuper et utiliser l'Hébergement. L'Hôte se réserve le droit de réintégrer l'Hébergement pendant votre séjour, le cas échéant si : (i) cela est raisonnablement nécessaire, (ii) cela est autorisé en vertu de votre contrat avec l'Hôte, et (iii) cela est permis par le droit applicable. Si vous restez après l'heure de départ, l'Hôte a le droit de vous faire partir d'une manière permise par le droit applicable, y compris en vous imposant des pénalités raisonnables pour séjour indûment prolongé. Vous ne pouvez pas dépasser le nombre maximal autorisé de Voyageurs. 
            </p><br />
            <p>
            <strong>1.4 Réservations d'Expériences et d'autres Services d'hôte.</strong> Une Réservation d'Expérience ou d'un autre Service d'hôte vous permet de participer à cette Expérience ou à ce Service d'hôte, d'y assister ou de l'utiliser. Il vous incombe de confirmer que vous, et toute personne que vous invitez, remplissez les conditions d'âge minimum, de compétence, d'aptitude ou autres. Vous êtes responsable d'informer l'Hôte de votre état de santé ou condition physique, ou de toute autre circonstance qui pourrait avoir un impact sur votre capacité à participer à l'Expérience, au Service d'hôte, d'y assister ou de l'utiliser. Sauf autorisation expresse, vous ne pouvez pas permettre à une personne de se joindre à une Expérience ou un autre Service d'hôte à moins que cette personne n'ait été incluse comme Voyageur supplémentaire lors de la procédure de réservation. 
            </p><br />
            <p>
            <strong id="2">2. Annulations, problèmes de réservation, remboursements et modifications de réservation.</strong>
            </p><br />
            <p>
            <strong>2.1 Annulations, problèmes de réservation et remboursements.</strong> En règle générale, si vous annulez une réservation, le montant qui vous est remboursé est déterminé par les conditions d'annulation applicables à cette Réservation. Mais, dans certaines situations, d'autres conditions peuvent être prioritaires et déterminer le montant qui vous est remboursé. Si un événement indépendant de votre volonté vous oblige à annuler une Réservation, vous êtes susceptible d'être éligible à un remboursement partiel ou intégral en vertu de notre Politique relative aux cas de force majeure. Si l'Hôte annule ou si vous rencontrez un Problème de réservation (tel que défini dans notre Politique de remplacement d'hébergement et de remboursement), vous pouvez être éligible à une aide pour une nouvelle réservation, ou à un remboursement partiel ou intégral en vertu de la Politique de remplacement d'hébergement et de remboursement. Différentes politiques s'appliquent à certaines catégories d'Annonces ; par exemple, les Réservations d'Expériences sont régies par la Politique de remboursement des Expériences. Voir les conditions juridiques supplémentaires et chaque politique pour plus de détails sur ce qui est couvert et sur le remboursement s'appliquant dans chaque situation. Vous pouvez faire appel d'une décision d'Airbnb en contactant notre assistance utilisateurs.
            </p><br />
            <p>
            <strong>2.2 Modifications de réservation.</strong> Les Hôtes et les Voyageurs sont responsables de toute Modification de réservation qu'ils acceptent d'apporter par le biais de la plateforme Airbnb ou demandent à l'assistance utilisateurs d'Airbnb d'effectuer en leur nom (« Modifications de réservations »), et acceptent de payer tout montant, frais ou taxes supplémentaires associés à toute Modification de réservation.
            </p><br />
            <strong id="3">3. Vos responsabilités.</strong><br />
            <p>
            Vous êtes responsable de vos propres actes et omissions et êtes également responsable des actes et omissions de toute personne que vous invitez à vous rejoindre (ou à laquelle vous donnez un accès) à un Hébergement, à tous les espaces et installations où l'Hébergement est situé que l'Hôte et le Voyageur sont légalement autorisés à utiliser dans le cadre de l'Hébergement (les « Espaces communs »), ou à toute Expérience ou autre Service d'hôte. Par exemple, cela signifie : (i) que vous avez la responsabilité de laisser un Hébergement (et les biens personnels associés) ou les Espaces communs dans l'état dans lequel vous les avez trouvés à votre arrivée, (ii) que vous avez la responsabilité de payer tous les montants de demande d'indemnisation raisonnables, et (iii) que vous devez agir avec intégrité, traiter les autres avec respect et vous conformer au droit applicable en tout temps. Si vous réservez pour un Voyageur supplémentaire qui est mineur ou si vous faites venir un mineur dans un Service d'hôte, vous devez être légalement autorisé à agir au nom du mineur et vous êtes seul responsable de la supervision de ce mineur.
            </p><br />
            <strong style={{fontSize:18}}>Conditions relatives aux Hôtes</strong>
            <p><br />
            <strong id="4"> 4. Accueil de voyageurs avec Airbnb.</strong>
            </p><br />
            <p>
            <strong>4.1 Hôte.</strong> En tant qu'Hôte, Airbnb vous offre le droit d'utiliser la plateforme Airbnb conformément aux présentes Conditions pour partager votre Hébergement, Expérience ou autre Service d'hôte avec notre communauté de Voyageurs, et de gagner de l'argent ce faisant. Créer une Annonce est très facile. Vous contrôlez la façon dont vous accueillez les voyageurs : vous fixez votre prix, vos disponibilités et le règlement pour chaque Annonce. Si vous êtes un Hôte professionnel conformément à l'article 26, des conditions supplémentaires s'appliquent. 
            </p><br />
            <p>
            <strong>4.2 Contrat avec les Voyageurs.</strong> Lorsque vous acceptez une demande de réservation ou recevez une confirmation de réservation sur la plateforme Airbnb, vous concluez un contrat directement avec le Voyageur et êtes responsable de la prestation du Service d'hôte selon les conditions et au prix spécifiés dans votre Annonce. Vous acceptez également de payer les frais applicables tels que les frais de service Airbnb (et les taxes applicables) pour chaque réservation. Airbnb Payments déduira les montants dus de votre versement, à moins que vous et nous ne convenions d'une autre méthode. Toutes les conditions ou modalités que vous incluez dans un contrat supplémentaire avec les Voyageurs doivent : (i) être conformes à ces Conditions, à nos conditions juridiques supplémentaires, à nos Politiques et aux informations fournies dans votre Annonce, et (ii) être divulguées de manière visible dans la description de votre Annonce.
            </p><br />
            <p>
            <strong>4.3 Indépendance des Hôtes.</strong> Votre relation avec Airbnb est celle d'une entité ou d'un individu indépendant et non un salarié, agent, co-entrepreneur ou partenaire d'Airbnb, à l'exception du fait qu'Airbnb Payments agit en tant qu'agent de recouvrement des paiements comme décrit dans les Conditions de paiement. Airbnb ne dirige ni ne contrôle votre Service d'hôte. Vous comprenez que vous avez toute latitude pour décider si et quand vous souhaitez fournir des Services d'hôte, et à quel prix et à quelles conditions les offrir.
            </p><br />
            <p>
            <strong id="5">5. Gestion de votre Annonce. </strong> 
            </p><br />
            <p>
            <strong>5.1 Création et gestion de votre Annonce.</strong> La plateforme Airbnb fournit des outils qui vous permettent de configurer et de gérer facilement une Annonce. Votre Annonce doit inclure des informations complètes et précises sur votre Service d'hôte, votre prix, les autres frais éventuels tels que les frais de ménage, les frais de séjour, les frais perçus en personne et tous les règlements ou toutes les exigences qui s'appliquent à vos Voyageurs ou à votre Annonce. Vous êtes responsable de vos propres actes et omissions, ainsi que de la mise à jour et de l'exactitude des informations de votre Annonce (y compris les dates de disponibilité de votre calendrier) et de son contenu (comme les photos) à tout moment. Vous êtes responsable de l'obtention d'une assurance appropriée pour vos Services d'hôte. Nous vous suggérons de lire attentivement les conditions de la police, y compris les modalités de couverture et les exclusions. Vous ne pouvez gérer qu'une seule Annonce par Hébergement, mais vous pouvez avoir plusieurs Annonces pour un même logement si celui-ci dispose de plusieurs Hébergements. Toute offre d'Expérience est soumise à nos Conditions supplémentaires pour les hôtes d'expériences.
            </p><br />
            <p>
            <strong>5.2 Connaître vos obligations légales.</strong> Vous êtes tenu de comprendre et de respecter l'ensemble des lois, règlements, réglementations et contrats avec des tiers qui s'appliquent à votre Annonce ou vos Services d'hôte. Par exemple, certains propriétaires et baux, ou des règlements de copropriété, limitent ou interdisent la sous-location, les locations courte durée et les séjours longue durée. Certaines villes ont adopté des plans locaux d'urbanisme ou autres réglementations similaires qui restreignent la location courte durée de propriétés résidentielles. Certaines collectivités locales, notamment des villes, exigent des Hôtes qu'ils s'enregistrent, obtiennent un permis ou un agrément avant de fournir certains Services d'hôte (tels que des locations courte durée, des séjours longue durée, la préparation de nourriture, la vente d'alcool, des visites guidées ou l'utilisation d'un véhicule). Dans certains endroits, les Services d'hôte que vous pourriez vouloir proposer peuvent être interdits. Certaines collectivités locales exigent l'enregistrement des Voyageurs qui séjournent dans votre Hébergement. Des juridictions ont adopté des réglementations qui créent des droits de location pour les Voyageurs et des obligations supplémentaires pour les Hôtes. Par exemple, certaines lois peuvent réglementer la location, le contrôle des loyers et l'expulsion pour les séjours longue durée. Vérifiez la réglementation nationale et locale pour connaître les règles qui s'appliquent aux Services d'hôte que vous prévoyez d'offrir. Les informations que nous fournissons concernant les exigences légales sont uniquement à titre d'information. Vous devez vérifier vos obligations de manière indépendante. Vous êtes responsable du traitement et de l'utilisation des données personnelles des Voyageurs et d'autres personnes conformément aux lois sur la protection de la vie privée et aux présentes Conditions, y compris nos Règles de confidentialité applicables aux Hôtes. Si vous avez des questions sur la façon dont la législation locale s'applique, vous devez toujours consulter un conseiller juridique tel un avocat. 
            </p><br />
            <p>
            <strong>5.3 Résultats de recherche.</strong> Le classement et l'affichage des Annonces dans les résultats de recherche sur la plateforme Airbnb dépend de plusieurs facteurs, principalement les suivants :

            paramètres de recherche indiqués par les Voyageurs (par exemple, nombre de Voyageurs, destination, date et durée du voyage, fourchette de prix),
            caractéristiques de l'Annonce (par exemple, l'emplacement, le prix, les disponibilités du calendrier, le nombre et la qualité des photos, les avis, les évaluations et autres signaux de qualité, le type ou la catégorie du Service d'hôte, le statut de l'hôte, la durée pendant laquelle l'Annonce a été en ligne sur la plateforme Airbnb, l'engagement et la popularité auprès des Voyageurs),
            expérience du Voyageur (par exemple, l'historique des annulations et du recours à l'assistance utilisateurs de l'Hôte, la facilité de la réservation),
            Exigences de l'Hôte et de l'Annonce (par exemple, nombre de nuits minimum ou maximum, heure limite de réservation), et
            préférences et historique du Voyageur (par exemple, voyages précédents, Annonces consultées et enregistrées, emplacement à partir duquel le Voyageur effectue sa recherche).

            Les résultats de recherche peuvent être différents sur notre application mobile et sur notre site web, et peuvent également différer dans l'affichage de la carte. Airbnb peut permettre aux Hôtes de promouvoir leurs Annonces dans les résultats de recherche ou ailleurs sur la plateforme Airbnb moyennant des frais supplémentaires. Vous trouverez de plus amples informations sur les facteurs qui déterminent le classement de votre Annonce dans les résultats de recherche, sur nos programmes de promotion actuels (le cas échéant) et sur la manière dont nous identifions le contenu promu dans notre Centre d'aide. 
            </p><br />
            <p>
            <strong>5.4 Vos responsabilités.</strong> Vous êtes responsable de vos propres actes et omissions ainsi que de ceux des personnes que vous autorisez à participer à la prestation de vos Services d'hôte. Vous êtes responsable des tarifs, du règlement et des exigences de votre annonce. Vous devez décrire tous les frais et éléments facturés dans la description de votre annonce, mais vous ne pouvez pas percevoir de frais ni facturer d'éléments supplémentaires en dehors de la plateforme Airbnb, à l'exception de ceux expressément autorisés par notre Politique qui régit les frais perçus en personne. N'encouragez pas les Voyageurs à créer des comptes tiers, à soumettre des commentaires, à fournir leurs coordonnées ou à mener d'autres actions en dehors de la plateforme Airbnb, en violation de notre Politique hors plateforme. 
            </p><br />
            <p>
            <strong>5.5 Accueil de Voyageurs en tant qu'équipe ou organisation.</strong> Si vous travaillez avec un co-hôte ou un hôte en tant que membre d'une équipe, d'une entreprise ou d'une autre organisation, vous êtes responsable en tant qu'Hôte en vertu des présentes Conditions des actes et omissions de chaque entité et individu qui participe avec vous à la prestation des Services d'hôte pour chacune de vos annonces et vous êtes tenu d'informer le personnel engagé par vous pour fournir les Services d'hôte de vos obligations en vertu des présentes Conditions. Si vous acceptez des conditions ou si vous concluez des contrats, vous déclarez et garantissez que vous êtes autorisé à conclure des contrats pour votre équipe, votre entreprise ou toute autre organisation et que chaque entité que vous utilisez est en règle selon les lois du lieu où elle est établie. Si vous exercez d'autres fonctions, vous déclarez et garantissez être autorisé à exercer ces fonctions. Si vous demandez à Airbnb de transférer une partie de votre versement à un co-hôte ou à d'autres Hôtes, ou d'envoyer des paiements à un tiers, vous devez être autorisé à le faire. Vous êtes responsable des montants des paiements et de l'exactitude des informations que vous fournissez. 
            </p><br />
            <p>
            <strong id="6">6. Annulations, Problèmes de réservation et Modifications de réservation. </strong> 
            </p><br />
            <p>
            <strong>6.1 Annulations et Problèmes de réservation.</strong> En général, si un Voyageur annule une Réservation, le montant qui vous est payé est déterminé par les conditions d'annulation applicables à cette Réservation. En tant qu'Hôte, vous ne devez pas annuler la réservation d'un Voyageur sans raison valable en vertu de notre Politique relative aux cas de force majeure ou de la loi applicable. Si vous annulez la réservation d'un Voyageur sans une telle raison valable, nous pouvons imposer des frais d'annulation et d'autres conséquences. Si : (i) un Voyageur rencontre un Problème de réservation (tel que défini par la Politique de remplacement d'hébergement et de remboursement), (ii) un Cas de force majeure survient, ou (iii) une Réservation est annulée en vertu de l'article 13 des présentes Conditions, le montant qui vous est payé est réduit du montant que nous remboursons ou fournissons au Voyageur, et de tous les autres frais raisonnables que nous encourons à la suite de l'annulation. Si un Voyageur reçoit un remboursement alors que vous avez déjà été payé, ou si le montant du remboursement et des autres frais engagés par Airbnb dépasse votre paiement, Airbnb (par le biais d'Airbnb Payments) peut récupérer ce montant auprès de vous, y compris en déduisant le remboursement de vos versements futurs. Vous acceptez que la Politique de remplacement d'hébergement et de remboursement et la Politique relative aux cas de force majeure d'Airbnb, ainsi que ces Conditions, prévalent sur les conditions d'annulation que vous avez établies dans les situations où elles permettent l'annulation d'une réservation ou l'émission de remboursements aux Voyageurs. Si nous prévoyons raisonnablement de rembourser un Voyageur en vertu de l'une de ces Politiques, nous pouvons retenir tout versement pour cette réservation jusqu'à ce qu'une décision de remboursement soit prise. Si vous êtes l'Hôte d'une Expérience, veuillez noter que les conditions d'annulation de l'expérience, la Politique de remboursement des voyageurs d'Expériences ainsi que des frais d'annulation et d'autres conséquences s'appliquent à vos réservations. Consultez chaque politique pour obtenir des détails sur ce qui est couvert et sur le montant de votre versement dans chaque situation. Vous pouvez faire appel d'une décision d'Airbnb en contactant notre assistance utilisateurs.
            </p><br />
            <p>
            <strong>6.2 Modifications de réservation.</strong> Les Hôtes et les Voyageurs sont responsables de toute Modification de réservation qu'ils acceptent de faire sur la plateforme Airbnb ou qu'ils demandent à l'assistance utilisateurs Airbnb de faire en leur nom, et acceptent de payer tout montant supplémentaire, frais ou taxes associés à une Modification de réservation.
            </p><br />
            <p>
                <strong id="7">7. Taxes.</strong>
            </p><br />
            <p>
            <strong>7.1 Taxes applicables aux hôtes.</strong> En tant qu'Hôte, vous êtes responsable de déterminer et de remplir vos obligations en vertu des lois applicables pour déclarer, collecter, verser ou inclure dans votre prix toute TVA ou autres taxes indirectes, taxes de séjour, taxes de tourisme, impôts sur le revenu ou autres taxes applicables (« Taxes »). 
            </p><br />
            <p>
            <strong>7.2 Collecte et versement par Airbnb.</strong> Dans les collectivités (comme des villes) où Airbnb facilite la collecte et/ou le reversement des taxes au nom des Hôtes, vous donnez l'instruction et l'autorisation à Airbnb de collecter les taxes en votre nom et/ou de reverser ces taxes à l'autorité fiscale compétente. Toutes les taxes collectées et/ou reversées par Airbnb sont signalées aux Membres sur leurs relevés de transaction, le cas échéant. Airbnb peut demander des montants supplémentaires aux Membres (y compris en déduisant ces montants des versements futurs) dans le cas où les Taxes collectées ou reversées sont insuffisantes pour honorer pleinement les obligations fiscales de ces Membres. En cas de désaccord avec le montant des Taxes collectées et reversées par Airbnb, veuillez contacter l'administration fiscale locale afin de solliciter un remboursement. Vous reconnaissez et acceptez que nous nous réservons le droit, avec notification préalable des Membres concernés, de cesser la collecte et le reversement des taxes dans toute juridiction pour quelque raison que ce soit. 
            </p><br />
            <p>
            <strong>7.3 Informations fiscales.</strong> Dans certaines collectivités locales, les réglementations fiscales peuvent nous contraindre à collecter et/ou à déclarer des informations fiscales vous concernant, à prélever des taxes sur vos versements, ou les deux. Si vous ne nous fournissez pas les documents que nous jugeons suffisants pour justifier une telle obligation de prélever des taxes sur les versements qui vous sont destinés, nous pouvons prélever les versements jusqu'à concurrence du montant requis par la loi, jusqu'à ce que des documents suffisants soient fournis. Vous acceptez qu'Airbnb puisse émettre en votre nom des factures ou des documents similaires pour la TVA, toute taxe sur les produits et services, sur la consommation ou relative à vos Services d'hôte afin de faciliter des déclarations fiscales précises.
            </p><br />
            <p>
            <strong style={{fontSize:18}}>Conditions générales</strong>
            </p><br />
            <p>
                <strong id="8">8. Commentaires. </strong>
            </p><br />
            <p>
            Après chaque Service d'hôte, les Voyageurs et les Hôtes ont la possibilité de se laisser mutuellement un commentaire. Votre commentaire doit être précis et ne peut contenir aucun propos discriminatoire, offensant, diffamatoire ou autre qui violerait les présentes conditions, le droit applicable, notre Politique en matière de contenus ou notre Politique en matière de commentaires. Les Commentaires ne sont pas vérifiés par Airbnb et peuvent être infondés ou trompeurs. 
            </p><br />
            <p>
                <strong id="9">9. Contenu. </strong>
            </p><br />
            <p>
                Certaines parties de la plateforme Airbnb vous permettent de fournir des commentaires, du texte, des photos, de l'audio, de la vidéo, des informations et d'autres contenus (« le Contenu »). En fournissant du Contenu, sous quelque forme et par quelque moyen que ce soit, vous accordez à Airbnb, à partir du moment où vous créez ou publiez ce Contenu et pour la durée de la protection des droits cédés, une licence non exclusive, mondiale, libre de droits, pouvant faire l'objet d'une sous-licence et cessible, pour accéder à, utiliser, stocker, reproduire, modifier, créer des œuvres dérivées de, distribuer, publier, transmettre, diffuser et exploiter de toute autre manière ce Contenu de membres afin de fournir et/ou promouvoir la plateforme Airbnb sur tout support, connu ou non encore connu à ce jour et en particulier sur Internet et sur les réseaux sociaux. Si le Contenu comprend des informations personnelles, ce Contenu ne sera utilisé à ces fins que si cette utilisation est conforme aux lois applicables en matière de protection des données conformément à notre Politique de confidentialité. Lorsque Airbnb paie pour la création d'un Contenu ou facilite sa création, Airbnb peut être propriétaire de ce Contenu, auquel cas des conditions supplémentaires le préciseront. Vous êtes seul responsable de tout le Contenu que vous fournissez et garantissez que vous en êtes le propriétaire ou que vous êtes autorisé à accorder à Airbnb les droits décrits dans ces Conditions. Vous êtes responsable si l'un de vos Contenus viole ou enfreint les droits de propriété intellectuelle ou de confidentialité d'un tiers. Le Contenu doit être conforme à notre Politique en matière de contenus et à notre Politique de non-discrimination, qui interdisent, entre autres, les contenus discriminatoires, obscènes, harcelants, trompeurs, violents et illégaux. Vous acceptez qu'Airbnb peut mettre à disposition des services ou des outils automatisés pour traduire le Contenu et que votre Contenu peut être traduit en utilisant ces services ou outils. Airbnb ne garantit pas l'exactitude ou la qualité de ces traductions, et il appartient aux Membres de vérifier l'exactitude de ces traductions.
            </p><br />
            <p>
            <strong id="10">10. Frais. </strong>
            </p><br />
            <p>
            Airbnb peut facturer des frais (et les taxes applicables) aux Hôtes et aux Voyageurs pour le droit d'utiliser la plateforme Airbnb. Tous les frais applicables sont divulgués aux Hôtes avant la publication d'une Annonce et aux Voyageurs avant la Réservation. Pour en savoir plus sur les frais de service applicables et leur mode de calcul, consultez notre page consacrée aux frais de service. Sauf mention contraire sur la plateforme Airbnb, les frais de service ne sont pas remboursables.
            </p><br />
            <p>
            <strong id="11">11. Règles de la plateforme Airbnb.</strong>
            </p><br />
            
            <strong>11.1 Règlement.</strong> Vous devez respecter ces règles et ne devez pas aider ou inciter d'autres personnes à les enfreindre ou à les contourner.

                <li>Agir avec intégrité et traiter les autres avec respect</li>
                <li>Ne pas mentir, représenter faussement quelque chose ou quelqu'un, ou prétendre être quelqu'un d'autre.</li>
                <li>Faire preuve de politesse et de respect lorsque vous communiquez ou interagissez avec les autres.</li>
                <li>Ne tentez pas de vous soustraire à l'application des présentes Conditions, de nos Conditions juridiques supplémentaires, de nos Politiques et de nos Normes, par exemple en créant des comptes ou des annonces en double.</li>
                <li>Respecter notre Politique de non-discrimination et ne pas discriminer ou harceler les autres.</li>
                <li>Ne pas endommager, pirater, faire de l'ingénierie inverse (« reverse engineering »), compromettre ou altérer la plateforme Airbnb</li>
                <li>Ne pas utiliser des robots, crawlers, scrapers ou autres moyens automatisés pour accéder à des données ou autre Contenu ou les récupérer sur la plateforme Airbnb ou pour interagir avec cette dernière.</li>
                <li>Ne pas pirater, contourner, supprimer, altérer ou tenter de circonvenir toute mesure de sécurité ou technologique utilisée pour protéger la plateforme ou le Contenu Airbnb.</li>
                <li>Ne pas déchiffrer, décompiler, désassembler ou faire de l'ingénierie inverse des logiciels ou du matériel utilisés pour fournir la plateforme Airbnb.</li>
                <li>Ne pas entreprendre d'action qui pourrait perturber ou nuire à la performance ou au bon fonctionnement de la plateforme Airbnb.</li>
                <li>Ne pas utiliser la plateforme Airbnb en dehors du cadre des présentes Conditions ou de tout autre contrat établi avec Airbnb</li>
                <li>Vous ne pouvez utiliser les informations personnelles d'un autre Membre que dans la mesure du nécessaire pour faciliter une transaction utilisant la plateforme Airbnb, comme autorisé par les présentes Conditions.</li>
                <li>Ne pas utiliser la plateforme Airbnb, nos outils de messagerie ou les informations personnelles des Membres pour envoyer des messages commerciaux sans le consentement explicite du destinataire.</li>
                <li>Utiliser le Contenu mis à disposition par la plateforme Airbnb uniquement si cela est nécessaire pour vous permettre d'utiliser la plateforme Airbnb en tant que Voyageur ou Hôte.</li>
                <li>Ne pas utiliser le Contenu sauf si vous disposez de la permission du propriétaire du Contenu ou si l'utilisation est autorisée par nous dans ces conditions ou dans un autre contrat que vous avez établi avec Airbnb.</li>
                <li>Ne pas demander, effectuer ou accepter une Réservation ou un Versement en dehors de la plateforme Airbnb pour éviter de payer des frais, des taxes ou pour toute autre raison. Consultez notre politique qui régit les frais perçus en personne pour connaître les exceptions.</li>
                <li>Ne pas obliger ou encourager les Voyageurs à ouvrir un compte, laisser un commentaire ou interagir de toute autre manière avec un site web, une application ou un service tiers avant, pendant ou après une réservation, sauf autorisation d'Airbnb.</li>
                <li>Ne pas tenter de manipuler notre algorithme de recherche.</li>
                <li>Ne pas réserver de Services d'hôte à moins que vous n'utilisiez effectivement ces services.</li>
                <li>Ne pas utiliser, copier, afficher ou encadrer la plateforme Airbnb, tout Contenu, toute marque Airbnb, ou toute mise en page ou conception sans notre consentement.</li>
                <li>Respecter vos obligations légales</li>
                <li>Comprendre et respecter les lois qui s'appliquent à vous, y compris les lois sur la vie privée, la protection des données et l'exportation.</li>
                <li>Si vous nous fournissez les informations personnelles relatives à une autre personne : (i) vous devez le faire dans le respect du droit applicable, (ii) vous devez être autorisé à le faire, et (iii) vous nous autorisez à traiter ces informations dans le cadre de notre Politique de confidentialité.</li>
                <li>Lire et respecter les présentes Conditions ainsi que nos Conditions juridiques additionnelles, Politiques et Normes.</li>
                <li>Ne pas organiser ou faciliter des fêtes ou des événements non autorisés. Vous êtes responsable de toute fête ou événement pendant votre réservation qui enfreint notre Politique relative aux fêtes et événements, telle qu'incorporée par référence aux présentes.</li>
                <li>Ne pas utiliser le nom, le logo, la marque ou les marques déposées d'Airbnb ou d'autres personnes sans autorisation, et uniquement comme indiqué dans nos Consignes relatives aux marques.</li>
                <li>Ne pas utiliser ou enregistrer un nom de domaine, un identifiant de réseau social, un nom commercial, une marque, un logo ou tout autre identifiant de source qui soit similaire au point de pouvoir être confondu avec les logos ou marques d'Airbnb. Pour plus d'informations, consultez nos Consignes relatives aux marques.</li>
                <li>Ne pas proposer de Services d'hôte qui enfreignent les lois ou les contrats qui vous concernent.</li>
                <li>Ne pas offrir ou solliciter de services de prostitution, ni participer à la traite des êtres humains ou la faciliter.</li>
            <br />
            <p>
            <strong>11.2 Signalement d'une infraction.</strong> Si vous pensez qu'un Membre, une Annonce ou un Contenu présente un risque imminent de dommage pour une personne ou un logement, vous devez immédiatement contacter les autorités locales avant de contacter Airbnb. En outre, si vous pensez qu'un Membre, une Annonce ou un Contenu constitue un manquement à nos Normes, vous devez faire part de vos préoccupations à Airbnb. Si vous avez signalé un problème aux autorités locales, Airbnb peut demander une copie de ce signalement. Sauf si la loi l'exige, nous ne sommes pas tenus de prendre des mesures en réponse à un signalement. 
            </p><br />
            <p>
            <strong id="12"> 12. Notifications de contenu et modération de contenu.</strong>
            </p><br />
            <p>
            <strong>12.1</strong> Vous reconnaissez qu'Airbnb n'a aucune obligation de surveiller le Contenu fourni par les Membres et stocké pour leur compte, ou de rechercher activement des faits ou des circonstances indiquant une activité illégale ou l'incompatibilité du Contenu avec les droits de tiers, les présentes Conditions ou les Politiques et Normes d'Airbnb. Cependant, Airbnb se réserve le droit de mener des enquêtes volontaires de sa propre initiative pour détecter, identifier et supprimer ou désactiver l'accès à un Contenu illégal ou incompatible, et de prendre toutes les mesures nécessaires conformément aux présentes Conditions. 
            </p><br />
            <p>
            <strong>12.3</strong> Airbnb fournit aux Membres et aux tiers, y compris les signaleurs de confiance désignés conformément à l'article 22 du Règlement (UE) 2022/2065 (« Notificateurs »), les moyens de notifier à Airbnb tout Contenu présumé illégal (y compris les violations du droit d'auteur) sur la plateforme Airbnb en utilisant notre formulaire de notification électronique (« Notification relative au contenu »). Pour en savoir plus sur la manière de signaler un Contenu, consultez notre Centre d'aide.
            </p><br />
            <p>
            <strong>12.4</strong> Dans le cadre des enquêtes menées de sa propre initiative et de l'examen des Notifications de contenu, Airbnb utilise divers processus et outils pour identifier, examiner et modérer le Contenu. Il peut s'agir d'un examen humain, d'un examen automatisé ou d'une combinaison des deux. Si des moyens automatisés ont été utilisés pour examiner le Contenu, et qu'Airbnb a par la suite pris des mesures à l'égard de ce Contenu, Airbnb informera le Membre qui a publié le Contenu de l'utilisation de moyens automatisés dans la mesure où les intérêts légitimes d'Airbnb et de ses Membres ne s'opposent pas à une telle notification.
            </p><br />
            <p>
            <strong>12.5</strong> Utilisation abusive des Notifications relatives au contenu. Airbnb est en droit de suspendre le traitement des Notifications relatives au contenu pour une période raisonnable, si le Notificateur en question envoie fréquemment des notifications qui sont manifestement infondées. Le cas échéant, Airbnb émettra un avertissement avant une telle suspension. Pour décider d'une suspension, Airbnb tiendra compte de tous les faits et circonstances pertinents ressortant des informations dont Airbnb dispose, y compris (i) le nombre, la gravité et la fréquence des notifications non fondées ; (ii) le rapport entre les notifications non fondées et toutes les notifications du Notificateur ; et (iii) les intentions poursuivies par le Notificateur, dans la mesure où elles peuvent être déterminées par Airbnb.
            </p><br />
            <p>
            <strong id="13">13. Résiliation, suspension et autres mesures.</strong>
            </p><br />
            <p>
            <strong>13.1 Durée.</strong> Le contrat entre vous et Airbnb reflété par ces Conditions reste en vigueur jusqu'à ce que vous ou nous résilions le contrat conformément à ces Conditions. 
            </p><br />
            <p>
            <strong>13.2 Résiliation.</strong> Vous pouvez résilier le présent contrat à tout moment en nous envoyant un e-mail ou en supprimant votre compte. Airbnb peut résilier ce contrat pour toute raison en vous donnant un préavis de 30 jours par e-mail ou en utilisant toute autre coordonnée que vous avez fournie pour votre compte. Airbnb peut également résilier ce contrat immédiatement et sans préavis et cesser de fournir l'accès à la plateforme Airbnb si (i) vous violez matériellement ces Conditions ou nos Conditions juridiques additionnelles ou nos Politiques, si (ii) vous violez les lois applicables, ou si (iii) une telle action est nécessaire pour protéger la sécurité personnelle ou la propriété d'Airbnb, de ses Membres ou de tiers (par exemple, dans le cas d'un comportement frauduleux d'un Membre), ou si (iv) votre compte est inactif depuis plus de deux ans. 
            </p><br />
            <p>
            <strong>13.3 Infractions commises par un Membre.</strong> Si (i) vous violez ces Conditions, nos Conditions juridiques additionnelles, nos Politiques ou nos Normes, (ii) vous violez le droit applicable, les règlements ou les droits des tiers, (iii) vous fournissez un Contenu illégal ou incompatible avec les présentes Conditions (iv) vous avez reçu à plusieurs reprises de mauvais commentaires ou si Airbnb prend connaissance ou a reçu des réclamations concernant votre performance ou votre conduite, (v) vous avez annulé à plusieurs reprises des réservations confirmées ou si vous n'avez pas répondu aux demandes de réservation sans raison valable, ou si (vi) une telle action est nécessaire pour protéger la sécurité personnelle ou la propriété d'Airbnb, de ses Membres ou de tiers, Airbnb peut :

                - suspendre ou limiter votre accès à la plateforme Airbnb ou à votre compte ou son utilisation ;<br />
                - suspendre, supprimer, désactiver l'accès ou restreindre la visibilité des Annonces, des commentaires ou d'autres Contenus ;<br />
                - annuler des réservations en cours ou confirmées ; ou suspendre ou révoquer tout statut spécial associé à votre compte. <br />

                En cas d'infractions mineures ou s'il y a lieu, vous serez informé de toute mesure envisagée par Airbnb et aurez la possibilité de remédier au problème, sauf si cette notification (i) éviterait ou empêcherait la détection ou la prévention de la fraude ou d'autres activités illégales en cause, (ii) porterait préjudice aux intérêts légitimes d'autres Membres ou de tiers, ou (iii) violerait les lois applicables.

                Si nous prenons l'une de ces mesures, Airbnb vous en informera, le cas échéant, en motivant sa décision, conformément à ses obligations légales. 
            </p><br />
            <p>
            <strong>13.4 Mandats légaux.</strong> Airbnb peut prendre toute mesure qu'il juge raisonnablement nécessaire pour se conformer à la loi applicable, ou à une décision d'un tribunal, ou de toute autre autorité judiciaire, administrative ou de police dûment habilitée, y compris les mesures décrites ci-dessus dans l'article 13.3.
            </p><br />
            <p>
            <strong>13.5 Effet de la résiliation.</strong> Si vous êtes Hôte et résiliez votre compte Airbnb, toutes les réservations confirmées seront automatiquement annulées et vos Voyageurs recevront un remboursement intégral. Si vous supprimez votre compte Airbnb en tant que Voyageur, toutes les réservations confirmées seront automatiquement annulées et le remboursement éventuel dépendra des conditions d'annulation de l'Annonce. En cas de résiliation de ce contrat, vous n'avez pas droit à une restauration de votre compte ou de votre Contenu. Si votre accès à la plateforme Airbnb ou son utilisation a été limité, si votre compte Airbnb a été suspendu, ou ce contrat a été résilié par nous, vous ne pouvez pas enregistrer un nouveau compte ou accéder à la plateforme Airbnb ou l'utiliser à travers un compte d'un autre Membre.
            </p><br />
            <p>
            <strong id="14">14. Système de traitement des réclamations.</strong> 
            </p><br />
            <p>
            <strong>14.1</strong> Si vous êtes un Membre avec votre pays de résidence ou d'établissement dans l'EEE et qu'Airbnb prend l'une des mesures prévues à l'article 13.3 au motif que le Contenu que vous fournissez est illégal ou incompatible avec les présentes Conditions, vous pouvez envoyer une réclamation contre une telle mesure par le biais de notre système interne de traitement des réclamations. Pour en savoir plus sur la façon d'envoyer une réclamation, consultez le Centre d'aide.
            </p><br />
            <p>
            <strong>14.2</strong> Le système de traitement des réclamations d'Airbnb est également disponible pour les Membres et les tiers avec leur pays de résidence ou d'établissement dans l'EEE qui ont envoyé une Notification relative au contenu conformément à l'article 12.3 des présentes Conditions, si la notification a été rejetée en tout ou en partie par Airbnb.
            </p><br />
            <p>
            <strong>14.3</strong> Une réclamation peut être envoyée par le biais de notre système de traitement des réclamations pendant une période de six (6) mois, à compter, dans le cas de l'article 14.1, du jour où un Membre est informé de la mesure prise et, dans le cas de l'article 14.2, du jour où le Notificateur est informé du rejet de sa Notification relative au contenu.
            </p><br />
            <p>
            <strong>14.4</strong> Airbnb est en droit de suspendre le traitement des réclamations des Membres et des Notificateurs pour une période raisonnable, si le Membre ou le Notificateur en question envoie fréquemment des réclamations qui sont manifestement infondées. Le cas échéant, Airbnb émettra un avertissement avant une telle suspension. Pour décider d'une suspension, Airbnb tient compte de tous les faits et circonstances pertinents ressortant des informations dont Airbnb dispose, y compris (i) le nombre, la gravité et la fréquence des réclamations non fondées ; (ii) le rapport entre les réclamations non fondées et toutes les réclamations ; et (iii) les intentions poursuivies par le Membre ou le Notificateur, dans la mesure où cela peut être déterminé par Airbnb. 
            </p><br />
            <p>
            <strong>14.5</strong> Les Membres visés par les mesures conformément à l'article 14.1 et les Notificateurs qui ont envoyé des Notifications relatives au contenu qui ont été rejetées par Airbnb, ont le droit de sélectionner un organisme de règlement extrajudiciaire des litiges certifié conformément à l'article 21 du Règlement (UE) 2022/2065 afin de résoudre les litiges relatifs à ces mesures, y compris les réclamations qui n'ont pas été résolues au moyen de notre système de traitement des réclamations. Les deux parties s'engageront, de bonne foi, avec l'organisme de règlement des litiges sélectionné pour résoudre le litige. Airbnb se réserve le droit de refuser de contacter l'organe de règlement des litiges si un litige concernant le même Contenu et les mêmes motifs d'illégalité présumée du Contenu ou son incompatibilité présumée avec les présentes Conditions a déjà été résolu ou fait déjà l'objet d'une procédure en cours devant un tribunal compétent ou un autre organe de règlement des litiges extrajudiciaire compétent.
            </p><br />
            <p>
            <strong>14.6</strong> Pour toutes les autres demandes d'information et réclamations qui ne sont pas soumises au système de traitement des réclamations d'Airbnb, les Membres peuvent contacter notre assistance utilisateurs.
            </p><br />
            <p>
            <strong id="15">15. Modification des présentes Conditions.</strong>
            </p><br />
            <p>
            Lorsque nous proposons des modifications aux présentes Conditions, nous publions les Conditions mises à jour sur la plateforme Airbnb et actualisons la date de « dernière mise à jour » figurant en haut de la page des présentes Conditions. Nous vous informerons des modifications proposées, au minimum trente (30) jours avant leur date d'entrée en vigueur, par le biais de notifications par e-mail, de la plateforme Airbnb, d'un service de messagerie ou de toute autre méthode de contact que nous mettons à votre disposition et que vous avez sélectionnée. Si les modifications proposées aux présentes Conditions sont significatives, il vous sera demandé d'accepter explicitement les Conditions mises à jour. Cette notification vous informera également de votre droit de refuser les modifications proposées, du délai pour le faire et de votre droit de résilier le contrat à tout moment avant la date d'entrée en vigueur des modifications proposées, comme prévu dans les présentes Conditions. En cas (i) de modifications non matérielles des présentes Conditions qui n'affectent pas leurs dispositions essentielles, notamment les dispositions définissant la nature et la portée des services fournis par Airbnb, ou (ii) de modifications exigées par la loi, une décision de justice juridiquement contraignante ou un ordre contraignant d'une autorité compétente, votre utilisation continue de la plateforme Airbnb après la date d'entrée en vigueur des modifications proposées vaudra acceptation des Conditions révisées.
            </p><br />
            <p>
            <strong id="16">16. Traitement des réclamations et des demandes d'indemnisation pour dommages entre Membres. </strong>
            </p>
            <p>
            <strong>16.1</strong> Si un Membre fournit des preuves valables que vous, votre ou vos voyageurs ou votre ou vos animaux de compagnie avez, de manière fautive :

            (i) endommagé le logement ou les biens personnels du Membre plaignant ou du Propriétaire de l'Hébergement (lorsque le Propriétaire de l'Hébergement n'est pas également l'Hôte), ou le logement ou les biens personnels dont le Membre plaignant est responsable, ou dans lesquels il a un intérêt économique, ou

            (ii) causé une perte de revenus de réservation pour des réservations sur la plateforme Airbnb ou d'autres dommages indirects, qui résultent directement du dommage causé en vertu du point (i) ci-dessus ; ou

            (iii) autrement causé au Membre plaignant des frais de nettoyage supérieurs aux frais de nettoyage du Membre (chacun des points (i), (ii) et (iii) étant une « Demande d'indemnisation pour dommages »),

            le Membre plaignant peut informer Airbnb et/ou demander une indemnisation par le biais du Centre de résolution. Vous serez informé de la Demande d'indemnisation pour dommages et aurez la possibilité de répondre. Si vous acceptez de payer, vous autorisez Airbnb par le biais d'Airbnb Payments à collecter le montant de la Demande d'indemnisation pour dommages auprès de vous. 
            </p><br />
            <p>
            <strong>16.2</strong> Si l'Hôte et le Voyageur ne parviennent pas à trouver une résolution, ou si un Voyageur ne paie pas une Demande d'indemnisation pour dommages, l'Hôte peut en informer Airbnb par le biais du Centre de résolution conformément aux Conditions de la Garantie dommages des hôtes et demander une indemnisation. Airbnb examinera la Demande d'indemnisation pour dommages et demandera à l'Hôte de fournir toute preuve requise (par exemple par le biais de documents appropriés, de photos, de factures ou de rapports d'experts tiers) justifiant la Demande d'indemnisation pour dommages et le montant de la Demande d'indemnisation pour dommages. Le Voyageur aura la possibilité de répondre et de fournir toute contre-preuve pertinente. Si Airbnb détermine, en tenant compte des preuves fournies, des Conditions de la Garantie dommages des hôtes et des règles légales applicables en matière de charge de la preuve, que le Voyageur est responsable de la Demande d'indemnisation pour dommages, Airbnb (par l'intermédiaire d'Airbnb Payments) versera la Demande d'indemnisation pour dommages à l'Hôte. Si Airbnb procède au paiement de la Demande d'indemnisation pour dommages à l'Hôte, Airbnb peut percevoir le montant de la Demande d'indemnisation pour dommages auprès du Voyageur, y compris en débitant le Mode de paiement du voyageur jusqu'à un montant maximum de 500 dollars américains. Airbnb peut également exercer ses droits de demandes de recouvrement des montants des Demande d'indemnisation pour dommages, y compris les montants dépassant le montant maximum applicable pour le débit du Mode de paiement du Voyageur, contre un Voyageur en utilisant tous les recours dont il peut disposer en vertu de la loi applicable, y compris le renvoi de l'affaire à une agence de recouvrement, et/ou la poursuite des causes d'action ou des réclamations disponibles contre un Voyageur. Les Membres peuvent faire appel d'une décision d'Airbnb en contactant notre assistance utilisateurs. Entre les Membres et Airbnb, la charge de la preuve concernant la Demande d'indemnisation pour dommages et le montant de la Demande d'indemnisation pour dommages incombe toujours à Airbnb.
            </p><br />
            <p>
            <strong>16.3</strong> Vous acceptez de coopérer de bonne foi, de fournir toute information demandée par Airbnb, de signer des documents et de prendre d'autres mesures raisonnables en relation avec les Demandes d'indemnisation pour dommages, les réclamations des membres, les demandes d'indemnisation en vertu des polices d'assurance ou d'autres demandes d'indemnisation pour dommages liées à votre fourniture ou utilisation des Services d'hôte.
            </p><br />
            <p>
            <strong>16.4</strong> Les décisions d'Airbnb relatives à une Demande d'indemnisation pour dommages n'affectent pas vos droits contractuels ou légaux. Cette clause n'affecte pas votre droit d'engager des poursuites judiciaires devant un tribunal.
            </p><br />
            <p>
            <strong id="17">17. Rôle d'Airbnb. </strong>
            </p><br />
            <p>
                Nous vous offrons le droit d'utiliser une plateforme permettant aux Membres de publier, d'offrir, de rechercher et de réserver des Services d'hôte. Lorsque des Membres font ou acceptent une réservation, ils concluent un contrat entre eux directement. Airbnb n'est pas et ne devient pas partie à un quelconque contrat passé entre des Membres. Airbnb n'agit pas en qualité de mandataire d'un quelconque Membre, sauf lorsque Airbnb Payments agit en qualité de mandataire de recouvrement comme le prévoient les Conditions de paiement. Bien que nous fassions tout notre possible pour nous assurer que nos Membres vivent d'excellentes expériences avec Airbnb, nous ne contrôlons pas et ne pouvons pas contrôler la conduite des Voyageurs et des Hôtes et nous ne garantissons pas (i) l'existence, la qualité, la sécurité, la pertinence ou la légalité des Annonces ou des Services d'hôte ou (ii) la véracité ou l'exactitude des descriptions des Annonces, des commentaires ou d'autres Contenus fournis par les Membres. Vous reconnaissez qu'Airbnb a le droit de vérifier le Contenu, désactiver son accès, le supprimer ou le modifier pour : (i) exploiter, sécuriser et améliorer la plateforme Airbnb (y compris pour la prévention des fraudes, l'évaluation des risques, la conduite d'investigations ou encore l'assistance utilisateurs) ; (ii) assurer la conformité des Membres aux présentes Conditions ; (iii) se conformer au droit applicable ou à l'injonction d'un tribunal, de l'application de la loi ou d'un autre organisme administratif ou gouvernemental ; (iv) traiter le Contenu de Membres que nous déterminons comme étant nuisible ou répréhensible ; (v) prendre les mesures énoncées dans les présentes Conditions ; et (vi) maintenir et appliquer tout critère de qualité ou d'éligibilité, y compris en supprimant les Annonces qui ne répondent pas aux critères de qualité et d'éligibilité. Lorsque Airbnb supprime ou désactive du Contenu, Airbnb informe le Membre et lui donne les raisons de cette décision sauf si cette notification (i) empêche ou gêne la découverte d'une fraude ou d'une autre activité illégale, (ii) nuit à l'intérêt légitime des autres Membres ou de tiers, ou (iii) enfreint le droit applicable. 
            </p><br />
            <p>
            <strong id="18">18. Comptes des membres. </strong>
            </p><br />
            <p>
            Vous devez créer un compte pour accéder à de nombreuses fonctionnalités de la plateforme Airbnb et les utiliser. L'inscription n'est autorisée que pour les personnes morales et les personnes physiques âgées de 18 ans ou plus. Si vous êtes un Hôte professionnel conformément à l'article 26, des conditions supplémentaires s'appliquent. Vous déclarez et garantissez que vous n'êtes pas une personne ou une entité interdite d'utiliser la plateforme Airbnb en vertu des lois des États-Unis, de votre adresse de résidence ou de toute autre juridiction pertinente. Vous devez fournir des informations exactes et complètes lors de l'inscription, et tenir à jour les informations relatives à votre compte. Vous ne pouvez pas transférer votre compte à quelqu'un d'autre. Il vous appartient de préserver la confidentialité et la sécurité de vos identifiants de compte, et il vous est interdit de divulguer vos identifiants à un quelconque tiers. Vous devez immédiatement informer Airbnb si vous suspectez que vos identifiants ont été perdus, volés, ou que votre compte est autrement compromis. Vous êtes responsable de toutes les activités menées avec votre Compte Airbnb, sauf si vous n'avez pas autorisé ces activités et que vous n'avez pas fait preuve de négligence par ailleurs (par exemple, en ne signalant pas l'utilisation non autorisée ou la perte de vos identifiants). Si la loi applicable le permet, nous pouvons, mais n'avons aucune obligation de (i) vous demander de fournir une pièce d'identité ou d'autres informations, (ii) entreprendre des vérifications destinées à aider à contrôler votre identité ou vos antécédents, (iii) vous comparer à des bases de données de tiers ou à d'autres sources et demander des rapports à des prestataires de services, et (iv) obtenir des rapports des registres publics des condamnations pénales ou des fichiers de délinquants sexuels ou de leurs équivalents locaux.
            </p><br />
            <p>
            <strong id="19">19. Exclusion de responsabilité. </strong>
            </p><br />
            <p>
            Nous n'endossons pas ou ne garantissons pas l'existence, la conduite, la performance, la sécurité, la qualité, la légalité ou l'adéquation de tout Voyageur, Hôte, Service Hôte, Annonce ou tiers. La vérification des utilisateurs sur Internet est difficile, et nous ne garantissons pas que les vérifications, les contrôles d'identité ou d'antécédents effectués sur les Membres (le cas échéant) permettront d'identifier les manquements passés ou d'en prévenir de futurs. Toutes les références à un Membre « vérifié » (ou tout terme similaire) signifient uniquement que le Membre ou Airbnb a fait l'objet d'une procédure de vérification ou d'identification appropriée, et rien d'autre. Nous ne sommes pas responsables en cas de pannes ou coupures d'Internet ou des infrastructures de télécommunications qui ne relèvent pas de notre contrôle et qui peuvent conduire à des interruptions de l'accessibilité de la plateforme Airbnb. Airbnb peut, de façon temporaire et en prenant en compte les intérêts légitimes des Membres (par exemple par une notification préalable), limiter la disponibilité de la plateforme Airbnb ou de certaines fonctionnalités de la plateforme Airbnb si cela est nécessaire en raison de capacités limitées, pour préserver la sécurité ou l'intégrité de nos serveurs, ou pour effectuer des opérations de maintenance afin d'assurer le bon fonctionnement ou d'améliorer le fonctionnement de la plateforme Airbnb. 
            </p><br />
            <p>
            <strong id="20">20. Responsabilité. </strong>
            </p><br />
            <p>
            <strong>20.1</strong> Airbnb est responsable, sans limitation en vertu des dispositions légales, des dommages résultant d'une atteinte à la vie, à l'intégrité physique ou à la santé résultant d'une négligence ou d'un manquement intentionnel à une obligation commise par Airbnb ou ses représentants légaux ou mandataires. Il en est de même pour les garanties émises ou toute autre responsabilité stricte.
            </p><br />
            <p>
            <strong>20.2</strong> Airbnb est également responsable, sans limitation, des autres dommages résultant d'un manquement intentionnel ou d'une négligence grave de la part d'Airbnb ou de ses représentants légaux ou mandataires.
            </p><br />
            <p>
            <strong>20.3</strong> Airbnb ne peut être tenu responsable des dommages résultant d'un manquement à une obligation fondé sur une simple négligence. 
            </p><br />
            <p>
            <strong>20.4</strong> L'article 20.3 ne s'applique pas aux dommages résultant de violations d'obligations contractuelles essentielles fondées sur une simple négligence. Pour de tels dommages causés par Airbnb, ses représentants légaux ou d'autres mandataires, la responsabilité d'Airbnb est limitée aux dommages prévisibles typiques pouvant survenir. Les obligations contractuelles sont les obligations d'Airbnb dont vous attendez l'accomplissement pour la bonne exécution du contrat.
            </p><br />
            <p>
            <strong>20.5</strong> Dans la mesure où la responsabilité d'Airbnb est exclue ou limitée, cela s'applique également en ce qui concerne la responsabilité personnelle de ses représentants légaux, employés et autres agents.
            </p><br />
            <p>
            <strong id="21">21. Indemnisation.</strong>
            </p><br />
            <p>
            Dans la mesure maximale permise par le droit applicable, vous acceptez de libérer, défendre (au choix d'Airbnb), indemniser et tenir Airbnb (y compris le service Airbnb Payments, d'autres filiales et leur personnel) à l'abri de l'ensemble des demandes d'indemnisation, responsabilités, dommages, pertes et dépenses, y compris, mais sans s'y limiter, les frais de justice et frais de comptabilité raisonnables, découlant de ou en relation avec : (i) votre violation des présentes Conditions (y compris toute condition supplémentaire ou additionnelle qui s'applique à un produit ou une fonctionnalité) ou de nos Conditions juridiques additionnelles, Politiques ou Normes, (ii) votre utilisation inappropriée de la plateforme Airbnb, (iii) votre interaction avec tout Membre, séjour dans un Logement, participation à une Expérience ou autre Service d'hôte, y compris, mais sans s'y limiter, tout préjudice, perte ou dommage (compensatoire, direct, accessoire, immatériel ou autre) de toute sorte survenant en relation avec ou à la suite d'une telle interaction, d'un séjour, d'une participation ou d'une utilisation de ce type, (iv) votre manquement, ou notre manquement à vos instructions, à signaler, collecter ou reverser avec précision les taxes, ou (v) votre violation de toute loi, de tout règlement ou droit de tiers tels que les droits de propriété intellectuelle ou de confidentialité. La présente obligation d'indemnisation ne s'applique que si, et dans la mesure où, les réclamations, responsabilités, dommages, pertes et dépenses ont été effectivement causés par votre manquement fautif à une obligation contractuelle.
            </p><br />
            <p>
            <strong id="22">22. Entités contractantes.</strong> 
            </p><br />
            <p>
            En fonction de votre pays de résidence ou d'établissement et de votre activité sur la plateforme Airbnb, l'annexe 1 ci-dessous indique l'entité juridique d'Airbnb avec laquelle vous concluez un contrat. Si nous identifions par le biais de la plateforme Airbnb qu'une entité Airbnb autre que celle figurant sur l'annexe 1 est responsable d'un produit, d'une fonctionnalité ou d'une transaction, l'entité Airbnb ainsi identifiée est votre entité contractante en ce qui concerne ce produit, cette fonctionnalité ou cette transaction. Si vous changez de pays de résidence ou d'établissement pour un pays situé en dehors de l'EEE, de la Suisse ou du Royaume-Uni, l'entité Airbnb avec laquelle vous concluez un contrat et la version applicable des Conditions de service seront déterminées par votre nouveau pays de résidence ou d'établissement, à partir de la date effective du changement.
            </p><br />
            <p>
            <strong id="23">23. Droit applicable et juridiction compétente. </strong>
            </p><br />
            <p>
            Les présentes Conditions sont régies et interprétées conformément au droit irlandais. Si vous agissez en tant que consommateur ou consommatrice et si la réglementation légale impérative de protection des consommateurs et consommatrices de votre pays de résidence contient des dispositions qui sont plus avantageuses pour vous, ces dispositions s'appliquent indépendamment du choix du droit irlandais. En tant que consommateur ou consommatrice, vous ne pouvez engager des poursuites judiciaires relatives aux présentes Conditions que devant le tribunal compétent de votre lieu de résidence ou le tribunal compétent du lieu d'établissement d'Airbnb en Irlande. Si Airbnb souhaite faire valoir ses droits à votre encontre en tant que consommateur ou consommatrice, nous ne pourrons le faire que dans les tribunaux de la juridiction dont vous dépendez. Si vous agissez en tant que professionnel, vous acceptez de vous soumettre à la compétence exclusive des tribunaux irlandais.
            </p><br />
            <p>
            <strong id="24">24. Divers.</strong>
            </p><br />
            <p>
            <strong>24.1 Autres conditions incorporées par référence.</strong> Les Garantie dommages des hôtes, Conditions de l'Assurance Hôte Japon, Politique de remplacement d'hébergement et de remboursement, Politique de remboursement des expériences, Politique d'Airbnb en matière de contenus, Politique de non-discrimination, Politique relative aux cas de force majeure, Conditions juridiques supplémentaires, Politiques, Normes et autres politiques et conditions supplémentaires liées à ces Conditions s'appliquent à votre utilisation de la plateforme Airbnb, sont incorporés par référence, et font partie intégrante de votre contrat avec Airbnb. 
            </p><br />
            <p>
            <strong>24.2 Interprétation des présentes Conditions.</strong> Sauf si elles peuvent être complétées par des conditions supplémentaires, conditions, politiques, directives, normes et divulgations de produits, ces Conditions constituent le contrat intégral entre Airbnb et vous concernant votre accès ou utilisation de la plateforme Airbnb et remplacent tous les contrats ou accords antérieurs, oraux ou écrits, entre Airbnb et vous. Ces Conditions ne confèrent pas et ne sont pas destinées à conférer des droits ou des recours à toute personne autre que vous et Airbnb. Si une disposition des présentes Conditions est jugée invalide ou inapplicable, sauf indication contraire dans l'article 24.11 ci-dessous, cette disposition sera supprimée et n'affectera pas la validité et l'applicabilité des autres dispositions. 
            </p><br />
            <p>
            <strong>24.3 Absence de renonciation.</strong> Le manquement d'Airbnb à faire appliquer tout droit ou toute disposition des présentes Conditions ne constituera pas une renonciation audit droit ou à ladite disposition sauf si nous le reconnaissons et le convenons par écrit. Sauf stipulation expresse contraire des présentes Conditions, l'exercice par l'une ou l'autre des parties d'un quelconque recours à sa disposition en vertu des présentes Conditions sera sans préjudice des autres recours dont elle dispose en vertu des présentes Conditions ou de la loi.
            </p><br />
            <p>
            <strong>24.4 Cession. </strong>Vous ne pouvez pas céder, transférer ou déléguer ce contrat ou vos droits et obligations en vertu des présentes Conditions sans le consentement écrit préalable d'Airbnb. Airbnb peut, sans restriction et à son entière discrétion, céder, transférer ou déléguer le présent contrat et de quelconques droits et obligations au titre des présentes moyennant un préavis de 30 jours. Votre retenez le droit de résilier les Conditions à tout moment conformément à l'article 13.2.
            </p><br />
            <p>
            <strong>24.5 Préavis.</strong> Sauf mention contraire, toutes les notifications ou autres communications autorisées ou requises par les présentes, et destinées aux Membres, devront être effectuées électroniquement et remises par Airbnb par e-mail, par notification sur la plateforme Airbnb ou par service de messagerie (y compris par SMS et WeChat), ou tout autre moyen de contact que nous vous fournissons. Si une notification concerne une réservation au Japon, vous acceptez et reconnaissez que ces notifications par voie électronique au lieu d'une déclaration écrite, satisfont aux obligations d'Airbnb en vertu de l'article 59 (1) de la loi japonaise sur les entreprises d'hébergement (« Japanese Housing Accommodation Business Act »).
            </p><br />
            <p>
            <strong>24.6 Services de tiers.</strong> La plateforme Airbnb peut contenir des liens vers des sites web, des applications, des services ou des ressources de tiers (« Services de tiers ») qui sont soumis à des conditions et des pratiques de confidentialité différentes. Airbnb n'est pas responsable de tout aspect de ces Services de tiers et les liens vers ces Services de Tiers ne sont pas une validation.
            </p><br />
            <p>
            <strong>24.7 Conditions de Google.</strong> Certaines traductions sur la plateforme Airbnb sont fournies par Google. Google décline toute garantie relative aux traductions, explicites ou implicites, y compris toute garantie d'exactitude, de fiabilité et toute garantie implicite de qualité marchande, d'adéquation à un usage particulier et de non-contrefaçon. Certaines parties de la plateforme Airbnb utilisent les services de cartographie Google Maps/Google Earth, y compris les API Google Maps. Votre utilisation de Google Maps/Earth est soumise aux conditions d'utilisation supplémentaires de Google Maps/Google Earth.
            </p><br />
            <p>
            <strong>24.8 Conditions d'Apple.</strong> En utilisant ou en téléchargeant notre application à partir de l'App Store d'Apple, vous acceptez le contrat de licence utilisateur final d'application sous licence d'Apple. 
            </p><br />
            <p>
            <strong>24.9 Contenu de la plateforme Airbnb.</strong> Le Contenu mis à disposition par la plateforme Airbnb peut être protégé par des droits d'auteur, des marques déposées, et/ou d'autres lois des États-Unis et d'autres pays. Vous reconnaissez que tous les droits de propriété intellectuelle pour ce contenu sont la propriété exclusive d'Airbnb et/ou de ses concédants de licence et acceptez de ne supprimer, n'altérer ou ne dissimuler aucun droit d'auteur, marque déposée, marque de service ou autres notifications de droits de propriété. Vous ne pouvez pas utiliser, copier, adapter, modifier, créer des œuvres dérivées de, distribuer, concéder une licence sur, vendre, transférer, afficher publiquement, exécuter publiquement, transmettre, diffuser ou exploiter de toute autre manière tout Contenu accessible par la plateforme Airbnb sauf dans la mesure où vous êtes le propriétaire légal de ce Contenu ou comme expressément autorisé dans les présentes Conditions. Sous réserve de votre respect des présentes Conditions, Airbnb vous octroie une licence limitée, non exclusive, non cessible, révocable, et ne pouvant faire l'objet d'une sous-licence pour (i) télécharger et utiliser l'application sur votre ou vos appareils personnels, et (ii) accéder au Contenu mis à votre disposition sur ou via la plateforme Airbnb, et le consulter, uniquement pour votre usage personnel et non commercial. 
            </p><br />
            <p>
            <strong>24.10 Airbnb.org.</strong> Airbnb.org est une société à but non lucratif exonérée de l'impôt sur le revenu en vertu de l'article 501(c)(3) du code des impôts américain (U.S. Internal Revenue Code), fonctionnant comme une organisation caritative publique. Airbnb.org n'est ni détenue ni contrôlée par Airbnb. Airbnb.org gère un certain nombre de programmes caritatifs qui profitent à nos communautés d'Hôtes et de Voyageurs ainsi qu'au grand public. 
            </p><br />
            <p>
            <strong>24.11 Force majeure.</strong> Airbnb ne saurait être tenu responsable de tout retard ou défaut d'exécution résultant de circonstances anormales et imprévisibles hors de son contrôle raisonnable, dont les conséquences auraient été inévitables malgré tous les efforts déployés, y compris, mais sans s'y limiter, les événements de force majeure, la guerre, le terrorisme, les émeutes, les embargos, les actes des autorités civiles ou militaires, les incendies, les inondations, les accidents, les pandémies, les épidémies ou les maladies, les grèves ou les pénuries de moyens de transport, de carburant, d'énergie, de main-d'œuvre ou de matériaux.
            </p><br />
            <p>
            <strong>24.12 E-mails et SMS.</strong> Vous recevrez des communications de notre part sur votre adresse e-mail ou d'autres coordonnées que vous aurez fournies pour créer votre compte Airbnb. L'inscription à des programmes impliquant l'envoi d'e-mails n'affectera pas la fréquence de ces communications, mais vous devez vous attendre à recevoir des e-mails supplémentaires spécifiques aux programmes auxquels vous vous êtes abonnés. Nous pouvons également vous envoyer des e-mails promotionnels. Aucuns frais ne sont facturés pour ces e-mails promotionnels, mais des tarifs de données de tiers pourraient s'appliquer. Vous pouvez contrôler les e-mails promotionnels que vous recevez en accédant aux préférences de notification dans les paramètres de votre compte. Veuillez noter que vous ne pourrez pas profiter de certaines promotions si vous désactivez certains paramètres de communication ou si vous ne possédez pas de compte Airbnb. Aux États-Unis, si vous acceptez de recevoir des SMS de notre part, vous serez soumis à nos Conditions relatives aux SMS. 
            </p><br />
            <p>
            <strong>24.13 Nous contacter.</strong> Pour toute question concernant les présentes Conditions, envoyez-nous un e-mail.
            </p><br />
            <p>
            <strong id="25">25. Résolution des litiges et convention d'arbitrage aux États-Unis. </strong>
            </p><br />
            <p>
            VEUILLEZ LIRE ATTENTIVEMENT LES PARAGRAPHES SUIVANTS, CAR ILS PRÉVOIENT QUE VOUS ET AIRBNB ACCEPTEZ DE RÉSOUDRE TOUS LES LITIGES ENTRE VOUS PAR LE BIAIS D'UN ARBITRAGE INDIVIDUEL CONTRAIGNANT ET COMPRENNENT UNE RENONCIATION AUX RECOURS COLLECTIFS ET UNE RENONCIATION AUX PROCÈS DEVANT JURY. Cette Convention d'arbitrage remplace toutes les versions précédentes.
            </p><br />
            <p>
            <strong>25.1 Application.</strong> La présente convention d'arbitrage ne s'applique à vous que si les États-Unis sont votre pays de résidence ou d'établissement. Si votre pays de résidence ou d'établissement n'est pas les États-Unis, et que vous tentez néanmoins de poursuivre une action en justice contre Airbnb aux États-Unis, la présente Convention d'arbitrage s'applique pour déterminer le seuil à partir duquel le présent article 25 s'applique à vous, et toutes les autres déterminations de seuil, y compris la résidence, la possibilité d'arbitrage, le lieu et le droit applicable.
            </p><br />
            <p>
            <strong>25.2 Vue d'ensemble du processus de résolution des litiges.</strong> Airbnb s'engage à résoudre les litiges de façon optimale pour les consommateurs et consommatrices. À cette fin, les présentes Conditions prévoient un processus en deux parties pour les individus auxquels s'applique le présent article 25 : (1) une négociation informelle directement avec l'équipe d'assistance utilisateurs d'Airbnb (décrite au paragraphe 25.3, ci-dessous), et si nécessaire (2) un arbitrage obligatoire conformément aux termes de la présente Convention d'arbitrage. Vous et Airbnb conservez chacun le droit de chercher à résoudre le litige devant un tribunal acceptant les actions en recouvrement de petites créances comme alternative à l'arbitrage.
            </p><br />
            <p>
            <strong>25.3 Résolution des litiges avant arbitrage et notifications.</strong> Au moins 30 jours avant d'initier une procédure d'arbitrage, vous et Airbnb acceptez chacun d'envoyer par écrit à l'autre partie une notification individualisée du litige (une « Notification préalable au litige ») et à tenter de bonne foi de négocier une résolution informelle de la réclamation individuelle. Vous devez envoyer votre Notification préalable au litige à Airbnb en l'adressant par courrier à l'agent d'Airbnb pour notification : CSC Lawyers Incorporating Service, 2710 Gateway Oaks Drive, Suite 150N, Sacramento, CA 95833, États-Unis. Airbnb enverra sa Notification préalable au litige à l'adresse e-mail associée à votre compte Airbnb. Une Notification préalable au litige doit comprendre : la date, votre nom, votre adresse postale, votre nom d'utilisateur Airbnb, l'adresse e-mail que vous avez utilisée pour configurer votre compte Airbnb, votre signature, une brève description du litige et la mesure demandée. Si les parties ne parviennent pas à résoudre le litige dans le délai de 30 jours, alors seulement l'une ou l'autre des parties peut entamer une procédure d'arbitrage en déposant une demande écrite d'arbitrage auprès du service d'arbitrage désigné conformément à l'article 24.6, ci-dessous. L'exigence de Notification préalable au litige d'un demandeur est une condition préalable à tout arbitrage, et une copie de la Notification préalable au litige et la preuve qu'elle a été envoyée comme requis par le présent article doivent être jointes à toute demande d'arbitrage.
            </p><br />
            <p>
            <strong>25.4 Convention d'arbitrage.</strong> Vous et Airbnb acceptez mutuellement que tout litige, réclamation ou différend lié directement ou indirectement aux présentes Conditions, ou à l'applicabilité, la violation, la résiliation, la validité, l'application ou l'interprétation de celles-ci, ou à toute utilisation de la plateforme Airbnb, des Services d'hôte ou de tout Contenu (collectivement, les « Litiges ») sera réglé par voie d'arbitrage contraignant sur une base individuelle (la « Convention d'arbitrage »). Si un litige existe pour savoir si la présente Convention d'arbitrage peut être appliquée ou s'applique à votre Litige, Airbnb et vous convenez que l'arbitre décidera de ce problème. Pour éviter toute ambiguïté, vous et Airbnb acceptez que toute question concernant l'arbitrabilité et la formation, le caractère exécutoire, la validité, la portée ou l'interprétation de tout ou partie du présent article 25, y compris tout litige concernant la conformité avec la Notification préalable au litige et la responsabilité d'une partie de payer des frais d'arbitrage, soit tranchée exclusivement par un arbitre.
            </p><br />
            <p>
            <strong>25.5 Exceptions à la Convention d'arbitrage.</strong> Vous et Airbnb acceptez chacun que les réclamations et/ou causes d'action suivantes sont des exceptions à la Convention d'arbitrage et seront introduites dans une procédure judiciaire devant un tribunal compétent (tel que défini par l'article 21 des Conditions de service pour les utilisateurs non européens) : (i) toute réclamation ou cause d'action alléguant une contrefaçon, un détournement ou une violation réels ou menacés des droits d'auteur, marques, secrets commerciaux, brevets ou autres droits de propriété intellectuelle d'une partie ; (ii) toute réclamation ou cause d'action demandant une mesure injonctive d'urgence basée sur des circonstances urgentes (par exemple, danger imminent ou commission d'un crime, d'un piratage, d'une cyberattaque) ; (iii) une demande de recours d'une mesure d'injonction publique ; (iv) toute réclamation ou cause d'action pour contentieux vexatoire ; ou (v) toute réclamation individuelle d'agression sexuelle ou de harcèlement sexuel découlant de votre utilisation de la plateforme Airbnb ou des Services d'hôte. Vous et Airbnb convenez que toute demande pour la mesure injonctive publique se forme après l'arbitrage de l'ensemble des réclamations, recours ou causes d'action arbitrables, et sera suspendue en attendant le résultat de l'arbitrage conformément à l'article 3 de la Loi fédérale d'arbitrage. 
            </p><br />
            <p>
            <strong>25.6 Règlement du forum d'arbitrage et droit applicable.</strong> Cette Convention d'arbitrage atteste d'une transaction de commerce entre États, et la loi fédérale sur l'arbitrage régit l'interprétation et l'application de la présente Convention d'arbitrage sur le fond et la procédure, et non la loi de l'État. L'arbitrage sera administré par ADR Services, Inc. (« ADR ») (www.adrservices.com) conformément aux Règles 1, 6-7, 8-9 et 11-12, 45, 54 et 56 des Règles fédérales de procédure civile (« Règles fédérales sélectionnées ») (https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure) et au Règlement d'arbitrage d'ADR alors en vigueur (le « Règlement d'ADR »), sauf si les Règles fédérales sélectionnées ou le Règlement d'ADR sont modifiés par ou en conflit avec la présente Convention d'arbitrage. Le Règlement d'ADR est disponible sur www.adrservices.com. Si une demande d'arbitrage est envoyée à ADR Services conformément à la présente convention et au Règlement d'ADR, et qu'ADR Services ne peut ou ne veut pas administrer l'arbitrage, l'arbitrage sera administré par l'American Arbitration Association (« AAA ») conformément aux Règles fédérales sélectionnées et au Règlement d'arbitrage des consommateurs de l'AAA et/ou à d'autres règlements d'arbitrage de l'AAA jugés applicables par l'AAA (le « Règlement de l'AAA ») alors en vigueur, à l'exception des dispositions modifiées dans les présentes. Le Règlement de l'AAA est disponible à l'adresse www.adr.org. Si l'AAA ne peut pas et ne veut pas administrer l'arbitrage, vous et Airbnb devez vous concerter et choisir un autre forum d'arbitrage, et si nous ne parvenons pas à nous accorder, vous ou Airbnb pouvez demander à un tribunal de nommer un arbitre conformément au paragraphe 5 du titre 9 du Code des États-Unis. Dans ce cas, l'arbitrage sera mené conformément au règlement du forum arbitral désigné, à moins que ce règlement ne soit incompatible avec les dispositions de la présente Convention d'arbitrage.
            </p><br />
            <p>
            <strong>25.7 Modification du Règlement d'arbitrage .</strong> Audience/Lieu de l'arbitrage. Afin de rendre l'arbitrage le plus rentable, efficace et pratique possible, toute audience arbitrale requise dans un arbitrage où le montant en litige ne dépasse pas 1 million de dollars US sera conduite à distance par vidéoconférence, sauf accord contraire des parties ou instruction de l'arbitre. Toute audience arbitrale requise dans un arbitrage où le montant en litige dépasse 1 million de dollars US sera conduite dans le comté de San Francisco, sauf accord contraire des parties ou instruction de l'arbitre. Si le montant en jeu du litige est de 10 000 dollars US ou moins, les parties conviennent de procéder uniquement par remise de documents à l'arbitre.
            </p><br />
            <p>
            <strong>25.8 Modification du Règlement d'arbitrage ; Honoraires et frais d'arbitrage.</strong> Vos frais d'arbitrage et votre part de la rémunération de l'arbitre sont régis par le Règlement d'ADR et le barème des frais d'ADR Services (disponible sur www.adrservices.com). Si votre revenu mensuel brut est inférieur à 300 % des directives fédérales sur la pauvreté, vous avez droit à une renonciation aux frais et honoraires d'arbitrage, à l'exclusion des honoraires d'arbitre. Vous pouvez demander une dispense de frais en fournissant au fournisseur d'arbitrage une déclaration sous serment indiquant votre revenu mensuel et le nombre de personnes dans votre ménage. Si une renonciation aux honoraires est accordée par le fournisseur d'arbitrage et que vous fournissez à Airbnb les documents nécessaires pour prouver que votre revenu mensuel brut est inférieur à 300 % des directives fédérales sur la pauvreté, Airbnb paiera votre part des honoraires d'arbitre.
            </p><br />
            <p>
            <strong>25.9 Modification du Règlement d'arbitrage ; Réclamations déposées dans un but inapproprié ou en violation de la présente Convention d'arbitrage.</strong> Chaque partie peut demander à l'arbitre d'imposer des sanctions en prouvant que l'autre partie, son ou ses avocats ont fait valoir une réclamation ou une défense non fondée en fait ou en droit, présentée de mauvaise foi ou dans un but de harcèlement, ou qui est frivole. Comme le permet le droit applicable, l'arbitre imposera des sanctions égales aux honoraires et frais d'avocat raisonnables de la partie requérante en constatant qu'une réclamation ou une défense est non fondée en fait ou en droit, présentée de mauvaise foi ou dans un but de harcèlement, alléguée en violation des Règles fédérales de procédure civile p. 11(b) (assimilant l'arbitre au « tribunal »), ou est autrement frivole. L'une ou l'autre des parties peut demander le rejet de tout arbitrage déposé en violation d'une disposition de la présente Convention d'arbitrage. L'une ou l'autre des parties peut faire valoir en arbitrage une demande reconventionnelle pour l'ouverture par l'autre partie d'une procédure concernant un Litige arbitrable sans se conformer ou en violation des exigences de la présente Convention d'arbitrage. En constatant qu'une partie a engagé une procédure concernant un Litige arbitrable sans se conformer ou en violation des exigences de la présente Convention d'arbitrage, l'arbitre accordera à l'autre partie ses dommages-intérêts réels, y compris, mais sans s'y limiter, les honoraires et frais d'avocat raisonnables.
            </p><br />
            <p>
            <strong>25.10 Décision de l'arbitre.</strong> L'arbitre rendra une décision écrite qui inclura les constatations et conclusions essentielles sur lesquelles l'arbitre aura fondé la sentence. Le jugement de la décision arbitrale pourra être rendu par tout tribunal compétent. L'arbitre peut accorder toute réparation autorisée par la loi ou le Règlement de l'ADR, mais les mesures déclaratoires ou injonctives ne peuvent être accordées qu'au cas par cas et uniquement dans la mesure où elles sont nécessaires pour apporter une réparation justifiée par la demande individuelle du demandeur.
            </p><br />
            <p>
            <strong>25.11 Renonciation à un procès devant jury.</strong> Vous et Airbnb reconnaissez et convenez de renoncer tous deux au droit à un procès devant un jury s'agissant de l'ensemble des Litiges pouvant être résolus par arbitrage.
            </p><br />
            <p>
            <strong>25.12 Renonciation aux actions collectives ou recours collectifs.</strong> Dans les limites les plus étendues autorisées par la loi, vous et Airbnb reconnaissez et convenez que chacun renonce au droit de participer en tant que plaignant ou en tant que simple membre du groupe à un recours collectif ou à une action collective, un arbitrage collectif, un recours privé devant le procureur général ou toute autre procédure représentative ou consolidée. Sauf accord écrit ou disposition prévue dans la présente convention, l'arbitre ne pourra pas regrouper les plaintes de plus d'une partie et ne pourra pas accepter d'arbitrer une action collective ou un recours collectif de quelque nature que ce soit. Dans le cas d'une décision judiciaire finale selon laquelle la loi applicable empêche l'application de la renonciation contenue dans ce paragraphe pour les réclamations, les motifs de recours ou les réparations demandées, alors cette réclamation, ce motif de recours ou cette réparation demandée, et seulement cette réclamation, ce motif de recours ou cette réparation demandée, sera séparé de cette convention d'arbitrage et sera porté devant un tribunal compétent. Dans le cas où une réclamation, un motif de recours ou une réparation demandée est supprimé conformément à ce paragraphe, vous et nous convenons que les réclamations, les motifs de recours ou les réparations demandées qui ne sont pas soumis à une convention d'arbitrage seront suspendus jusqu'à ce que les réclamations, les motifs de recours et les réparations demandées arbitrables soient résolus par l'arbitre.
            </p><br />
            <p>
            <strong>25.13 Renonciation à une action collective.</strong> Vous et Airbnb reconnaissez et acceptez que les avantages et l'efficacité relatifs de l'arbitrage peuvent être perdus lorsque 100 demandes d'arbitrage ou plus sont déposées dans les 180 jours qui (1) impliquent les mêmes parties ou des parties se trouvant dans une situation similaire ; (2) sont basées sur des demandes identiques ou similaires qui découlent de transactions, d'incidents, de violations présumées ou d'événements identiques ou substantiellement identiques nécessitant la détermination de questions de droit ou de fait identiques ou substantiellement identiques ; et (3) impliquent les mêmes avocats ou des avocats coordonnés pour les parties (une « Action collective »). En conséquence, vous et Airbnb acceptez de renoncer au droit de faire administrer, arbitrer ou résoudre tout Litige dans le cadre d'une Action collective (bien que les articles 23 et 25.12 des présentes Conditions continueront de s'appliquer au Litige). En cas de litige, l'arbitre désigné pour le premier contentieux introduit dans le cadre d'un ensemble de réclamations identifiées par l'une ou l'autre des parties détermine si ces réclamations font partie d'une action collective. Si aucun arbitre n'a encore été nommé, un arbitre sera nommé uniquement pour déterminer si les réclamations identifiées par l'une ou l'autre des parties font partie d'une Action collective. Rien dans cette disposition n'empêche vous ou Airbnb de participer à un règlement collectif des réclamations.
            </p><br />
            <p>
            <strong>25.14 Modification du Règlement d'arbitrage ; Exigences de regroupement dans le cadre d'une Action collective.</strong> Si, pour quelque raison que ce soit, nonobstant l'article 25.13, un arbitrage se déroule dans le cadre d'une Action collective, les parties regrouperont les demandes d'arbitrage en groupes ne dépassant pas 200. Les groupes doivent être déterminés en établissant une liste alphabétique des demandeurs par ordre alphabétique (par nom de famille ou nom professionnel, selon le cas), par exemple, les 200 premiers demandeurs énumérés seront le premier groupe, les 200 suivants seront le deuxième groupe, et ainsi de suite. Les parties attribueront au hasard à chaque groupe un numéro séquentiel et arbitreront les groupes un par un, dans l'ordre séquentiel. Pendant qu'un groupe est en cours d'arbitrage, le fournisseur de services d'arbitrage laisse les autres groupes en suspens, sauf accord contraire des parties ou instructions du fournisseur de services d'arbitrage. Chaque groupe doit voir sa question résolue dans les 240 jours suivant la conférence préparatoire à l'audience pour ce groupe. Nonobstant ce qui précède, si la demande d'un demandeur n'a pas fait l'objet d'une conférence préparatoire à l'audience dans les 2 ans suivant la dernière demande déposée dans le cadre de l'action collective, ce demandeur peut choisir de poursuivre les réclamations formulées dans la demande du demandeur devant le tribunal, sous réserve des articles 23 et 25.12 des présentes Conditions. 
            </p><br />
            <p>
            <strong>25.15 Modifications du Règlement d'arbitrage ; Offres de jugement.</strong> Au moins dix (10) jours avant la date fixée pour l'audience d'arbitrage, vous ou Airbnb pouvez signifier une offre écrite de jugement à l'autre partie pour permettre un jugement à des conditions spécifiées. Si l'offre est acceptée, l'offre avec preuve d'acceptation sera envoyée au fournisseur d'arbitrage, qui émettra une sentence en conséquence. Si l'offre n'est pas acceptée avant l'audience d'arbitrage ou dans les trente (30) jours suivant sa présentation, selon la première éventualité, elle sera réputée retirée et ne pourra être présentée en preuve dans le cadre de l'arbitrage, sauf en ce qui concerne les frais (y compris tous les frais payés au fournisseur d'arbitrage). Si une offre faite par une partie n'est pas acceptée par l'autre partie et que l'autre partie n'obtient pas une sentence plus favorable, l'autre partie ne recouvrera pas ses frais postérieurs à l'offre et paiera les frais de l'offre (y compris tous les frais payés au fournisseur d'arbitrage) à compter de la date de l'offre.
            </p><br />
            <p>
            <strong>25.16 Divisibilité.</strong> Sauf dans les cas prévus à l'article 25.11, si une partie de la présente Convention d'arbitrage est jugée illégale ou inapplicable, cette disposition sera supprimée et le reste de la Convention d'arbitrage sera pleinement applicable. 
            </p><br />
            <p>
            <strong>25.17 Modifications à la Convention d'arbitrage.</strong> Si Airbnb modifie le présent article 25 après la date à laquelle vous avez accepté les présentes Conditions (ou accepté toute modification ultérieure des présentes Conditions), vous pouvez refuser la modification en nous envoyant une notification écrite au plus tard 30 jours à compter de la date d'entrée en vigueur de la modification. Votre notification doit inclure votre nom, votre adresse postale, la date de la notification, votre nom d'utilisateur Airbnb, l'adresse e-mail que vous avez utilisée pour configurer votre compte Airbnb, votre signature et une déclaration sans équivoque indiquant que vous souhaitez vous désengager de l'article 25 modifié. Vous devez envoyer votre notification par courrier à l'adresse suivante : 888 Brannan St, San Francisco, CA 94103, à l'attention de : Arbitration Opt-Out, ou envoyer la notification de désinscription par e-mail à arbitration.opt.out@airbnb.com. Toutefois, refuser une nouvelle modification ne révoquera ni ne modifiera votre consentement antérieur à tout contrat précédemment conclu d'arbitrer tout Litige entre vous et Airbnb (ou votre consentement antérieur à toute modification ultérieure de ce contrat), qui restera applicable à tout Litige entre vous et Airbnb.
            </p><br />
            <p>
            <strong>25.18 Survie.</strong> Sauf tel que prévu par l'article 25.16 et sous réserve de l'article 12.6 des Conditions de service pour les utilisateurs non européens, cet article 25 survivra à toute résiliation des présentes Conditions et continuera à s'appliquer même si vous cessez d'utiliser la plateforme Airbnb ou résiliez votre compte Airbnb.
            </p><br />
            <p>
            <strong style={{fontSize:18}}>Conditions supplémentaires applicables aux Hôtes professionnels</strong>
            </p><br />
            <p>
            Si vous déclarez utiliser la plateforme Airbnb pour offrir des services d'hôte aux consommateurs à des fins liées à votre activité commerciale, artisanale ou professionnelle (« Hôte professionnel »), vous serez soumis aux conditions supplémentaires suivantes :
            </p><br />
            <p>
            <strong id="26">26. Accueil des voyageurs sur Airbnb en tant qu'Hôte professionnel.</strong>
            </p><br />
            <p>
            <strong>26.1</strong> En tant qu'Hôte professionnel, vous vous engagez à n'offrir sur la Plateforme Airbnb que des Services d'hôte conformes aux règles applicables du droit de l'Union européenne.
            </p><br />
            <p>
                <strong>26.2</strong> Afin de répondre aux exigences légales obligatoires, vous devrez fournir au moins les informations suivantes (le cas échéant) à Airbnb afin de pouvoir offrir des Services d'hôte en tant qu'Hôte professionnel sur la Plateforme Airbnb :

                -vos nom, adresse, numéro de téléphone et adresse e-mail ;<br />
                -une copie de votre pièce d'identité ou de toute autre identification électronique telle que définie par l'Article 3 du règlement (UE) n° 910/2014 ;<br />
                -les coordonnées de votre compte de paiement ;<br />
                -le registre du commerce dans lequel vous êtes inscrit et votre numéro d'enregistrement ou tout autre moyen d'identification équivalent dans ce registre. <br />
            </p><br />
            <p>
            <strong>26.3</strong> Vous ne pourrez pas offrir des Services d'hôte sur la Plateforme Airbnb tant qu'Airbnb n'aura pas été en mesure d'évaluer que les informations sont fiables et complètes. Nous pouvons vous demander de fournir des documents supplémentaires tels que déterminés par nous afin de nous permettre d'évaluer la fiabilité et l'exhaustivité de vos informations.
            </p><br />
            <p>
            <strong>26.4</strong> Vous êtes responsable de l'exactitude des informations fournies et êtes tenu de maintenir vos informations à jour à tout moment. Si nous obtenons des indications suffisantes ou si nous avons des raisons de croire que toute information est inexacte, incomplète ou non à jour, il vous sera demandé de remédier à la situation sans délai. Si vous ne mettez pas à jour vos informations dans les délais que nous vous avons fournis, nous pouvons suspendre votre utilisation de la Plateforme Airbnb, jusqu'à ce que vous ayez fourni les informations requises. Si nous suspendons nos services pour ces raisons, vous avez le droit de déposer une plainte via notre système de traitement des plaintes ou auprès d'un organisme de règlement extrajudiciaire des litiges certifié conformément à l'article 14 des présentes Conditions.
            </p><br />
            <p>
            <strong id="27">27. Traitement des réclamations et médiation.</strong> 
            </p><br />
            <p>
            Si vous êtes un Hôte professionnel établi dans l'EEE ou au Royaume-Uni, vous avez accès à notre système interne de traitement des réclamations pour les Hôtes professionnels, qui vous permet de déposer une réclamation concernant des questions relevant de l'article 11 du Règlement (UE) 2019/1150, y compris pour clarifier les faits et les circonstances conduisant à des mesures conformément aux articles 134.2 et 134.3 des présentes Conditions. Notre Centre d'aide explique comment vous pouvez accéder à notre système interne de traitement des réclamations pour les Hôtes professionnels et ce à quoi vous pouvez vous attendre lorsque vous déposez une réclamation. Il énonce également les détails du service de médiation que vous pouvez utiliser si une telle réclamation n'est pas traitée de manière satisfaisante. 
            </p><br />
            <p>
            <strong id="28">28. Accès aux données. </strong>
            </p><br />
            <p>
            Les Hôtes professionnels ont accès aux données personnelles et autres dans leur compte Airbnb et leur tableau de bord d'Hôte, lesquelles sont fournies par l'Hôte professionnel, ses Voyageurs ou générées par l'utilisation de la plateforme Airbnb, et sont nécessaires à la fourniture de leurs Services d'hôte, ainsi que pour obtenir des informations agrégées sur les recherches, les réservations et les performances de leurs annonces. Notre Politique de confidentialité définit les catégories de données personnelles et les autres types de données que nous collectons, la façon dont nous les utilisons, les traitons, les divulguons et les conservons, et comment vous pouvez y accéder et exercer vos droits en matière de protection des données.
            </p><br />
            <p>
            <strong id="29">29. Canaux de distribution supplémentaires. </strong>
            </p><br />
            <p>
            Airbnb propose un programme d'affiliation qui permet de faire figurer les Annonces sur des sites web tiers, tels que des sites de voyage en ligne, des médias, des programmes de fidélité et des comparateurs de recherche. Les Annonces peuvent également apparaître dans des publicités pour Airbnb publiées parfois sur des sites web tiers. 
            </p><br />
            <Footer />
            <MobileNavbar />
        </Container>

    )
};

export default ConditionsGenerales;