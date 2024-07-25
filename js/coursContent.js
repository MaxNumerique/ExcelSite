export const coursContent = {
    "prise-en-main": {
        title: "Prise en main",
        content: `

        <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

            <h3>Qu'est-ce qu'Excel ?</h3>
            <p>Microsoft Excel est un logiciel de tableur faisant partie de la suite Microsoft Office. Il permet de manipuler des données sous forme de tableaux, de réaliser des calculs complexes, de créer des graphiques, et bien plus encore. Excel est largement utilisé dans divers domaines tels que la finance, le marketing, la gestion de projet et la recherche.</p>

            <h4 class="sous-thematique">Interface Utilisateur</h4>
            <p>Lorsque vous ouvrez Excel, vous êtes accueilli par une interface utilisateur composée de plusieurs éléments clés :</p>

            <ol>
                <li>Ruban (Ribbon) : Une barre horizontale en haut de la fenêtre, contenant plusieurs onglets (Accueil, Insertion, Mise en page, Formules, etc.) qui regroupent les outils et les fonctionnalités.</li>
                <ul>
                    <li>Onglet Accueil : Contient les outils de base pour la mise en forme des cellules et la gestion des feuilles de calcul.</li>
                    <li>Onglet Insertion : Permet d'insérer des tableaux, graphiques, images, et autres éléments.</li>
                    <li>Onglet Mise en page : Contient les options de mise en page comme les marges, l'orientation et la taille du papier.</li>
                    <li>Onglet Formules : Propose des fonctions et outils pour la création et la gestion des formules.</li>
                    <li>Onglet Données : Outils pour importer, filtrer et analyser les données.</li>
                    <li>Onglet Révision : Permet de vérifier l'orthographe, ajouter des commentaires et protéger les feuilles de calcul.</li>
                    <li>Onglet Affichage : Options pour gérer l'affichage des feuilles de calcul, comme le zoom et la disposition des fenêtres.</li>
                </ul>
                <li>Barre de Formules : Située sous le Ruban, elle affiche le contenu de la cellule active et permet d'y entrer ou de modifier des formules.</li>
                <ul>
                    <li>Contenu de la cellule : La barre de formules montre le texte, les nombres ou les formules contenus dans la cellule active.</li>
                    <li>Modification : Vous pouvez cliquer dans la barre de formules pour éditer directement le contenu de la cellule sélectionnée.</li>
                </ul>
                <li>Cellules : Les cases dans la feuille de calcul où vous entrez des données. Chaque cellule est identifiée par une adresse unique basée sur sa colonne et sa ligne (par exemple, A1, B2).</li>
                <ul>
                    <li>Adresse de cellule : Chaque cellule a une adresse unique, par exemple, A1 pour la cellule à l'intersection de la colonne A et de la ligne 1.</li>
                    <li>Types de données : Les cellules peuvent contenir du texte, des nombres, des dates, des formules, etc.</li>
                </ul>
                <li>Feuilles de Calcul : Chaque fichier Excel, appelé classeur, peut contenir plusieurs feuilles de calcul, accessibles via les onglets en bas de l'écran.</li>
                <ul>
                    <li>Onglets de feuille : Permettent de naviguer entre les différentes feuilles d'un classeur.</li>
                    <li>Gestion des feuilles : Vous pouvez ajouter, supprimer, renommer, et réorganiser les feuilles selon vos besoins.</li>
                </ul>
            </ol>


            <h3>Manipulation de Base</h3>
            <h4 class="sous-thematique">Saisie et Édition des Données</h4>
            
            <ol>
                <li>Saisie de Données : Cliquez sur une cellule et commencez à taper pour entrer des données. Appuyez sur Enter pour valider et passer à la cellule suivante.</li>
                <ul>
                    <li>Entrée rapide : Vous pouvez utiliser les touches de direction pour passer rapidement à la cellule suivante après avoir entré des données.</li>
                    <li>Saisie multiple : Pour entrer les mêmes données dans plusieurs cellules, sélectionnez les cellules, tapez les données et appuyez sur Ctrl+Enter.</li>
                </ul>
                <li>Modification des Données : Double-cliquez sur une cellule pour éditer son contenu ou sélectionnez la cellule et utilisez la barre de formules.</li>
                <ul>
                    <li>Double-clique : Double-cliquez sur une cellule pour activer le mode édition directement dans la cellule.</li>
                    <li>Barre de formules : Sélectionnez une cellule et éditez son contenu dans la barre de formules pour des modifications plus précises.</li>
                </ul>
                <li>Déplacement : Utilisez les flèches de direction, la souris, ou les touches Tab et Shift+Tab pour naviguer entre les cellules.</li>
                <ul>
                    <li>Flèches de direction : Utilisez les touches fléchées pour déplacer la sélection d'une cellule à la fois.</li>
                    <li>Souris : Cliquez sur une cellule pour la sélectionner ou faites glisser la souris pour sélectionner une plage de cellules.</li>
                    <li>Tab et Shift+Tab : Utilisez la touche Tab pour passer à la cellule suivante à droite et Shift+Tab pour revenir à la cellule précédente.</li>
            </ol>

            <h4 class="sous-thematique">Formatage des cellules</h4>
            
            <ol>
                <li>Police et Couleur : Utilisez les options de l'onglet Accueil pour changer la police, la taille, et la couleur du texte.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule, allez dans l'onglet Accueil, cliquez sur la liste déroulante de la police pour changer la police et la taille. Utilisez l'icône de pot de peinture pour changer la couleur de la cellule.</li>
                    <li>Style de texte : Appliquez du gras, de l'italique ou du souligné pour mettre en évidence certaines parties de votre texte.</li>
                </ul>
                <li>Alignement : Ajustez l'alignement horizontal et vertical, ainsi que l'orientation du texte.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule, puis dans l'onglet Accueil, utilisez les boutons d'alignement pour aligner le texte à gauche, au centre ou à droite. Utilisez les options d'alignement vertical pour aligner en haut, au milieu ou en bas de la cellule.</li>
                    <li>Orientation du texte : Changez l'orientation du texte pour l'afficher en diagonale ou verticalement.</li>
                </ul>
                <li>Bordures et Remplissage : Ajoutez des bordures et changez la couleur de fond des cellules.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule ou une plage de cellules, allez dans l'onglet Accueil, cliquez sur l'icône de bordure pour choisir le type de bordure, et utilisez l'icône de remplissage pour choisir la couleur de fond.</li>
                    <li>Styles de bordure : Choisissez parmi différentes épaisseurs et styles de ligne pour créer des bordures personnalisées.</li>
                    <li>Remplissage de cellule : Utilisez des couleurs unies ou des motifs pour remplir les cellules et les rendre plus visibles.</li>
            </ol>


            <h3>Formules et Fonctions</h3>
            <h4>Introduction aux Formules</h4>
            <p>Les formules permettent d'effectuer des calculs sur les données de votre feuille de calcul. Chaque formule commence par un signe égal (=).</p>
            <p>Exemples de Formules :</p>
            <ul>
                <li>Addition : '=A1 + B1'</li>
                <li>Soustraction : '=A1 - B1'</li>
                <li>Multiplication : '=A1 * B1'</li>
                <li>Division : '=A1 / B1'</li>
            </ul>

            <h4>Utilisation de Fonctions</h4>
            <p>Excel dispose d'une vaste bibliothèque de fonctions prédéfinies pour effectuer des calculs avancés.</p>
            <p>Exemples de Fonctions :</p>
            <ul>
                <li>SOMME : '=SOMME(A1:A5)' additionne les valeurs des cellules de A1 à A5é</li>
                <li>MOYENNE : '=MOYENNE(A1:A5)' calcule la moyenne des valeurs des cellules de A1 à A5</li>
                <li>MIN : '=MIN(A1:A5)' trouve la valeur minimalle dans les cellules de A1 à A5</li>
                <li>MAX : '=MAX(A1:A5)' trouve la valeur maximale dans les cellules de A1 à A5</li>
                <li>SI : Effectue un test logique et renvoie une valeur si le test est vrai, sinon une autre valeur. Si la valeur est une chaîne de caractères, elle est automatiquement convertie en une chaîne de caractères.</li>
            </ul>

            <br>

            <p>Ce cours couvre les bases essentielles d'Excel, incluant la saisie de données, la modification, la navigation, et le formatage des cellules. Ces compétences fondamentales vous permettront de commencer à utiliser Excel de manière efficace pour organiser et présenter vos données. Pratiquez régulièrement pour renforcer vos compétences et explorez les options de formatage pour rendre vos feuilles de calcul plus attrayantes et fonctionnelles.</p>
        `,
    },

    "format-embellissement": {
        title: "Format - Embellissement",
        content: `
            <p>Pour rendre vos données plus lisibles et attrayantes, Excel offre de nombreuses options de formatage et d'embellissement. Voici comment vous pouvez améliorer la présentation de vos feuilles de calcul :</p>

            <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

            <h4>Formatage des Cellules</h4>
            
            <ol>
                <li>Police et Couleur : Utilisez les options de l'onglet Accueil pour changer la police, la taille, et la couleur du texte.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule, allez dans l'onglet Accueil, cliquez sur la liste déroulante de la police pour changer la police et la taille. Utilisez l'icône de pot de peinture pour changer la couleur de la cellule..</li>
                    <li>Style de texte : Appliquez du gras, de l'italique ou du souligné pour mettre en évidence certaines parties de votre texte.</li>
                </ul>
                <li>Alignement : Ajustez l'alignement horizontal et vertical, ainsi que l'orientation du texte.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule, puis dans l'onglet Accueil, utilisez les boutons d'alignement pour aligner le texte à gauche, au centre ou à droite. Utilisez les options d'alignement vertical pour aligner en haut, au milieu ou en bas de la cellule.</li>
                    <li>Orientation du texte : Changez l'orientation du texte pour l'afficher en diagonale ou verticalement.</li>
                </ul>
                <li>Bordures et Remplissage : Ajoutez des bordures et changez la couleur de fond des cellules.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule ou une plage de cellules, allez dans l'onglet Accueil, cliquez sur l'icône de bordure pour choisir le type de bordure, et utilisez l'icône de remplissage pour choisir la couleur de fond.</li>
                    <li>Styles de bordure : Choisissez parmi différentes épaisseurs et styles de ligne pour créer des bordures personnalisées.</li>
                    <li>Remplissage de cellule : Utilisez des couleurs unies ou des motifs pour remplir les cellules et les rendre plus visibles.</li>
            </ol>

            <h4>Format de Nombre</h4>
            
            <ol>
                <li>Types de Nombres : Choisissez le format adéquat pour les nombres, tels que nombre, devise, pourcentage, date, heure, ou texte.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule, allez dans l'onglet Accueil, cliquez sur la liste déroulante dans le groupe "Nombre" pour choisir le format souhaité.</li>
                    <li>Personnalisation : Cliquez sur "Plus de formats de nombre" pour accéder à des options de personnalisation avancées, telles que le nombre de décimales, le symbole monétaire, ou les formats de date spécifiques.</li>
                </ul>
            </ol>

            <h4>Styles de Cellules</h4>

            <ol>
                <li>Utilisation des Styles Pré-définis : Excel propose des styles de cellule pré-définis pour une mise en forme rapide et cohérente.</li>
                <ul>
                    <li>Exemple : Sélectionnez une cellule ou une plage de cellules, allez dans l'onglet Accueil, et choisissez un style de cellule dans la galerie des styles. Vous pouvez appliquer des styles tels que "En-tête", "Accentuation", "Bonne", "Mauvaise", etc.</li>
                </ul>
                <li>Création de Styles Personnalisés : Vous pouvez créer vos propres styles de cellule pour une mise en forme spécifique.</li>
                <ul>
                    <li>Exemple : Allez dans l'onglet Accueil, cliquez sur "Nouveau style de cellule", définissez les attributs de formatage souhaités (police, bordure, remplissage, etc.), et enregistrez le style pour une utilisation future.</li>
                </ul>
            </ol>

            <h4>Mise en Forme Conditionnelle</h4>

            <ol>
                <li>Règles de Mise en Forme : La mise en forme conditionnelle permet de mettre en surbrillance automatiquement les cellules en fonction de certaines conditions.</li>
                <ul>
                    <li>Exemple : Sélectionnez une plage de cellules, allez dans l'onglet Accueil, cliquez sur "Mise en forme conditionnelle" et choisissez une règle (par exemple, "Valeurs supérieures à", "Valeurs en dessous de", "Dupliquer les valeurs").</li>
                    <li>Barres de Données, Échelles de Couleurs, Icônes : Utilisez ces options pour une représentation visuelle des données, comme des barres de progression ou des gradients de couleur.</li>
                </ul>
                <li>Personnalisation des Règles : Créez des règles de mise en forme conditionnelle personnalisées en utilisant des formules.</li>
                <ul>
                    <li>Exemple : Sélectionnez une plage de cellules, allez dans l'onglet Accueil, cliquez sur "Mise en forme conditionnelle", puis sur "Nouvelle règle". Choisissez "Utiliser une formule pour déterminer pour quelles cellules le format sera appliqué" et entrez la formule.</li>
                </ul>
            </ol>

            <h4>Fusionner et Centrer</h4>

            <ol>
                <li>Fusionner les Cellules : Combinez plusieurs cellules en une seule pour créer des en-têtes ou des sections de tableau.</li>
                <ul>
                    <li>Exemple : Sélectionnez les cellules à fusionner, allez dans l'onglet Accueil, et cliquez sur "Fusionner et centrer". Vous pouvez également choisir "Fusionner les cellules" ou "Fusionner horizontalement".</li>
                </ul>
                <li>Centrier le Texte : Après avoir fusionné les cellules, vous pouvez centrer le texte horizontalement et verticalement.</li>
                <ul>
                    <li>Exemple : Utilisez les options d'alignement dans l'onglet Accueil pour centrer le texte dans les cellules fusionnées.</li>
                </ul>
            </ol>


            <p>En utilisant ces techniques de formatage et d'embellissement, vous pouvez transformer vos feuilles de calcul Excel en documents clairs, organisés et visuellement attrayants. Pratiquez régulièrement pour maîtriser ces outils et améliorer la présentation de vos données.</p>
        `,
    },

    "operation-simples": {
        title: "Opérations Simples",
        content: `
            <p>Excel permet d'effectuer des opérations simples pour manipuler et analyser les données. Voici comment vous pouvez utiliser les fonctions de base pour effectuer des calculs courants :</p>

            <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

            <h4>Addition</h4>
            <p>L'addition est l'une des opérations les plus courantes que vous effectuerez dans Excel.</p>

            <ol>
                <li>Saisie Directe : Cliquez sur une cellule vide, tapez '=' suivi de l'adresse des cellules que vous souhaitez additionner séparées par '+'.</li>
                <ul>
                    <li>Exemple : Pour additionner les valeurs des cellules A1 et B1, entrez '=A1 + B1' dans une autre cellule.</li>
                </ul>
                <li>Utilisation de la Fonction SOMME : Utilisez la fonction SOMME pour additionner une plage de cellules.</li>
                <ul>
                    <li>Exemple : Pour additionner les valeurs de A1 à A10, entrez '=SOMME(A1:A10)'.</li>
            </ol>

            <h4>Soustraction</h4>
            <p>La soustraction permet de calculer la différence entre deux valeurs.</p>

            <ol>
                <li>Saisie Directe : Cliquez sur une cellule vide, tapez '=' suivi de l'adresse des cellules à soustraire séparées par '-'.</li>
                <ul>
                    <li>Exemple : Pour soustraire la valeur de B1 de celle de A1, entrez '=A1 - B1'.</li>
                </ul>
            </ol>

            <h4>Multiplication</h4>
            <p>La multiplication est utilisée pour calculer le produit de deux valeurs.</p>

            <ol>
                <li>Saisie Directe : Cliquez sur une cellule vide, tapez '=' suivi de l'adresse des cellules à multiplier séparées par '*'.</li>
                <ul>
                    <li>Exemple : Pour multiplier les valeurs de A1 et B1, entrez '=A1 * B1'.</li>
                </ul>
            </ol>

            <h4>Division</h4>
            <p>La division est utilisée pour calculer le quotient de deux valeurs.</p>

            <ol>
                <li>Saisie Directe : Cliquez sur une cellule vide, tapez '=' suivi de l'adresse des cellules à diviser séparées par '/'.</li>
                <ul>
                    <li>Exemple : Pour diviser la valeur de A1 par celle de B1, entrez '=A1 / B1'.</li>
                </ul>
            </ol>

            <h4>Min et Max</h4>
            <p>Les fonctions MIN et MAX sont utilisées pour trouver respectivement les valeurs minimale et maximale dans une plage de cellules.</p>

            <ol>
                <li>Utilisation de la Fonction MIN : Utilisez la fonction MIN pour trouver la valeur minimale.</li>
                <ul>
                    <li>Exemple : Pour trouver la valeur minimale dans la plage A1 à A10, entrez '=MIN(A1:A10)'.</li>
                </ul>
                <li>Utilisation de la Fonction MAX : Utilisez la fonction MAX pour trouver la valeur maximale.</li>
                <ul>
                    <li>Exemple : Pour trouver la valeur maximale dans la plage A1 à A10, entrez '=MAX(A1:A10)'.</li>
                </ul>
            </ol>

            <h4>Compter les Cellules</h4>
            <p>Excel offre plusieurs fonctions pour compter les cellules selon différents critères.</p>

            <ol>
                <li>COMPTE : Compte le nombre de cellules contenant des nombres dans une plage.</li>
                <ul>
                    <li>Exemple : Pour compter les cellules contenant des nombres dans la plage A1 à A10, entrez =COMPTE(A1:A10).</li>
                </ul>
                <li>NBVAL : Compte le nombre de cellules non vides dans une plage.</li>
                <ul>
                    <li>Exemple : Pour compter les cellules non vides dans la plage A1 à A10, entrez '=NBVAL(A1:A10)'.</li>
                </ul>
                <li>NB.SI : Compte le nombre de cellules qui répondent à un critère spécifique.</li>
                <ul>
                    <li>Exemple : Pour compter le nombre de cellules contenant la valeur "Excel" dans la plage A1 à A10, entrez '=NB.SI(A1:A10, "Excel")'.</li>
                </ul>
            </ol>

            <h4>CONCATENER</h4>
            <p>La fonction CONCATENER (ou la nouvelle fonction CONCAT ou CONCATENER) permet de combiner plusieurs chaînes de texte en une seule.</p>

            <ol>
                <li>Utilisation de la Fonction CONCATENER : Combinez le contenu de plusieurs cellules en une seule chaîne de texte.</li>
                <ul>
                    <li>Exemple : Pour concaténer le contenu des cellules A1 et B1, entrez =CONCATENER(A1, B1) ou =CONCAT(A1, B1).</li>
                </ul>
            </ol>

            <h4>AUJOURDHUI et MAINTENANT</h4>
            <p>Excel propose des fonctions pour travailler avec les dates et les heures actuelles.</p>

            <ol>
                <li>AUJOURDHUI : Retourne la date actuelle.</li>
                <ul>
                    <li>Exemple : Pour afficher la date actuelle, entrez '=AUJOURDHUI()'.</li>
                </ul>
                <li>MAINTENANT : Retourne la date et l'heure actuelles.</li>
                <ul>
                    <li>Exemple : Pour afficher la date et l'heure actuelles, entrez '=MAINTENANT()'.</li>
                </ul>
            </ol>

            <h4>Fonctions de Date</h4>

            <ol>
                <li>JOUR : Retourne le jour d'une date spécifiée.</li>
                <ul>
                    <li>Exemple : Pour extraire le jour de la date en A1, entrez '=JOUR(A1)'.</li>
                </ul>
                <li>MOIS : Retourne le mois d'une date spécifiée.</li>
                <ul>
                    <li>Exemple : Pour extraire le mois de la date en A1, entrez '=MOIS(A1)'.</li>
                </ul>
                <li>ANNEE : Retourne l'année d'une date spécifiée.</li>
                <ul>
                    <li>Exemple : Pour extraire l'année de la date en A1, entrez '=ANNEE(A1)'.</li>
                </ul>
            </ol>

            <h4>Fonction SIERREUR</h4>
            <p>La fonction SIERREUR est utilisée pour gérer les erreurs dans les formules. Elle permet de retourner une valeur spécifique si une erreur est détectée.</p>

            <ol>
                <li>Utilisation de la Fonction SIERREUR : Enveloppez une formule avec SIERREUR pour gérer les erreurs.</li>
                <ul>
                    <li>Exemple : Pour éviter une erreur de division par zéro dans la formule =A1/B1, utilisez '=SIERREUR(A1/B1, "Erreur de division")'.</li>
                </ul>
            </ol>

            <h4>Fonction MOYENNE.SI</h4>
            <p>La fonction MOYENNE.SI permet de calculer la moyenne des cellules qui répondent à un critère spécifique.</p>

            <ol>
                <li>Utilisation de la Fonction MOYENNE.SI : Spécifiez une plage de cellules et un critère pour calculer la moyenne.</li>
                <ul>
                    <li>Exemple : Pour calculer la moyenne des valeurs dans la plage A1 à A10 où les cellules en B1 à B10 sont supérieures à 5, utilisez '=MOYENNE.SI(B1:B10, ">5", A1:A10)'.</li>
                </ul>
            </ol>

            <h4>Fonction SOMME.SI</h4>
            <p>La fonction SOMME.SI permet de faire la somme des cellules qui répondent à un critère spécifique.</p>

            <ol>
                <li>Utilisation de la Fonction SOMME.SI : Spécifiez une plage de cellules et un critère pour calculer la somme.</li>
                <ul>
                    <li>Exemple : Pour faire la somme des valeurs dans la plage A1 à A10 où les cellules en B1 à B10 sont égales à "Excel", utilisez '=SOMME.SI(B1:B10, "Excel", A1:A10)'.</li>
                </ul>
            </ol>


            <p>En maîtrisant ces opérations simples et fonctions de base, vous pouvez effectuer des calculs de base sur vos données et commencer à analyser les informations dans vos feuilles de calcul Excel. Pratiquez régulièrement pour renforcer vos compétences et explorer davantage de fonctions pour manipuler et analyser vos données efficacement.</p>
        `,
    },

    "graphiques-et-impression": {
        title: "Graphiques & Impression",
        content: `
            <p>Les graphiques dans Excel permettent de visualiser les données de manière graphique, facilitant ainsi la compréhension et l'analyse des informations. Voici comment créer et personnaliser des graphiques de base dans Excel :</p>

            <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

            <h4>Insertion d'un Graphique</h4>

            <ol>
                <li>Sélection des Données : Sélectionnez la plage de données que vous souhaitez représenter graphiquement.</li>
                <ul>
                    <li>Exemple : Sélectionnez les cellules A1:B10 pour créer un graphique basé sur ces données.</li>
                </ul>
                <li>Accéder à l'Onglet Insertion : Cliquez sur l'onglet "Insertion" dans le Ruban.</li>
                <li>Choix du Type de Graphique : Sélectionnez le type de graphique souhaité parmi les options disponibles (Histogramme, Courbes, Secteurs, Barres, etc.).</li>
                <ul>
                    <li>Exemple : Cliquez sur "Histogramme" pour insérer un graphique à barres.</li>
            </ol>

            <h4>Personnalisation des Graphiques</h4>

            <ol>
                <li>Titre du Graphique : Cliquez sur le titre du graphique pour le modifier.</li>
                <ul>
                    <li>Exemple : Double-cliquez sur le titre et tapez "Ventes Mensuelles".</li>
                </ul>
                <li>Étiquettes des Axes : Ajoutez ou modifiez les étiquettes des axes en accédant à l'onglet "Mise en forme".</li>
                <ul>
                    <li>Exemple : Ajoutez "Mois" pour l'axe des X et "Ventes" pour l'axe des Y.</li>
                </ul>
                <li>Légende : Affichez ou déplacez la légende du graphique.</li>
                <ul>
                    <li>Exemple : Cliquez sur la légende et déplacez-la en bas du graphique.</li>
                </ul>
                <li>Couleurs et Styles : Changez les couleurs et le style des éléments du graphique en utilisant les options de l'onglet "Création".</li>
                <ul>
                    <li>Exemple : Appliquez un style de graphique prédéfini pour harmoniser les couleurs et les polices.</li>
                </ul>
            </ol>

            <h4>Mise en Forme des Éléments de Graphique</h4>

            <ol>
                <li>Axes : Formatez les axes pour améliorer la lisibilité.</li>
                <ul>
                    <li>Exemple : Changez l'échelle de l'axe des Y en cliquant avec le bouton droit sur l'axe, puis en sélectionnant "Format de l'axe".</li>
                </ul>
                <li>Séries de Données : Modifiez la couleur, le style ou l'épaisseur des lignes ou des barres.</li>
                <ul>
                    <li>Exemple : Cliquez avec le bouton droit sur une série de données et choisissez "Formater la série de données".</li>
                </ul>
                <li>Étiquettes de Données : Ajoutez des étiquettes de données pour montrer les valeurs exactes des points de données.</li>
                <ul>
                    <li>Exemple : Cliquez sur une série de données, puis sélectionnez "Ajouter des étiquettes de données".</li>
                </ul>
            </ol>

            <h4>Impression des Feuilles de Calcul</h4>
            <p>L'impression dans Excel nécessite souvent une préparation pour s'assurer que les données sont présentées clairement sur le papier. Voici comment configurer vos feuilles de calcul pour l'impression :</p>

            <h4>Préparation de l'Impression</h4>

            <ol>
                <li>Aperçu avant Impression : Accédez à l'aperçu avant impression pour voir comment votre feuille de calcul sera imprimée.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Fichier" puis "Imprimer" pour afficher l'aperçu avant impression.</li>
                </ul>
                <li>Zone d'Impression : Définissez la zone d'impression pour imprimer uniquement les parties de la feuille de calcul souhaitées.</li>
                <ul>
                    <li>Exemple : Sélectionnez les cellules à imprimer, puis cliquez sur "Mise en page" > "Zone d'impression" > "Définir".</li>
                </ul>
                <li>Ajustement à la Page : Ajustez la feuille de calcul pour qu'elle tienne sur une seule page si nécessaire.</li>
                <ul>
                    <li>Exemple : Dans l'onglet "Mise en page", choisissez "Ajuster à" et spécifiez 1 page de large sur 1 page de haut.</li>
                </ul>
            </ol>

            <h4>Configuration de la Mise en Page</h4>

            <ol>
                <li>Marges : Réglez les marges pour optimiser l'utilisation de l'espace sur la page.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "Marges" et sélectionnez une option prédéfinie ou personnalisez les marges.</li>
                </ul>
                <li>Orientation : Changez l'orientation de la page en mode portrait ou paysage.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "Orientation" et sélectionnez "Portrait" ou "Paysage".</li>
                </ul>
                <li>Taille du Papier : Sélectionnez la taille de papier adéquate pour l'impression.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "Taille" et choisissez "A4".</li>
                </ul>
            </ol>

            <h4>Options d'Impression</h4>

            <ol>
                <li>Impression des Titres : Répétez les en-têtes de colonnes ou de lignes sur chaque page imprimée.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "Imprimer les titres" et sélectionnez les lignes ou colonnes à répéter.</li>
                </ul>
                <li>Impression des Grilles : Choisissez d'imprimer ou non les lignes de grille.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "Options de la feuille" et cochez "Imprimer" sous "Lignes de grille".</li>
                </ul>
                <li>En-têtes et Pieds de Page : Ajoutez des en-têtes et pieds de page pour inclure des informations supplémentaires comme le numéro de page, la date, etc.</li>
                <ul>
                    <li>Exemple : Cliquez sur "Mise en page" > "En-tête/Pied de page" et personnalisez-les selon vos besoins.</li>
                </ul>
            </ol>

            <h4>Imprimer</h4>

            <ol>
                <li>Choisir l'Imprimante : Sélectionnez l'imprimante à utiliser.</li>
                <ul>
                    <li>Exemple : Dans le menu "Fichier" > "Imprimer", sélectionnez l'imprimante souhaitée dans la liste déroulante.</li>
                </ul>
                <li>Nombre de Copies : Spécifiez le nombre de copies à imprimer.</li>
                <ul>
                    <li>Exemple : Entrez le nombre de copies dans la zone "Copies".</li>
                </ul>
                <li>Lancer l'Impression : Cliquez sur "Imprimer" pour lancer l'impression de la feuille de calcul.</li>
            </ol>

            <p>En maîtrisant ces techniques de création et de personnalisation de graphiques, ainsi que la préparation et l'impression de vos feuilles de calcul, vous pouvez améliorer la présentation et la communication de vos données dans Excel. Pratiquez régulièrement pour renforcer vos compétences et explorer davantage de fonctionnalités pour optimiser vos documents.</p>
        `,
    },

    "interface-travail": {
        title: "Interface de Travail",
        content: `

        <img src="/assets/interface-animate.svg" alt="Interface" id="interfaceImage">  

<h3>Exploration de l'Interface de Travail</h3>  
<p>L'interface de travail d'Excel est conçue pour être intuitive et efficace. Elle se compose de divers éléments qui vous permettent de naviguer, d'entrer des données, d'appliquer des formats et d'effectuer des analyses. Cette section couvre les principaux composants de l'interface et leur utilisation.</p>  

<h4>Les Composants de l'Interface</h4>  
<p>Voici les principaux composants de l'interface de travail d'Excel :</p>  

<ol>  
    <li>Ruban (Ribbon) : Situé en haut de l'écran, il comprend des onglets contenant divers groupes de commandes.</li>  
    <ul>  
        <li>Onglet Accueil : Commandes pour le formatage des cellules, l'édition et la gestion des données.</li>  
        <li>Onglet Insertion : Options pour insérer des tableaux, des graphiques, des images, etc.</li>  
        <li>Onglet Mise en page : Commandes pour la mise en page du document, y compris les marges, l'orientation et la taille du papier.</li>  
        <li>Onglet Formules : Accès aux fonctions et outils pour créer et gérer des formules.</li>  
        <li>Onglet Données : Outils pour importer, filtrer et analyser les données.</li>  
        <li>Onglet Révision : Fonctionnalités pour vérifier l'orthographe, ajouter des commentaires et protéger les feuilles.</li>  
        <li>Onglet Affichage : Options pour gérer l'affichage des feuilles, comme le zoom et la disposition des fenêtres.</li>  
    </ul>  

    <li>Barre de Formules : Située sous le Ruban, elle affiche et permet de modifier le contenu de la cellule active.</li>  
    <ul>  
        <li>Contenu de la cellule : La barre de formules montre le texte, les nombres ou les formules contenus dans la cellule active.</li>  
        <li>Modification : Cliquez dans la barre de formules pour éditer directement le contenu de la cellule sélectionnée.</li>  
    </ul>  

    <li>Feuille de Calcul : La zone principale où vous entrez et manipulez vos données, composée de cellules organisées en lignes et colonnes.</li>  
    <ul>  
        <li>Cellules : Chaque cellule a une adresse unique, par exemple, A1 pour la cellule à l'intersection de la colonne A et de la ligne 1.</li>  
        <li>Lignes et Colonnes : Les cellules sont organisées en lignes (numérotées) et colonnes (lettrées).</li>  
    </ul>  

    <li>Onglets de Feuille : Situés en bas de l'écran, ils permettent de naviguer entre les différentes feuilles de calcul d'un classeur.</li>  
    <ul>  
        <li>Ajouter/Supprimer : Utilisez les onglets pour ajouter de nouvelles feuilles ou supprimer celles dont vous n'avez plus besoin.</li>  
        <li>Renommer : Faites un clic droit sur un onglet de feuille pour la renommer selon vos besoins.</li>  
    </ul>  
</ol>  

<h4>Personnalisation de l'Interface</h4>  
<p>Excel offre plusieurs options pour personnaliser l'interface selon vos préférences et améliorer votre productivité.</p>  

<ol>  
    <li>Personnaliser le Ruban : Vous pouvez ajouter ou supprimer des commandes et créer des onglets personnalisés.</li>  
    <ul>  
        <li>Exemple : Allez dans 'Fichier' > 'Options' > 'Personnaliser le ruban' pour ajouter des onglets et des groupes personnalisés.</li>  
    </ul>  

    <li>Barre d'Outils Accès Rapide : Ajoutez des commandes fréquemment utilisées pour un accès rapide.</li>  
    <ul>  
        <li>Exemple : Cliquez sur la flèche déroulante à droite de la Barre d'outils Accès rapide pour ajouter ou supprimer des commandes.</li>  
    </ul>  

    <li>Thèmes et Fonds d'écran : Changez le thème d'Excel pour une interface plus agréable visuellement.</li>  
    <ul>  
        <li>Exemple : Allez dans 'Fichier' > 'Options' > 'Général' et choisissez un thème sous 'Personnaliser votre copie de Microsoft Office'.</li>  
    </ul>  
</ol>  

<h4>Fenêtres et Volets</h4>  
<p>La gestion des fenêtres et des volets vous permet de travailler de manière plus efficace, surtout lorsque vous manipulez de grandes quantités de données.</p>  

<ol>  
    <li>Fractionner : Séparez la feuille en deux ou quatre volets pour une visualisation simultanée de différentes parties de la feuille.</li>  
    <ul>  
        <li>Exemple : Allez dans l'onglet 'Affichage' et cliquez sur 'Fractionner' pour diviser la feuille de calcul.</li>  
    </ul>  

    <li>Figer les volets : Gardez certaines lignes ou colonnes visibles en permanence.</li>  
    <ul>  
        <li>Exemple : Sélectionnez une cellule, puis allez dans l'onglet 'Affichage' et cliquez sur 'Figer les volets'.</li>  
    </ul>  

    <li>Nouvelle fenêtre : Ouvrez plusieurs fenêtres du même classeur pour comparer différentes feuilles ou sections.</li>  
    <ul>  
        <li>Exemple : Allez dans l'onglet 'Affichage' et cliquez sur 'Nouvelle fenêtre' pour ouvrir une nouvelle instance du classeur actuel.</li>  
    </ul>  
</ol>  

<br>  

<p>Ce cours couvre les éléments fondamentaux de l'interface de travail d'Excel, y compris le Ruban, la barre de formules, les feuilles de calcul et les options de personnalisation. En maîtrisant ces aspects de l'interface, vous pourrez naviguer et travailler dans Excel de manière plus efficace et personnalisée. Pratiquez régulièrement pour vous familiariser avec ces outils et augmenter votre productivité.</p>  
`,
    },

    "utilisation-raccourcis": {
        title: "Utilisation des raccourcis clavier",
        content: `

        <img src="/assets/keyboard-shortcuts-animate.svg" alt="Keyboard Shortcuts" id="keyboardShortcutsImage">  

<h3>Utilisation des Raccourcis Clavier</h3>  
<p>Les raccourcis clavier permettent de gagner du temps et d'améliorer l'efficacité en évitant l'utilisation de la souris pour des actions répétitives. Excel propose une multitude de raccourcis clavier que vous pouvez utiliser pour diverses tâches. Voici une liste de raccourcis organisés par thématiques :</p>  

<h4>Saisie de Données</h4>  
<p>Ces raccourcis vous aident à entrer et modifier rapidement les données dans les cellules :</p>  

<ul>  
    <li><strong>Entrer des données</strong>  
        <ul>  
            <li><kbd>Entrée</kbd> : Valider l'entrée dans une cellule et passer à la cellule suivante.</li>  
            <li><kbd>Tab</kbd> : Passer à la cellule suivante à droite.</li>  
            <li><kbd>Maj</kbd> + <kbd>Tab</kbd> : Passer à la cellule précédente à gauche.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Entrée</kbd> : Valider l'entrée et rester dans la même cellule.</li>  
            <li><kbd>Alt</kbd> + <kbd>Entrée</kbd> : Insérer un saut de ligne dans une cellule.</li>
            <li><kbd>Ctrl</kbd> + <kbd>;</kbd> : Entrer la date du jour.</li>
            <li><kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>:</kbd> : Entrer l'heure actuelle.</li>
        </ul>  
    </li>  
    <li><strong>Modification de données</strong>  
        <ul>  
            <li><kbd>F2</kbd> : Modifier le contenu de la cellule active.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>D</kbd> : Copier le contenu de la cellule du dessus.</li>
            <li><kbd>Ctrl</kbd> + <kbd>R</kbd> : Copier le contenu de la cellule à gauche.</li>
        </ul>  
    </li>  
    <li><strong>Sélection de cellules</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>Espace</kbd> : Sélectionner une colonne entière.</li>  
            <li><kbd>Maj</kbd> + <kbd>Espace</kbd> : Sélectionner une ligne entière.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>A</kbd> : Sélectionner toute la feuille de calcul.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>*</kbd> : Sélectionner la plage de données actuelle.</li>
        </ul>  
    </li>  
</ul>  

<h4>Embellissement</h4>  
<p>Ces raccourcis vous permettent de formater rapidement vos données pour les rendre plus présentables :</p>  

<ul>  
    <li><strong>Formatage de texte</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>B</kbd> : Appliquer ou enlever le gras.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>I</kbd> : Appliquer ou enlever l'italique.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>U</kbd> : Appliquer ou enlever le soulignement.</li>  
        </ul>  
    </li>  
    <li><strong>Alignement</strong>  
        <ul>  
            <li><kbd>Alt</kbd> + <kbd>H</kbd> + <kbd>A</kbd> + <kbd>L</kbd> : Aligner à gauche.</li>  
            <li><kbd>Alt</kbd> + <kbd>H</kbd> + <kbd>A</kbd> + <kbd>C</kbd> : Centrer.</li>  
            <li><kbd>Alt</kbd> + <kbd>H</kbd> + <kbd>A</kbd> + <kbd>R</kbd> : Aligner à droite.</li>  
        </ul>  
    </li>  
    <li><strong>Format de cellule</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>1</kbd> : Ouvrir la boîte de dialogue Format de cellule.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>$</kbd> : Appliquer le format Monétaire.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>%</kbd> : Appliquer le format Pourcentage.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>#</kbd> : Appliquer le format Date.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>^</kbd> : Appliquer le format Nombre exposant.</li>
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>!</kbd> : Appliquer le format Nombre avec deux décimales.</li>
        </ul>  
    </li>  
</ul>  

<h4>Exploitation de Données</h4>  
<p>Ces raccourcis facilitent l'analyse et la manipulation de vos données :</p>  

<ul>  
    <li><strong>Formules et Fonctions</strong>  
        <ul>  
            <li><kbd>=</kbd> : Commencer une formule.</li>  
            <li><kbd>Alt</kbd> + <kbd>=</kbd> : Insérer la fonction SOMME automatique.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> : Développer ou réduire la barre de formule.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>\`</kbd> : Afficher les formules dans les cellules.</li>
        </ul>  
    </li>  
    <li><strong>Navigation dans les données</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>Flèche</kbd> : Aller à la dernière cellule avec des données dans la direction de la flèche.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Home</kbd> : Aller au début de la feuille.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>End</kbd> : Aller à la dernière cellule utilisée.</li>  
        </ul>  
    </li>  
    <li><strong>Filtres et Tri</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> : Appliquer ou enlever les filtres.</li>  
            <li><kbd>Alt</kbd> + <kbd>A</kbd> + <kbd>S</kbd> + <kbd>S</kbd> : Trier par ordre croissant.</li>  
            <li><kbd>Alt</kbd> + <kbd>A</kbd> + <kbd>S</kbd> + <kbd>D</kbd> : Trier par ordre décroissant.</li>  
        </ul>  
    </li>  
</ul>  

<h4>Autres</h4>  
<p>Ces raccourcis supplémentaires couvrent d'autres fonctionnalités utiles :</p>  

<ul>  
    <li><strong>Gestion des fichiers</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>N</kbd> : Créer un nouveau classeur.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>O</kbd> : Ouvrir un classeur existant.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>S</kbd> : Sauvegarder le classeur actuel.</li>  
            <li><kbd>F12</kbd> : Ouvrir la boîte de dialogue Enregistrer sous.</li>  
        </ul>  
    </li>  
    <li><strong>Impression</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>P</kbd> : Ouvrir la boîte de dialogue Imprimer.</li>  
        </ul>  
    </li>  
    <li><strong>Edition</strong>  
        <ul>  
            <li><kbd>Ctrl</kbd> + <kbd>C</kbd> : Copier la sélection.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>X</kbd> : Couper la sélection.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>V</kbd> : Coller la sélection.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Z</kbd> : Annuler la dernière action.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>Y</kbd> : Rétablir la dernière action annulée.</li>  
            <li><kbd>Ctrl</kbd> + <kbd>F</kbd> : Ouvrir la boîte de dialogue Rechercher.</li>
            <li><kbd>Ctrl</kbd> + <kbd>H</kbd> : Ouvrir la boîte de dialogue Remplacer.</li>
        </ul>  
    </li>  
    <li><strong>Aide et Support</strong>  
        <ul>  
            <li><kbd>F1</kbd> : Ouvrir l'Aide d'Excel.</li>  
        </ul>  
    </li>  
</ul>  

<br>  

<p>Ce cours couvre une sélection des raccourcis clavier les plus utiles dans Excel, organisés par thématiques. En maîtrisant ces raccourcis, vous pouvez travailler de manière plus rapide et plus efficace, en réduisant votre dépendance à la souris. Pratiquez régulièrement pour intégrer ces raccourcis dans votre flux de travail quotidien.</p>  
`,
    },

    "types-fichiers": {
        title: "Types de fichiers (XLSX, XLSM, CSV, etc)",
        content: `

<p>Excel prend en charge plusieurs formats de fichiers, chacun ayant ses propres caractéristiques et utilisations. Comprendre ces formats est crucial pour choisir le bon type de fichier pour vos besoins. Voici une description des principaux types de fichiers Excel :</p>  

<h4>XLSX</h4>  
<p>Le format XLSX est le format par défaut des classeurs dans les versions modernes d'Excel (à partir d'Excel 2007). Il est basé sur le format Open XML et offre les avantages suivants :</p>  
<ul>  
    <li>Compression efficace des fichiers, ce qui réduit la taille des fichiers.</li>  
    <li>Possibilité d'inclure des formules, des graphiques, des tableaux croisés dynamiques et d'autres fonctionnalités avancées d'Excel.</li>  
    <li>Amélioration de la récupération de données en cas de corruption de fichier.</li>  
</ul>  

<h4>XLSM</h4>  
<p>Le format XLSM est similaire au format XLSX, mais il prend en charge les macros. Les macros sont des scripts automatisés écrits en VBA (Visual Basic for Applications) qui peuvent automatiser des tâches répétitives. Les avantages du format XLSM incluent :</p>  
<ul>  
    <li>Possibilité d'enregistrer et d'exécuter des macros pour automatiser des processus.</li>  
    <li>Compatible avec toutes les fonctionnalités d'Excel, y compris les formules avancées, les graphiques et les tableaux croisés dynamiques.</li>  
</ul>  

<h4>CSV</h4>  
<p>Le format CSV (Comma-Separated Values) est un format de fichier texte qui sépare les valeurs par des virgules. Il est largement utilisé pour échanger des données entre différentes applications. Les caractéristiques du format CSV sont :</p>  
<ul>  
    <li>Compatibilité universelle avec de nombreuses applications et bases de données.</li>  
    <li>Format simple et lisible par l'homme, facile à éditer avec un éditeur de texte.</li>  
    <li>Incapacité de sauvegarder les formules, les mises en forme ou les graphiques.</li>  
</ul>  

<h4>XLS</h4>  
<p>Le format XLS est le format de fichier binaire utilisé par les versions d'Excel antérieures à 2007. Bien que ce format soit encore pris en charge par les versions modernes d'Excel, il présente certaines limitations par rapport aux formats plus récents :</p>  
<ul>  
    <li>Fichiers plus volumineux en raison de l'absence de compression.</li>  
    <li>Limites en termes de nombre de lignes et de colonnes par feuille (65 536 lignes et 256 colonnes).</li>  
    <li>Moins sécurisé et plus susceptible de corruption de fichier.</li>  
</ul>  

<h4>TXT</h4>  
<p>Le format TXT est un fichier texte brut qui peut être utilisé pour importer ou exporter des données simples. Ses principales caractéristiques incluent :</p>  
<ul>  
    <li>Compatibilité avec de nombreux programmes et systèmes d'exploitation.</li>  
    <li>Utilisation d'un séparateur (comme la tabulation ou un autre caractère) pour délimiter les valeurs.</li>  
    <li>Incapacité de sauvegarder les formules, les mises en forme ou les graphiques.</li>  
</ul>  

<h4>ODS</h4>  
<p>Le format ODS (OpenDocument Spreadsheet) est un format de fichier ouvert utilisé par des suites bureautiques comme LibreOffice Calc. Il offre les avantages suivants :</p>  
<ul>  
    <li>Compatibilité avec les applications qui utilisent le format OpenDocument.</li>  
    <li>Prise en charge de nombreuses fonctionnalités similaires à celles d'Excel, comme les formules et les graphiques.</li>  
    <li>Utilisation d'un format ouvert et non propriétaire.</li>  
</ul>  

<h4>PDF</h4>  
<p>Le format PDF (Portable Document Format) est utilisé pour partager des documents en conservant leur mise en forme. Bien qu'il ne soit pas un format de fichier Excel natif, Excel permet d'exporter des classeurs au format PDF. Les avantages du format PDF incluent :</p>  
<ul>  
    <li>Conservation de la mise en forme et de la présentation sur différents dispositifs et systèmes d'exploitation.</li>  
    <li>Facilité de partage et de distribution.</li>  
    <li>Impossibilité de modifier les données directement dans le fichier PDF.</li>  
</ul>  

<br>  

<p>En connaissant les caractéristiques et les avantages de chaque format de fichier, vous pouvez choisir le type de fichier le plus adapté à vos besoins spécifiques. Que vous ayez besoin d'une compatibilité universelle, de l'automatisation par macros, ou de fonctionnalités avancées de feuille de calcul, il existe un format de fichier Excel approprié pour chaque situation.</p>  
`,
    },

    "importation-exportation": {
        title: "Importation et Exportation des Données",
        content: `

<p>Excel offre de puissantes fonctionnalités pour l'importation et l'exportation des données, vous permettant de travailler avec une variété de sources de données et de formats de fichiers. Ce cours vous guidera à travers les différentes méthodes et outils disponibles pour importer et exporter des données dans Excel.</p>

<h4>Importation des Données</h4>
<p>Excel permet d'importer des données à partir de plusieurs sources et formats. Voici quelques méthodes courantes :</p>


<h5 >Importation à partir d'un Fichier Excel (copier-coller)</h5>
<ol>
    <li>Ouvrez les deux fichiers Excel entre lesquels vous souhaitez copier des données.</li>
    <li>Sélectionnez la plage de cellules dans le fichier source que vous souhaitez copier.</li>
    <li>Appuyez sur <strong>Ctrl + C</strong> (ou cliquez avec le bouton droit et sélectionnez <strong>Copier</strong>).</li>
    <li>Allez dans le fichier de destination et sélectionnez la cellule où vous souhaitez coller les données.</li>
    <li>Appuyez sur <strong>Ctrl + V</strong> (ou cliquez avec le bouton droit et sélectionnez <strong>Coller</strong>).</li>
</ol>

<h5 >Importation avec Liaisons et Formules</h5>
<ol>
    <li>Pour créer des liaisons entre fichiers Excel, vous pouvez utiliser des formules telles que <strong>RECHERCHEV</strong>, <strong>RECHERCHEH</strong>, <strong>INDEX</strong>, et <strong>EQUIV</strong>.</li>
    <li>Ouvrez les deux fichiers Excel entre lesquels vous souhaitez créer des liaisons.</li>
    <li>Dans le fichier de destination, cliquez sur la cellule où vous souhaitez afficher les données liées.</li>
    <li>Utilisez une formule appropriée pour lier les données. Par exemple :
        <ul>
            <li><strong>RECHERCHEV</strong> : <code>=RECHERCHEV(valeur, [CheminFichierSource]FeuilleSource!Plage, index_colonne, [valeur_proche])</code></li>
            <li><strong>INDEX</strong> et <strong>EQUIV</strong> : <code>=INDEX([CheminFichierSource]FeuilleSource!Plage, EQUIV(valeur, [CheminFichierSource]FeuilleSource!Colonne, 0))</code></li>
        </ul>
    </li>
    <li>Assurez-vous que le chemin d'accès au fichier source est correct et que les noms de feuille et les plages de cellules sont appropriés.</li>
    <li>Appuyez sur <strong>Entrée</strong> pour valider la formule. Les données seront importées et mises à jour automatiquement en fonction des modifications apportées au fichier source.</li>
</ol>

<h5 >Importation à partir d'un Fichier CSV</h5>
<ol>
    <li>Ouvrez Excel et créez un nouveau classeur ou ouvrez un classeur existant.</li>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>À partir du texte/CSV</strong>.</li>
    <li>Sélectionnez le fichier CSV que vous souhaitez importer et cliquez sur <strong>Importer</strong>.</li>
    <li>Un assistant d'importation s'ouvre, vous permettant de prévisualiser et de configurer les options d'importation (délimiteurs, format des colonnes, etc.).</li>
    <li>Une fois les options configurées, cliquez sur <strong>Charger</strong> pour importer les données dans Excel.</li>
</ol>

<h5 >Importation à partir d'une Base de Données</h5>
<ol>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>À partir d'autres sources</strong>, puis sélectionnez le type de base de données (SQL Server, Access, etc.).</li>
    <li>Saisissez les informations de connexion à la base de données (serveur, base de données, authentification, etc.).</li>
    <li>Sélectionnez les tables ou les requêtes que vous souhaitez importer et configurez les options de filtrage et de tri si nécessaire.</li>
    <li>Cliquez sur <strong>Charger</strong> pour importer les données dans Excel.</li>
</ol>

<h5 >Importation à partir d'un Fichier XML</h5>
<ol>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>À partir d'autres sources</strong>, puis sélectionnez <strong>À partir d'un fichier XML</strong>.</li>
    <li>Sélectionnez le fichier XML que vous souhaitez importer et cliquez sur <strong>Importer</strong>.</li>
    <li>Excel vous demande de spécifier la manière dont vous souhaitez importer les données (comme tableau XML, plage de données, etc.).</li>
    <li>Configurez les options d'importation et cliquez sur <strong>OK</strong> pour importer les données dans Excel.</li>
</ol>



<h4>Exportation des Données</h4>
<p>Excel permet également d'exporter des données vers plusieurs formats et destinations. Voici quelques méthodes courantes :</p>

<h5 >Exportation vers un Fichier CSV</h5>
<ol>
    <li>Sélectionnez la feuille de calcul ou la plage de cellules que vous souhaitez exporter.</li>
    <li>Allez dans l'onglet <strong>Fichier</strong> et cliquez sur <strong>Enregistrer sous</strong>.</li>
    <li>Dans la boîte de dialogue Enregistrer sous, choisissez <strong>CSV (délimité par des virgules) (*.csv)</strong> dans la liste des types de fichiers.</li>
    <li>Saisissez un nom de fichier et cliquez sur <strong>Enregistrer</strong>.</li>
</ol>

<h5 >Exportation vers un Fichier PDF</h5>
<ol>
    <li>Sélectionnez la feuille de calcul ou la plage de cellules que vous souhaitez exporter.</li>
    <li>Allez dans l'onglet <strong>Fichier</strong> et cliquez sur <strong>Enregistrer sous</strong>.</li>
    <li>Dans la boîte de dialogue Enregistrer sous, choisissez <strong>PDF (*.pdf)</strong> dans la liste des types de fichiers.</li>
    <li>Saisissez un nom de fichier et cliquez sur <strong>Enregistrer</strong>.</li>
    <li>Configurez les options de mise en page et cliquez sur <strong>OK</strong> pour exporter le fichier.</li>
</ol>

<h5 >Exportation vers une Base de Données</h5>
<ol>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>À partir d'autres sources</strong>, puis sélectionnez <strong>SQL Server</strong> ou un autre type de base de données.</li>
    <li>Saisissez les informations de connexion à la base de données (serveur, base de données, authentification, etc.).</li>
    <li>Sélectionnez la table de destination ou créez une nouvelle table pour exporter les données.</li>
    <li>Cliquez sur <strong>Charger</strong> pour exporter les données vers la base de données.</li>
</ol>

<h5 >Exportation vers un Fichier Excel (XLSX)</h5>
<ol>
    <li>Sélectionnez la feuille de calcul ou la plage de cellules que vous souhaitez exporter.</li>
    <li>Allez dans l'onglet <strong>Fichier</strong> et cliquez sur <strong>Enregistrer sous</strong>.</li>
    <li>Dans la boîte de dialogue Enregistrer sous, choisissez <strong>Excel Workbook (*.xlsx)</strong> dans la liste des types de fichiers.</li>
    <li>Saisissez un nom de fichier et cliquez sur <strong>Enregistrer</strong>.</li>
</ol>

<br>

<p>Ce cours vous donne un aperçu des différentes méthodes d'importation et d'exportation des données dans Excel. En maîtrisant ces techniques, vous pouvez facilement échanger des données entre Excel et d'autres applications ou bases de données, optimisant ainsi votre flux de travail et votre productivité.</p>
`,
    },

    "saisie-simple": {
        title: "La saisie de données",
        content: `

<p>Ce cours vous guidera à travers les différentes étapes pour effectuer efficacement la saisie de données dans Excel. Vous apprendrez à entrer des données, adapter le format des cellules, valider les données, embellir votre tableau et utiliser des filtres pour trier et afficher des données spécifiques.</p>

<h4 id="saisie-simple" class="saisie-subtheme sous-thematique">La saisie simple</h4>

<h5>Entrer des données de saisie</h5>
<p>Pour saisir des données dans Excel, cliquez sur une cellule et commencez à taper. Voici quelques conseils pour la saisie efficace :</p>
<ul>
    <li>Utilisez les touches fléchées pour naviguer entre les cellules. Par exemple, <strong>Flèche vers le bas</strong> pour descendre d'une cellule, <strong>Flèche vers la droite</strong> pour passer à la cellule suivante à droite.</li>
    <li>Appuyez sur <strong><kbd>Entrée</kbd></strong> pour valider l'entrée et passer à la cellule suivante en dessous. Si vous préférez rester dans la même cellule après avoir validé, appuyez sur <kbd>Ctrl</kbd> + <kbd>Entrée</kbd>.</li>
    <li>Appuyez sur <kbd>Tab</kbd> pour valider l'entrée et passer à la cellule suivante à droite. Utilisez <kbd>Shift</kbd> + <kbd>Tab</kbd> pour revenir à la cellule précédente.</li>
    <li>Pour annuler une saisie en cours, appuyez sur <strong><kbd>Echap</kbd></strong>.</li>
</ul>

<h5>Utilisation des raccourcis de saisie</h5>
<p>Excel propose de nombreux raccourcis pour faciliter la saisie des données :</p>
<ul>
    <li><kbd>Ctrl</kbd> + <kbd>D</kbd> : Copier la cellule au-dessus dans la cellule sélectionnée. Cela est particulièrement utile pour remplir rapidement une colonne avec les mêmes données.</li>
    <li><kbd>Ctrl</kbd> + <kbd>R</kbd> : Copier la cellule à gauche dans la cellule sélectionnée. Utilisez ceci pour remplir une ligne avec les mêmes données.</li>
    <li><kbd>Alt</kbd> + <kbd>Entrée</kbd> : Insérer un saut de ligne dans une cellule. Cela permet d'avoir plusieurs lignes de texte dans une seule cellule.</li>
    <li><kbd>Ctrl</kbd> + <kbd>;</kbd> : Insérer la date actuelle dans la cellule active.</li>
    <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>:</kbd> : Insérer l'heure actuelle dans la cellule active.</li>
    <li><kbd>Ctrl</kbd> + <kbd>A</kbd> : Sélectionner toute la feuille de calcul. Pratique pour appliquer une mise en forme ou une opération à l'ensemble des données.</li>
    <li><kbd>Ctrl</kbd> + <kbd>F</kbd> : Ouvrir la boîte de dialogue Rechercher. Vous pouvez rapidement trouver une valeur spécifique dans la feuille de calcul.</li>
    <li><kbd>Ctrl</kbd> + <kbd>H</kbd> : Ouvrir la boîte de dialogue Remplacer. Cela permet de remplacer rapidement une valeur par une autre dans toute la feuille de calcul ou dans une sélection.</li>
    <li><kbd>Ctrl</kbd> + <kbd>Page Up</kbd> / <kbd>Page Down</kbd> : Naviguer entre les différentes feuilles d'un classeur. Cela vous aide à passer rapidement d'une feuille à l'autre sans utiliser la souris.</li>
    <li><kbd>Ctrl</kbd> + <kbd>Home</kbd> : Aller directement à la première cellule de la feuille de calcul (A1). Utilisez ceci pour revenir rapidement au début de la feuille.</li>
    <li><kbd>Ctrl</kbd> + <kbd>End</kbd> : Aller directement à la dernière cellule utilisée de la feuille de calcul. Cela vous permet de trouver rapidement la fin des données.</li>
    <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> : Activer ou désactiver les filtres pour la plage de données sélectionnée. Utilisez ceci pour ajouter rapidement des filtres à vos données.</li>
</ul>

<hr>

<h4 id="adapter-format-cellules" class="saisie-subtheme sous-thematique"> Adapter le format des cellules</h4>

<h5>Format de cellules (nombres, texte, date, ...)</h5>
<p>Excel propose plusieurs formats de cellule pour adapter la présentation des données :</p>

<ul>
<li><strong>Standard</strong> : Le format par défaut d'Excel. Utilisé pour les données générales qui ne nécessitent pas de mise en forme spécifique.</li>
    <li><strong>Nombres</strong> : Utilisé pour afficher des valeurs numériques. Vous pouvez définir le nombre de décimales à afficher, utiliser un séparateur de milliers, et choisir d'afficher des nombres négatifs en rouge ou entre parenthèses.</li>
    <li><strong>Décimal</strong> : Similaire aux nombres, mais avec une mise en forme spécifique pour les valeurs décimales, comme les taux d'intérêt ou les résultats de calculs financiers.</li>
    <li><strong>Texte</strong> : Utilisé pour afficher des chaînes de caractères. Les cellules en format Texte affichent exactement ce que vous saisissez, même si ce sont des nombres.</li>
    <li><strong>Date</strong> : Affiche les dates dans différents formats (jour/mois/année, mois/jour/année, etc.). Excel reconnaît les dates et vous permet de les utiliser dans des calculs.</li>
    <li><strong>Pourcentage</strong> : Affiche les nombres sous forme de pourcentages. Par exemple, 0,25 sera affiché comme 25%.</li>
    <li><strong>Monétaire</strong> : Affiche les nombres avec un symbole monétaire (€, $, etc.). Utilisé pour les valeurs financières.</li>
    <li><strong>Spécial</strong> : Utilisé pour des formats spécifiques comme les codes postaux, les numéros de téléphone, etc.</li>
</ul>

<p>Pour changer le format d'une cellule ou d'une plage de cellules :</p>
<ol>
    <li>Sélectionnez les cellules que vous souhaitez formater.</li>
    <li>Faites un clic droit et sélectionnez <strong>Format de cellule</strong> ou allez dans l'onglet <strong>Accueil</strong> et cliquez sur le lanceur de boîte de dialogue dans le groupe <strong>Nombre</strong>.</li>
    <li>Dans l'onglet <strong>Nombre</strong>, choisissez le format approprié (Nombre, Texte, Date, Heure, etc.).</li>
    <li>Configurez les options spécifiques pour chaque format (décimales, symbole monétaire, etc.).</li>
</ol>

<h5>Format personnalisé</h5>
<p>Pour créer un format personnalisé :</p>
<ol>
    <li>Ouvrez la boîte de dialogue <strong>Format de cellule</strong> et allez à l'onglet <strong>Nombre</strong>.</li>
    <li>Sélectionnez <strong>Personnalisée</strong> dans la liste des catégories.</li>
    <li>Entrez le code de format personnalisé dans le champ <strong>Type</strong> (par exemple, <code>#,##0.00</code> pour un nombre avec deux décimales et un séparateur de milliers).</li>
    <li>Cliquez sur <strong>OK</strong> pour appliquer le format.</li>
</ol>

<h5>Importance de bien configurer le format des cellules</h5>
<p>Il est crucial de configurer correctement le format des cellules pour éviter les erreurs et garantir l'exactitude des calculs. Par exemple :</p>
<ul>
    <li>Utilisez le format <strong>Nombre</strong> pour les valeurs numériques afin de pouvoir les utiliser dans des calculs et analyses.</li>
    <li>Utilisez le format <strong>Date</strong> pour les dates afin de pouvoir effectuer des opérations basées sur les dates (différences, tri, etc.).</li>
    <li>Utilisez le format <strong>Texte</strong> pour les chaînes de caractères, comme les noms ou les adresses, pour éviter qu'Excel ne les interprète comme des nombres.</li>
    <li>Utilisez le format <strong>Pourcentage</strong> pour les valeurs représentant des pourcentages pour garantir une présentation cohérente et correcte.</li>
</ul>
<p>Un format incorrect peut entraîner des erreurs dans les formules, des difficultés de tri et de filtrage des données, et des présentations inexactes. Prenez le temps de choisir le format approprié pour chaque type de données pour optimiser votre travail dans Excel.</p>

<hr>

<h4 id="validation-donnees" class="saisie-subtheme sous-thematique"> Par validation de données à partir de liste</h4>
<p>L'outil de validation des données dans Excel permet de contrôler ce que les utilisateurs peuvent saisir dans une cellule. Cela est particulièrement utile pour éviter les erreurs de saisie et garantir la cohérence des données. Par exemple, vous pouvez limiter les entrées à une liste prédéfinie de valeurs, ce qui réduit les risques d'erreurs et facilite l'analyse des données.</p>

<h5>Création et utilisation de listes déroulantes</h5>
<p>Pour créer une liste déroulante :</p>
<ol>
    <li>Sélectionnez les cellules où vous souhaitez ajouter une liste déroulante. Vous pouvez sélectionner une plage de cellules pour appliquer la liste déroulante à plusieurs cellules à la fois.</li>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>Validation des données</strong>.</li>
    <li>Dans l'onglet <strong>Paramètres</strong>, sélectionnez <strong>Liste</strong> dans le champ <strong>Autoriser</strong>.</li>
    <li>Dans le champ <strong>Source</strong>, entrez les valeurs de la liste séparées par des virgules ou sélectionnez une plage de cellules contenant les valeurs. Par exemple, pour une liste déroulante avec les valeurs "Oui", "Non", et "Peut-être", vous pouvez entrer <code>Oui;Non;Peut-être</code>.</li>
    <li>Cliquez sur <strong>OK</strong> pour créer la liste déroulante. Les cellules sélectionnées afficheront maintenant une flèche déroulante permettant aux utilisateurs de choisir une valeur dans la liste.</li>
</ol>

<h5>Validation des données pour éviter les erreurs</h5>
<p>Pour configurer la validation des données :</p>
<ol>
    <li>Sélectionnez les cellules que vous souhaitez valider. Vous pouvez appliquer des règles de validation à une seule cellule, une plage de cellules, ou une colonne entière.</li>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>Validation des données</strong>.</li>
    <li>Dans l'onglet <strong>Paramètres</strong>, sélectionnez les critères de validation (par exemple, entier, décimal, date, texte de longueur spécifique, etc.).</li>
    <li>Définissez les conditions de validation (par exemple, entre, supérieur à, inférieur à, etc.) et les valeurs limites. Par exemple, pour autoriser seulement les nombres compris entre 1 et 100, choisissez <strong>Entier</strong> dans <strong>Autoriser</strong>, puis sélectionnez <strong>entre</strong> et entrez 1 et 100.</li>
    <li>Utilisez les onglets <strong>Message de saisie</strong> et <strong>Alerte d'erreur</strong> pour personnaliser les messages affichés aux utilisateurs. Par exemple, vous pouvez afficher un message d'instruction lorsque l'utilisateur sélectionne la cellule, et un message d'erreur s'il entre une valeur non valide.</li>
    <li>Cliquez sur <strong>OK</strong> pour appliquer la validation des données. Les cellules sélectionnées appliqueront maintenant les règles de validation définies, aidant à éviter les erreurs de saisie.</li>
</ol>

<hr>

<h4 id="embellissement" class="saisie-subtheme sous-thematique">Embellissement</h4>

<h5>Mise en forme et alignement</h5>
<p>Pour mettre en forme vos cellules :</p>
<ol>
    <li>Sélectionnez les cellules que vous souhaitez formater. Utilisez les outils de sélection pour choisir une seule cellule, une plage de cellules, des colonnes entières, etc.</li>
    <li>Utilisez les options de l'onglet <strong>Accueil</strong> pour changer la police, la taille, la couleur, etc. Par exemple, vous pouvez choisir une police différente, augmenter la taille du texte, ou appliquer une couleur de texte spécifique.</li>
    <li>Utilisez les boutons d'alignement pour ajuster l'alignement horizontal et vertical du texte dans les cellules. Par exemple, utilisez les boutons <strong>Aligner à gauche</strong>, <strong>Centrer</strong>, et <strong>Aligner à droite</strong> pour l'alignement horizontal, et <strong>Aligner en haut</strong>, <strong>Aligner au centre</strong>, et <strong>Aligner en bas</strong> pour l'alignement vertical.</li>
    <li>Utilisez le bouton <strong>Orientation du texte</strong> pour faire pivoter le texte dans les cellules.</li>
</ol>

<h5>Utilisation des bordures et remplissage</h5>
<p>Pour ajouter des bordures et des couleurs de remplissage :</p>
<ol>
    <li>Sélectionnez les cellules que vous souhaitez formater. Utilisez les options de sélection pour choisir une seule cellule, une plage de cellules, ou une feuille entière.</li>
    <li>Utilisez les options de bordure dans l'onglet <strong>Accueil</strong> pour ajouter des bordures aux cellules sélectionnées. Par exemple, vous pouvez ajouter des bordures extérieures, des bordures intérieures, des bordures de grille, etc.</li>
    <li>Utilisez le bouton <strong>Couleur de remplissage</strong> pour ajouter une couleur de fond aux cellules sélectionnées. Par exemple, utilisez une couleur claire pour mettre en évidence des données spécifiques ou pour différencier les en-têtes de colonne des données.</li>
</ol>

<h5>Autres techniques d'embellissement</h5>
<p>Pour rendre vos données plus attractives et plus faciles à interpréter, vous pouvez également utiliser les techniques suivantes :</p>

<h5>Formatage conditionnel</h5>
<p>Le formatage conditionnel permet de modifier l'apparence des cellules en fonction de certaines conditions :</p>
<ol>
    <li>Sélectionnez la plage de cellules que vous souhaitez formater conditionnellement.</li>
    <li>Allez dans l'onglet <strong>Accueil</strong> et cliquez sur <strong>Format conditionnel</strong>.</li>
    <li>Choisissez un type de règle (par exemple, <strong>Valeurs des cellules</strong>, <strong>Barres de données</strong>, <strong>Nuances de couleur</strong>, ou <strong>Jeux d'icônes</strong>).</li>
    <li>Configurez la règle selon vos besoins. Par exemple, vous pouvez appliquer une mise en forme spécifique aux cellules dont la valeur est supérieure à un certain seuil.</li>
    <li>Cliquez sur <strong>OK</strong> pour appliquer la mise en forme conditionnelle.</li>
</ol>

<h5>Styles de cellule</h5>
<p>Les styles de cellule sont des ensembles de mise en forme prédéfinis que vous pouvez appliquer rapidement pour garantir une apparence cohérente :</p>
<ol>
    <li>Sélectionnez les cellules que vous souhaitez formater.</li>
    <li>Allez dans l'onglet <strong>Accueil</strong> et cliquez sur <strong>Styles de cellule</strong> dans le groupe <strong>Styles</strong>.</li>
    <li>Choisissez un style dans la galerie pour l'appliquer aux cellules sélectionnées. Par exemple, vous pouvez utiliser des styles pour les titres, les en-têtes, les totaux, etc.</li>
</ol>

<h5>Thèmes et couleurs</h5>
<p>Utilisez les thèmes et les couleurs pour uniformiser l'apparence de votre classeur :</p>
<ol>
    <li>Allez dans l'onglet <strong>Création</strong> (ou <strong>Disposition</strong>, selon votre version d'Excel).</li>
    <li>Choisissez un thème prédéfini pour appliquer une combinaison cohérente de couleurs, de polices et d'effets à votre classeur.</li>
    <li>Pour personnaliser davantage, cliquez sur <strong>Couleurs</strong> ou <strong>Polices</strong> et choisissez ou créez vos propres jeux de couleurs et de polices.</li>
</ol>

<h5>Insertion d'images et de graphiques</h5>
<p>Pour rendre vos données plus visuelles et attractives, vous pouvez insérer des images et des graphiques :</p>
<ol>
    <li>Pour insérer une image, allez dans l'onglet <strong>Insertion</strong>, cliquez sur <strong>Images</strong> et sélectionnez une image à partir de votre ordinateur ou d'une source en ligne.</li>
    <li>Pour insérer un graphique, sélectionnez les données que vous souhaitez représenter graphiquement, allez dans l'onglet <strong>Insertion</strong> et choisissez un type de graphique (par exemple, histogramme, courbe, secteur, etc.).</li>
    <li>Utilisez les outils de graphique pour personnaliser l'apparence de votre graphique (couleurs, titres, légendes, etc.).</li>
</ol>

<p>Ces techniques d'embellissement vous permettent de rendre vos feuilles de calcul plus lisibles, plus attrayantes et plus professionnelles. En utilisant des mises en forme cohérentes et des éléments visuels, vous pouvez faciliter la compréhension de vos données et améliorer la présentation de vos analyses.</p>

<hr>

<h4 id="filtres" class="saisie-subtheme sous-thematique">Les filtres</h4>

<h5>Trier et afficher des données spécifiques</h5>
<p>Les filtres sont des outils puissants dans Excel pour afficher uniquement les données qui répondent à certains critères. Ils permettent de simplifier l'analyse des données en masquant temporairement les données qui ne sont pas pertinentes. Voici comment les utiliser :</p>

<h5>Ajouter des filtres</h5>
<ol>
    <li>Sélectionnez les cellules contenant les données que vous souhaitez filtrer. Il est souvent préférable de sélectionner toute la plage de données, y compris les en-têtes de colonne.</li>
    <li>Allez dans l'onglet <strong>Données</strong> et cliquez sur <strong>Filtrer</strong>. Des flèches de filtre apparaîtront dans les en-têtes de colonne.</li>
    <li>Cliquez sur une flèche de filtre pour afficher les options de filtre.</li>
</ol>

<h5>Utiliser les filtres de texte</h5>
<p>Pour filtrer des données textuelles :</p>
<ol>
    <li>Cliquez sur la flèche de filtre dans l'en-tête de la colonne contenant le texte que vous souhaitez filtrer.</li>
    <li>Sélectionnez <strong>Filtres de texte</strong> et choisissez une condition (par exemple, <strong>Contient</strong>, <strong>Ne contient pas</strong>, <strong>Commence par</strong>, <strong>Se termine par</strong>, etc.).</li>
    <li>Entrez le texte ou la condition de filtre et cliquez sur <strong>OK</strong>.</li>
</ol>

<h5>Utiliser les filtres de nombre</h5>
<p>Pour filtrer des données numériques :</p>
<ol>
    <li>Cliquez sur la flèche de filtre dans l'en-tête de la colonne contenant les nombres que vous souhaitez filtrer.</li>
    <li>Sélectionnez <strong>Filtres de nombre</strong> et choisissez une condition (par exemple, <strong>Supérieur à</strong>, <strong>Inférieur à</strong>, <strong>Entre</strong>, etc.).</li>
    <li>Entrez les valeurs de filtre et cliquez sur <strong>OK</strong>.</li>
</ol>

<h5>Utiliser les filtres de date</h5>
<p>Pour filtrer des données de date :</p>
<ol>
    <li>Cliquez sur la flèche de filtre dans l'en-tête de la colonne contenant les dates que vous souhaitez filtrer.</li>
    <li>Sélectionnez <strong>Filtres de date</strong> et choisissez une condition (par exemple, <strong>Aujourd'hui</strong>, <strong>La semaine dernière</strong>, <strong>Le mois prochain</strong>, etc.).</li>
    <li>Entrez les valeurs de filtre et cliquez sur <strong>OK</strong>.</li>
</ol>

<h5>Utiliser les filtres de couleur</h5>
<p>Pour filtrer des données par couleur de cellule ou couleur de police :</p>
<ol>
    <li>Cliquez sur la flèche de filtre dans l'en-tête de la colonne contenant les cellules avec des couleurs de remplissage ou de police.</li>
    <li>Sélectionnez <strong>Filtrer par couleur</strong> et choisissez la couleur de cellule ou de police à utiliser comme critère de filtre.</li>
</ol>

<h5>Effacer un filtre</h5>
<p>Pour effacer un filtre et afficher toutes les données :</p>
<ol>
    <li>Cliquez sur la flèche de filtre dans l'en-tête de la colonne filtrée.</li>
    <li>Sélectionnez <strong>Effacer le filtre</strong> de [Nom de la colonne].</li>
</ol>

<h5>Filtrer à l'aide de segments (pour les tableaux croisés dynamiques)</h5>
<p>Les segments permettent de filtrer rapidement les données dans les tableaux croisés dynamiques :</p>
<ol>
    <li>Sélectionnez le tableau croisé dynamique à filtrer.</li>
    <li>Allez dans l'onglet <strong>Analyse de tableau croisé dynamique</strong> et cliquez sur <strong>Insérer un segment</strong>.</li>
    <li>Cochez les cases des champs pour lesquels vous souhaitez créer des segments et cliquez sur <strong>OK</strong>.</li>
    <li>Utilisez les segments pour filtrer les données en cliquant sur les boutons correspondants aux valeurs souhaitées.</li>
</ol>

<p>Les filtres vous permettent de gérer et d'analyser vos données plus efficacement, en vous concentrant sur les informations les plus pertinentes. En maîtrisant les différentes options de filtrage, vous pouvez naviguer et exploiter vos données de manière optimale.</p>
`,
    },
    
    "additionner": {
    "title": "Additionner",
    "content": `
    <h4 id="additionner" class="formule-subtheme sous-thematique">Additionner</h4>
    
    <p>Excel propose plusieurs méthodes pour additionner des valeurs. Vous pouvez utiliser des formules simples, des fonctions pré-intégrées, et même des outils de somme automatique. Cette section vous guidera à travers ces différentes techniques pour effectuer des additions efficacement dans vos feuilles de calcul.</p>
    
    <h5>Utiliser l'opérateur d'addition</h5>
    <p>Pour additionner des valeurs de manière simple, vous pouvez utiliser l'opérateur d'addition (+) dans une formule :</p>
    <ul>
        <li>Saisissez une formule dans une cellule, en utilisant l'opérateur + pour additionner deux ou plusieurs valeurs. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=A1 + B1 + C1', this)">📋</span>
        <code>=A1 + B1 + C1</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Additionner les valeurs dans les cellules A1, B1 et C1, puis soustraire la somme des cellules D1 et E1 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=A1 + B1 + C1 - (D1 + E1)', this)">📋</span>
        <code>=A1 + B1 + C1 - (D1 + E1)</code>
    </div>
    
    <h5>La fonction SOMME</h5>
    <p>La fonction <code>=SOMME()</code> est une méthode puissante et flexible pour additionner des plages de cellules :</p>
    <ul>
        <li>Saisissez <code>=SOMME(</code> dans une cellule, puis sélectionnez la plage de cellules à additionner. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME(A1:A10)', this)">📋</span>
        <code>=SOMME(A1:A10)</code>
    </div>
    <p>Vous pouvez également additionner des cellules non contiguës en utilisant des points-virgules pour séparer les plages et les cellules :</p>
    <ul>
        <li>Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME(A1:A10; B1:B10; C1:C10)', this)">📋</span>
        <code>=SOMME(A1:A10; B1:B10; C1:C10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Additionner les valeurs des plages A1:A10 et C1:C10, en excluant les valeurs négatives :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME(SI(A1:A10>0; A1:A10; 0); SI(C1:C10>0; C1:C10; 0))', this)">📋</span>
        <code>=SOMME(SI(A1:A10>0; A1:A10; 0); SI(C1:C10>0; C1:C10; 0))</code>
    </div>
    
    <h5>Utiliser l'outil Somme automatique</h5>
    <p>L'outil Somme automatique permet de calculer rapidement la somme d'une plage de cellules :</p>
    <ul>
        <li>Sélectionnez la cellule en dessous ou à droite de la plage que vous souhaitez additionner.</li>
        <li>Allez dans l'onglet <strong>Accueil</strong> et cliquez sur <strong>Somme automatique</strong> dans le groupe <strong>Edition</strong>. Excel insérera automatiquement une formule <code>=SOMME()</code> pour la plage sélectionnée.</li>
        <li>Appuyez sur <kbd>Entrée</kbd> pour valider la formule et afficher le résultat.</li>
    </ul>
    
    <h5>Ajouter des valeurs basées sur des critères spécifiques avec la fonction SOMME.SI</h5>
    <p>La fonction <code>=SOMME.SI()</code> permet d'additionner des valeurs qui répondent à un critère spécifique :</p>
    <ul>
        <li>La syntaxe est <code>=SOMME.SI(plage; critère; [somme_plage])</code>.</li>
        <li>Par exemple, pour additionner les valeurs de la colonne B où les valeurs de la colonne A sont supérieures à 100 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME.SI(A1:A10; &quot;>100&quot;; B1:B10)', this)">📋</span>
        <code>=SOMME.SI(A1:A10; \">100\"; B1:B10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Ajouter les valeurs de la colonne B où les valeurs de la colonne A sont supérieures à 100 et les valeurs de la colonne C sont inférieures à 50 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME.SI(A1:A10; &quot;>100&quot;; SI(C1:C10 < 50; B1:B10; 0))', this)">📋</span>
        <code>=SOMME.SI(A1:A10; \">100\"; SI(C1:C10 < 50; B1:B10; 0))</code>
    </div>
    
    <h5>Utiliser des critères multiples avec la fonction SOMME.SI.ENS</h5>
    <p>La fonction <code>=SOMME.SI.ENS()</code> permet d'additionner des valeurs en fonction de plusieurs critères :</p>
    <ul>
        <li>La syntaxe est <code>=SOMME.SI.ENS(somme_plage; plage_critère1; critère1; [plage_critère2; critère2]; ...)</code>.</li>
        <li>Par exemple, pour additionner les valeurs de la colonne C où les valeurs de la colonne A sont supérieures à 100 et les valeurs de la colonne B sont égales à "Oui" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME.SI.ENS(C1:C10; A1:A10; &quot;>100&quot;; B1:B10; &quot;Oui&quot;)', this)">📋</span>
        <code>=SOMME.SI.ENS(C1:C10; A1:A10; \">100\"; B1:B10; \"Oui\")</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Ajouter les valeurs de la colonne C où les valeurs de la colonne A sont supérieures à 100, les valeurs de la colonne B sont égales à "Oui", et les valeurs de la colonne D sont inférieures à 500 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMME.SI.ENS(C1:C10; A1:A10; &quot;>100&quot;; B1:B10; &quot;Oui&quot;; D1:D10; &quot;<500&quot;)', this)">📋</span>
        <code>=SOMME.SI.ENS(C1:C10; A1:A10; \">100\"; B1:B10; \"Oui\"; D1:D10; \"<500\")</code>
    </div>
    
    <h5>Utiliser la fonction SOMMEPROD</h5>
    <p>La fonction <code>=SOMMEPROD()</code> multiplie les valeurs correspondantes dans des plages spécifiées et additionne les produits :</p>
    <ul>
        <li>La syntaxe est <code>=SOMMEPROD(plage1; [plage2]; [plage3]; ...)</code>.</li>
        <li>Par exemple, pour additionner les produits des valeurs des colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMMEPROD(A1:A10; B1:B10)', this)">📋</span>
        <code>=SOMMEPROD(A1:A10; B1:B10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Ajouter les produits des valeurs dans les colonnes A et B, en excluant les lignes où les valeurs dans la colonne C sont nulles :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=SOMMEPROD((C1:C10<>&quot; &quot;) * (A1:A10; B1:B10))', this)">📋</span>
        <code>=SOMMEPROD((C1:C10<>\"\") * (A1:A10; B1:B10))</code>
    </div>

    <p>En maîtrisant ces différentes techniques, vous serez capable d'effectuer des additions complexes et précises dans Excel, optimisant ainsi votre gestion des données et vos analyses.</p>
    `
},



    "manipuler-nombre": {
        title: "Manipuler les nombres",
        content: `
<h4 id="manipulerLesNombres" class="formule-subtheme sous-thematique">Manipuler les nombres</h4>

<p>Excel offre une gamme de fonctions pour manipuler les nombres selon vos besoins. Cette section couvre les fonctions courantes pour les produits, les arrondis, les valeurs entières, les tronquages, les quotients, les restes, et pour vérifier la parité des nombres.</p>

<h5>La fonction PRODUIT</h5>
<p>La fonction <code>=PRODUIT()</code> multiplie les valeurs spécifiées :</p>
<ul>
    <li>La syntaxe est <code>=PRODUIT(nombre1; [nombre2]; ...)</code>.</li>
    <li>Par exemple, pour multiplier les valeurs des cellules A1, A2 et A3 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=PRODUIT(A1; A2; A3)', this)">📋</span>
    <code>=PRODUIT(A1; A2; A3)</code>
</div>

<h5>La fonction ARRONDI</h5>
<p>La fonction <code>=ARRONDI()</code> arrondit un nombre à un certain nombre de chiffres :</p>
<ul>
    <li>La syntaxe est <code>=ARRONDI(nombre; nombre_de_chiffres)</code>.</li>
    <li>Par exemple, pour arrondir la valeur de A1 à 2 chiffres après la virgule :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=ARRONDI(A1; 2)', this)">📋</span>
    <code>=ARRONDI(A1; 2)</code>
</div>

<h5>La fonction ENT</h5>
<p>La fonction <code>=ENT()</code> renvoie la partie entière d'un nombre en arrondissant à l'inférieur :</p>
<ul>
    <li>La syntaxe est <code>=ENT(nombre)</code>.</li>
    <li>Par exemple, pour obtenir la partie entière de la valeur de A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=ENT(A1)', this)">📋</span>
    <code>=ENT(A1)</code>
</div>

<h5>La fonction TRONQUE</h5>
<p>La fonction <code>=TRONQUE()</code> tronque un nombre à un certain nombre de chiffres sans arrondir :</p>
<ul>
    <li>La syntaxe est <code>=TRONQUE(nombre; [nombre_de_chiffres])</code>.</li>
    <li>Par exemple, pour tronquer la valeur de A1 à 2 chiffres après la virgule :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=TRONQUE(A1; 2)', this)">📋</span>
    <code>=TRONQUE(A1; 2)</code>
</div>

<h5>La fonction QUOTIENT</h5>
<p>La fonction <code>=QUOTIENT()</code> renvoie la partie entière de la division de deux nombres :</p>
<ul>
    <li>La syntaxe est <code>=QUOTIENT(numérateur; dénominateur)</code>.</li>
    <li>Par exemple, pour obtenir le quotient de la division de A1 par B1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=QUOTIENT(A1; B1)', this)">📋</span>
    <code>=QUOTIENT(A1; B1)</code>
</div>

<h5>La fonction MOD</h5>
<p>La fonction <code>=MOD()</code> renvoie le reste de la division de deux nombres :</p>
<ul>
    <li>La syntaxe est <code>=MOD(numérateur; dénominateur)</code>.</li>
    <li>Par exemple, pour obtenir le reste de la division de A1 par B1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=MOD(A1; B1)', this)">📋</span>
    <code>=MOD(A1; B1)</code>
</div>

<h5>La fonction PAIR</h5>
<p>La fonction <code>=EST.PAIR()</code> vérifie si un nombre est pair :</p>
<ul>
    <li>La syntaxe est <code>=EST.PAIR(nombre)</code>.</li>
    <li>Par exemple, pour vérifier si la valeur de A1 est paire :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=EST.PAIR(A1)', this)">📋</span>
    <code>=EST.PAIR(A1)</code>
</div>

<h5>La fonction IMPAIR</h5>
<p>La fonction <code>=EST.IMPAIR()</code> vérifie si un nombre est impair :</p>
<ul>
    <li>La syntaxe est <code>=EST.IMPAIR(nombre)</code>.</li>
    <li>Par exemple, pour vérifier si la valeur de A1 est impaire :</li>
</ul>
<div class="formula-box">
    <span class="copy-button" onclick="copyToClipboard('=EST.IMPAIR(A1)', this)">📋</span>
    <code>=EST.IMPAIR(A1)</code>
</div>
`,
    },

"manipuler-nombre": {
    "title": "Manipuler les nombres",
    "content": `
    <h4 id="manipulerLesNombres" class="formule-subtheme sous-thematique">Manipuler les nombres</h4>

    <p>Excel offre une gamme de fonctions pour manipuler les nombres selon vos besoins. Cette section couvre les fonctions courantes pour les produits, les arrondis, les valeurs entières, les tronquages, les quotients, les restes, et pour vérifier la parité des nombres.</p>

    <h5>La fonction PRODUIT</h5>
    <p>La fonction <code>=PRODUIT()</code> multiplie les valeurs spécifiées :</p>
    <ul>
        <li>La syntaxe est <code>=PRODUIT(nombre1; [nombre2]; ...)</code>.</li>
        <li>Par exemple, pour multiplier les valeurs des cellules A1, A2 et A3 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=PRODUIT(A1; A2; A3)', this)">📋</span>
        <code>=PRODUIT(A1; A2; A3)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Multiplier les valeurs des cellules A1 à A5 et les diviser par le produit des valeurs des cellules B1 à B5 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=PRODUIT(A1:A5) / PRODUIT(B1:B5)', this)">📋</span>
        <code>=PRODUIT(A1:A5) / PRODUIT(B1:B5)</code>
    </div>

    <h5>La fonction ARRONDI</h5>
    <p>La fonction <code>=ARRONDI()</code> arrondit un nombre à un certain nombre de chiffres :</p>
    <ul>
        <li>La syntaxe est <code>=ARRONDI(nombre; nombre_de_chiffres)</code>.</li>
        <li>Par exemple, pour arrondir la valeur de A1 à 2 chiffres après la virgule :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=ARRONDI(A1; 2)', this)">📋</span>
        <code>=ARRONDI(A1; 2)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Arrondir la moyenne des valeurs des cellules A1 à A10 à 1 chiffre après la virgule :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=ARRONDI(MOYENNE(A1:A10); 1)', this)">📋</span>
        <code>=ARRONDI(MOYENNE(A1:A10); 1)</code>
    </div>

    <h5>La fonction ENT</h5>
    <p>La fonction <code>=ENT()</code> renvoie la partie entière d'un nombre en arrondissant à l'inférieur :</p>
    <ul>
        <li>La syntaxe est <code>=ENT(nombre)</code>.</li>
        <li>Par exemple, pour obtenir la partie entière de la valeur de A1 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=ENT(A1)', this)">📋</span>
        <code>=ENT(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Obtenir la partie entière de la somme des valeurs des cellules A1 à A10 divisée par 3 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=ENT(SOMME(A1:A10) / 3)', this)">📋</span>
        <code>=ENT(SOMME(A1:A10) / 3)</code>
    </div>

    <h5>La fonction TRONQUE</h5>
    <p>La fonction <code>=TRONQUE()</code> tronque un nombre à un certain nombre de chiffres sans arrondir :</p>
    <ul>
        <li>La syntaxe est <code>=TRONQUE(nombre; [nombre_de_chiffres])</code>.</li>
        <li>Par exemple, pour tronquer la valeur de A1 à 2 chiffres après la virgule :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=TRONQUE(A1; 2)', this)">📋</span>
        <code>=TRONQUE(A1; 2)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Tronquer la somme des valeurs des cellules A1 à A10 à 1 chiffre après la virgule :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=TRONQUE(SOMME(A1:A10); 1)', this)">📋</span>
        <code>=TRONQUE(SOMME(A1:A10); 1)</code>
    </div>

    <h5>La fonction QUOTIENT</h5>
    <p>La fonction <code>=QUOTIENT()</code> renvoie la partie entière de la division de deux nombres :</p>
    <ul>
        <li>La syntaxe est <code>=QUOTIENT(numérateur; dénominateur)</code>.</li>
        <li>Par exemple, pour obtenir le quotient de la division de A1 par B1 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=QUOTIENT(A1; B1)', this)">📋</span>
        <code>=QUOTIENT(A1; B1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Obtenir le quotient de la somme des valeurs des cellules A1 à A10 divisée par le produit des valeurs des cellules B1 à B10 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=QUOTIENT(SOMME(A1:A10); PRODUIT(B1:B10))', this)">📋</span>
        <code>=QUOTIENT(SOMME(A1:A10); PRODUIT(B1:B10))</code>
    </div>

    <h5>La fonction MOD</h5>
    <p>La fonction <code>=MOD()</code> renvoie le reste de la division de deux nombres :</p>
    <ul>
        <li>La syntaxe est <code>=MOD(numérateur; dénominateur)</code>.</li>
        <li>Par exemple, pour obtenir le reste de la division de A1 par B1 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=MOD(A1; B1)', this)">📋</span>
        <code>=MOD(A1; B1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Obtenir le reste de la division de la somme des valeurs des cellules A1 à A10 par la somme des valeurs des cellules B1 à B10 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=MOD(SOMME(A1:A10); SOMME(B1:B10))', this)">📋</span>
        <code>=MOD(SOMME(A1:A10); SOMME(B1:B10))</code>
    </div>

    <h5>La fonction PAIR</h5>
    <p>La fonction <code>=EST.PAIR()</code> vérifie si un nombre est pair :</p>
    <ul>
        <li>La syntaxe est <code>=EST.PAIR(nombre)</code>.</li>
        <li>Par exemple, pour vérifier si la valeur de A1 est paire :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=EST.PAIR(A1)', this)">📋</span>
        <code>=EST.PAIR(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Vérifier si le produit des valeurs des cellules A1 à A5 est pair :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=EST.PAIR(PRODUIT(A1:A5))', this)">📋</span>
        <code>=EST.PAIR(PRODUIT(A1:A5))</code>
    </div>

    <h5>La fonction IMPAIR</h5>
    <p>La fonction <code>=EST.IMPAIR()</code> vérifie si un nombre est impair :</p>
    <ul>
        <li>La syntaxe est <code>=EST.IMPAIR(nombre)</code>.</li>
        <li>Par exemple, pour vérifier si la valeur de A1 est impaire :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=EST.IMPAIR(A1)', this)">📋</span>
        <code>=EST.IMPAIR(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Vérifier si la différence entre les valeurs des cellules A1 et B1 est impaire :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button" onclick="copyToClipboard('=EST.IMPAIR(A1 - B1)', this)">📋</span>
        <code>=EST.IMPAIR(A1 - B1)</code>
    </div>
    `
},

"compter_cellules": {
    "title": "Compter des cellules",
    "content": `
    <h4 id="compter_des_cellules" class="formule-subtheme sous-thematique">Compter des cellules</h4>

    <p>Excel offre plusieurs fonctions pour compter des cellules en fonction de différents critères. Cette section vous guidera à travers l'utilisation des fonctions COMPTE, NB.SI, NB.SI.ENS, NBVAL et NB.VIDE pour effectuer des comptages dans vos feuilles de calcul.</p>

    <h5>Utiliser la fonction COMPTE</h5>
    <p>La fonction <code>=COMPTE()</code> permet de compter le nombre de cellules contenant des nombres dans une plage :</p>
    <ul>
        <li>Saisissez <code>=COMPTE(</code> dans une cellule, puis sélectionnez la plage de cellules que vous souhaitez compter. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=COMPTE(A1:A10)', this)">📋</span>
        <code>=COMPTE(A1:A10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Compter le nombre de cellules contenant des nombres dans les colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=COMPTE(A1:A10) + COMPTE(B1:B10)', this)">📋</span>
        <code>=COMPTE(A1:A10) + COMPTE(B1:B10)</code>
    </div>

    <h5>Utiliser la fonction NB.SI</h5>
    <p>La fonction <code>=NB.SI()</code> permet de compter le nombre de cellules qui répondent à un critère spécifique :</p>
    <ul>
        <li>La syntaxe est <code>=NB.SI(plage; critère)</code>.</li>
        <li>Par exemple, pour compter le nombre de cellules dans la colonne A contenant la valeur "Oui" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.SI(A1:A10; &quot;Oui&quot;)', this)">📋</span>
        <code>=NB.SI(A1:A10; "Oui")</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Compter le nombre de cellules dans la colonne A contenant la valeur "Oui" et celles dans la colonne B contenant la valeur "Non" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.SI(A1:A10; &quot;Oui&quot;) + NB.SI(B1:B10; &quot;Non&quot;)', this)">📋</span>
        <code>=NB.SI(A1:A10; "Oui") + NB.SI(B1:B10; "Non")</code>
    </div>

    <h5>Utiliser des critères multiples avec la fonction NB.SI.ENS</h5>
    <p>La fonction <code>=NB.SI.ENS()</code> permet de compter le nombre de cellules qui répondent à plusieurs critères :</p>
    <ul>
        <li>La syntaxe est <code>=NB.SI.ENS(plage_critère1; critère1; [plage_critère2; critère2]; ...)</code>.</li>
        <li>Par exemple, pour compter le nombre de cellules dans la colonne C où les valeurs de la colonne A sont supérieures à 100 et les valeurs de la colonne B sont égales à "Oui" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.SI.ENS(C1:C10; A1:A10; &quot;>100&quot;; B1:B10; &quot;Oui&quot;)', this)">📋</span>
        <code>=NB.SI.ENS(C1:C10; A1:A10; ">100"; B1:B10; "Oui")</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Compter le nombre de cellules dans la colonne D où les valeurs de la colonne A sont inférieures à 50, celles de la colonne B sont égales à "Oui", et celles de la colonne C sont non vides :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.SI.ENS(D1:D10; A1:A10; &quot;<50&quot;; B1:B10; &quot;Oui&quot;; C1:C10; &quot;<>&quot;)', this)">📋</span>
        <code>=NB.SI.ENS(D1:D10; A1:A10; "<50"; B1:B10; "Oui"; C1:C10; "<>")</code>
    </div>

    <h5>Utiliser la fonction NBVAL</h5>
    <p>La fonction <code>=NBVAL()</code> permet de compter le nombre de cellules non vides dans une plage :</p>
    <ul>
        <li>Saisissez <code>=NBVAL(</code> dans une cellule, puis sélectionnez la plage de cellules que vous souhaitez compter. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NBVAL(A1:A10)', this)">📋</span>
        <code>=NBVAL(A1:A10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Compter le nombre de cellules non vides dans les colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NBVAL(A1:A10) + NBVAL(B1:B10)', this)">📋</span>
        <code>=NBVAL(A1:A10) + NBVAL(B1:B10)</code>
    </div>

    <h5>Utiliser la fonction NB.VIDE</h5>
    <p>La fonction <code>=NB.VIDE()</code> permet de compter le nombre de cellules vides dans une plage :</p>
    <ul>
        <li>Saisissez <code>=NB.VIDE(</code> dans une cellule, puis sélectionnez la plage de cellules que vous souhaitez compter. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.VIDE(A1:A10)', this)">📋</span>
        <code>=NB.VIDE(A1:A10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Compter le nombre de cellules vides dans les colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=NB.VIDE(A1:A10) + NB.VIDE(B1:B10)', this)">📋</span>
        <code>=NB.VIDE(A1:A10) + NB.VIDE(B1:B10)</code>
    </div>

    <p>En maîtrisant ces différentes fonctions, vous serez capable de compter des cellules de manière précise et adaptée à vos besoins dans Excel.</p>
    `
},


"trouver_valeurs_extremes": {
    "title": "Trouver des valeurs extrêmes",
    "content": `
    <h4 id="trouver_des_valeurs_extremes" class="formule-subtheme sous-thematique">Trouver des valeurs extrêmes</h4>

    <p>Excel offre plusieurs fonctions pour trouver les valeurs minimales et maximales dans une plage de données. Cette section vous guidera à travers l'utilisation des fonctions MIN, MIN.SI.ENS, MAX et MAX.SI.ENS pour identifier les valeurs extrêmes dans vos feuilles de calcul.</p>

    <h5>Utiliser la fonction MIN</h5>
    <p>La fonction <code>=MIN()</code> permet de trouver la valeur minimale dans une plage de cellules :</p>
    <ul>
        <li>Saisissez <code>=MIN(</code> dans une cellule, puis sélectionnez la plage de cellules dont vous souhaitez trouver la valeur minimale. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MIN(A1:A10)', this)">📋</span>
        <code>=MIN(A1:A10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Trouver la valeur minimale dans les colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MIN(MIN(A1:A10); MIN(B1:B10))', this)">📋</span>
        <code>=MIN(MIN(A1:A10); MIN(B1:B10))</code>
    </div>

    <h5>Utiliser la fonction MIN.SI.ENS</h5>
    <p>La fonction <code>=MIN.SI.ENS()</code> permet de trouver la valeur minimale dans une plage en fonction de plusieurs critères :</p>
    <ul>
        <li>La syntaxe est <code>=MIN.SI.ENS(min_plage; plage_critère1; critère1; [plage_critère2; critère2]; ...)</code>.</li>
        <li>Par exemple, pour trouver la valeur minimale dans la colonne C où les valeurs de la colonne A sont supérieures à 100 et les valeurs de la colonne B sont égales à "Oui" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MIN.SI.ENS(C1:C10; A1:A10; &quot;>100&quot;; B1:B10; &quot;Oui&quot;)', this)">📋</span>
        <code>=MIN.SI.ENS(C1:C10; A1:A10; ">100"; B1:B10; "Oui")</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Trouver la valeur minimale dans la colonne C où les valeurs de la colonne A sont supérieures à 50, les valeurs de la colonne B sont égales à "Oui", et les valeurs de la colonne D sont inférieures à 500 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MIN.SI.ENS(C1:C10; A1:A10; &quot;>50&quot;; B1:B10; &quot;Oui&quot;; D1:D10; &quot;<500&quot;)', this)">📋</span>
        <code>=MIN.SI.ENS(C1:C10; A1:A10; ">50"; B1:B10; "Oui"; D1:D10; "<500")</code>
    </div>

    <h5>Utiliser la fonction MAX</h5>
    <p>La fonction <code>=MAX()</code> permet de trouver la valeur maximale dans une plage de cellules :</p>
    <ul>
        <li>Saisissez <code>=MAX(</code> dans une cellule, puis sélectionnez la plage de cellules dont vous souhaitez trouver la valeur maximale. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MAX(A1:A10)', this)">📋</span>
        <code>=MAX(A1:A10)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Trouver la valeur maximale dans les colonnes A et B :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MAX(MAX(A1:A10); MAX(B1:B10))', this)">📋</span>
        <code>=MAX(MAX(A1:A10); MAX(B1:B10))</code>
    </div>

    <h5>Utiliser la fonction MAX.SI.ENS</h5>
    <p>La fonction <code>=MAX.SI.ENS()</code> permet de trouver la valeur maximale dans une plage en fonction de plusieurs critères :</p>
    <ul>
        <li>La syntaxe est <code>=MAX.SI.ENS(max_plage; plage_critère1; critère1; [plage_critère2; critère2]; ...)</code>.</li>
        <li>Par exemple, pour trouver la valeur maximale dans la colonne C où les valeurs de la colonne A sont supérieures à 100 et les valeurs de la colonne B sont égales à "Oui" :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MAX.SI.ENS(C1:C10; A1:A10; &quot;>100&quot;; B1:B10; &quot;Oui&quot;)', this)">📋</span>
        <code>=MAX.SI.ENS(C1:C10; A1:A10; ">100"; B1:B10; "Oui")</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Trouver la valeur maximale dans la colonne C où les valeurs de la colonne A sont inférieures à 200, les valeurs de la colonne B sont égales à "Non", et les valeurs de la colonne D sont supérieures à 50 :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MAX.SI.ENS(C1:C10; A1:A10; &quot;<200&quot;; B1:B10; &quot;Non&quot;; D1:D10; &quot;>50&quot;)', this)">📋</span>
        <code>=MAX.SI.ENS(C1:C10; A1:A10; "<200"; B1:B10; "Non"; D1:D10; ">50")</code>
    </div>
    `
},

"traiter_dates": {
    "title": "Traiter des dates",
    "content": `
    <h4 id="traiter_des_dates" class="formule-subtheme sous-thematique">Traiter des dates</h4>

    <p>Excel offre plusieurs fonctions pour manipuler et extraire des informations à partir de dates et d'heures. Cette section vous guidera à travers les fonctions AUJOURD'HUI, MAINTENANT, JOUR, MOIS, ANNEE, JOURSEM, HEURE, MINUTE, et SECONDE pour vous aider à gérer efficacement les dates dans vos feuilles de calcul.</p>

    <h5>Utiliser la fonction AUJOURD'HUI</h5>
    <p>La fonction <code>=AUJOURD'HUI()</code> renvoie la date actuelle sans l'heure :</p>
    <ul>
        <li>Entrez <code>=AUJOURD'HUI()</code> dans une cellule pour afficher la date du jour.</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=AUJOURD\\'HUI()', this)">📋</span>
        <code>=AUJOURD'HUI()</code>
    </div>

    <h5>Utiliser la fonction MAINTENANT</h5>
    <p>La fonction <code>=MAINTENANT()</code> renvoie la date et l'heure actuelles :</p>
    <ul>
        <li>Entrez <code>=MAINTENANT()</code> dans une cellule pour afficher la date et l'heure courantes.</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MAINTENANT()', this)">📋</span>
        <code>=MAINTENANT()</code>
    </div>

    <h5>Utiliser la fonction JOUR</h5>
    <p>La fonction <code>=JOUR()</code> extrait le jour du mois à partir d'une date :</p>
    <ul>
        <li>Saisissez <code>=JOUR(date)</code> dans une cellule, où <code>date</code> est la cellule contenant la date ou une date au format <code>JJ/MM/AAAA</code>. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=JOUR(A1)', this)">📋</span>
        <code>=JOUR(A1)</code>
    </div>

    <h5>Utiliser la fonction MOIS</h5>
    <p>La fonction <code>=MOIS()</code> extrait le mois à partir d'une date :</p>
    <ul>
        <li>Saisissez <code>=MOIS(date)</code> dans une cellule, où <code>date</code> est la cellule contenant la date ou une date au format <code>JJ/MM/AAAA</code>. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MOIS(A1)', this)">📋</span>
        <code>=MOIS(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Calculer le mois courant et le mois précédent :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MOIS(MAINTENANT())-1', this)">📋</span>
        <code>=MOIS(MAINTENANT())-1</code>
    </div>

    <h5>Utiliser la fonction ANNEE</h5>
    <p>La fonction <code>=ANNEE()</code> extrait l'année à partir d'une date :</p>
    <ul>
        <li>Saisissez <code>=ANNEE(date)</code> dans une cellule, où <code>date</code> est la cellule contenant la date ou une date au format <code>JJ/MM/AAAA</code>. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=ANNEE(A1)', this)">📋</span>
        <code>=ANNEE(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Vérifier si une année est bissextile :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=SI(MOD(ANNEE(A1);4)=0; SI(MOD(ANNEE(A1);100)<>0; VRAI; MOD(ANNEE(A1);400)=0); FAUX)', this)">📋</span>
        <code>=SI(MOD(ANNEE(A1);4)=0; SI(MOD(ANNEE(A1);100)<>0; VRAI; MOD(ANNEE(A1);400)=0); FAUX)</code>
    </div>

    <h5>Utiliser la fonction JOURSEM</h5>
    <p>La fonction <code>=JOURSEM()</code> renvoie le jour de la semaine pour une date donnée :</p>
    <ul>
        <li>Saisissez <code>=JOURSEM(date; [type])</code> dans une cellule. Le paramètre <code>[type]</code> détermine le format du jour (1 pour dimanche, 2 pour lundi, etc.). Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=JOURSEM(A1; 2)', this)">📋</span>
        <code>=JOURSEM(A1; 2)</code>
    </div>

    <h5>Utiliser la fonction HEURE</h5>
    <p>La fonction <code>=HEURE()</code> extrait l'heure d'une date-heure :</p>
    <ul>
        <li>Saisissez <code>=HEURE(date_heure)</code> dans une cellule, où <code>date_heure</code> est la cellule contenant une date et une heure. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=HEURE(A1)', this)">📋</span>
        <code>=HEURE(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Calculer l'heure en format 24 heures à partir d'une heure au format texte (e.g., "2:30 PM") :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=HEURE(TEMPSVAL(&quot;2:30 PM&quot;))', this)">📋</span>
        <code>=HEURE(TEMPSVAL("2:30 PM"))</code>
    </div>

    <h5>Utiliser la fonction MINUTE</h5>
    <p>La fonction <code>=MINUTE()</code> extrait les minutes d'une date-heure :</p>
    <ul>
        <li>Saisissez <code>=MINUTE(date_heure)</code> dans une cellule, où <code>date_heure</code> est la cellule contenant une date et une heure. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MINUTE(A1)', this)">📋</span>
        <code>=MINUTE(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Extraire les minutes d'une heure au format texte (e.g., "14:45") :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=MINUTE(TEMPSVAL(&quot;14:45&quot;))', this)">📋</span>
        <code>=MINUTE(TEMPSVAL("14:45"))</code>
    </div>

    <h5>Utiliser la fonction SECONDE</h5>
    <p>La fonction <code>=SECONDE()</code> extrait les secondes d'une date-heure :</p>
    <ul>
        <li>Saisissez <code>=SECONDE(date_heure)</code> dans une cellule, où <code>date_heure</code> est la cellule contenant une date et une heure. Par exemple :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=SECONDE(A1)', this)">📋</span>
        <code>=SECONDE(A1)</code>
    </div>
    <p>Un exemple plus complexe pourrait être :</p>
    <ul>
        <li>Extraire les secondes d'un temps au format texte (e.g., "15:20:35") :</li>
    </ul>
    <div class="formula-box">
        <span class="copy-button show" onclick="copyToClipboard('=SECONDE(TEMPSVAL(&quot;15:20:35&quot;))', this)">📋</span>
        <code>=SECONDE(TEMPSVAL("15:20:35"))</code>
    </div>
    `
},

"utiliser-operateurs-logiques": {
    "title": "Utiliser des opérateurs logiques",
    "content": `
<h4 id="utiliser_des_operateurs_logiques" class="formule-subtheme sous-thematique">Utiliser des opérateurs logiques</h4>

<p>Les opérateurs logiques dans Excel permettent de créer des formules conditionnelles pour effectuer des actions basées sur des critères spécifiques. Cette section couvre les fonctions SI, ET, OU, ESTVIDE, et SIERREUR pour vous aider à intégrer des conditions et gérer les erreurs dans vos formules.</p>

<h5>Utiliser la fonction SI</h5>
<p>La fonction <code>=SI()</code> évalue une condition et renvoie une valeur si la condition est vraie et une autre valeur si elle est fausse :</p>
<ul>
    <li>La syntaxe est <code>=SI(condition; valeur_si_vrai; valeur_si_faux)</code>.</li>
    <li>Par exemple, pour afficher "Pass" si la valeur en A1 est supérieure à 10, et "Fail" sinon :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=SI(A1 > 10; &quot;Pass&quot;; &quot;Fail&quot;)', this)">📋</span>
    <code>=SI(A1 > 10; "Pass"; "Fail")</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Affiche "Bon" si la valeur en A1 est supérieure à 100, "Moyen" si elle est entre 50 et 100, et "Faible" si elle est inférieure à 50 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=SI(A1 > 100; &quot;Bon&quot;; SI(A1 >= 50; &quot;Moyen&quot;; &quot;Faible&quot;))', this)">📋</span>
    <code>=SI(A1 > 100; &quot;Bon&quot;; SI(A1 >= 50; &quot;Moyen&quot;; &quot;Faible&quot;))</code>
</div>

<h5>Utiliser la fonction ET</h5>
<p>La fonction <code>=ET()</code> vérifie si toutes les conditions spécifiées sont vraies :</p>
<ul>
    <li>La syntaxe est <code>=ET(condition1; condition2; ...)</code>.</li>
    <li>Par exemple, pour vérifier si la valeur en A1 est supérieure à 10 et en B1 est inférieure à 20 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=ET(A1 > 10; B1 < 20)', this)">📋</span>
    <code>=ET(A1 > 10; B1 < 20)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Vérifie si la valeur en A1 est supérieure à 50, la valeur en B1 est inférieure à 100, et la valeur en C1 est égale à "OK" :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=ET(A1 > 50; B1 < 100; C1 = &quot;OK&quot;)', this)">📋</span>
    <code>=ET(A1 > 50; B1 < 100; C1 = "OK")</code>
</div>

<h5>Utiliser la fonction OU</h5>
<p>La fonction <code>=OU()</code> vérifie si au moins une des conditions spécifiées est vraie :</p>
<ul>
    <li>La syntaxe est <code>=OU(condition1; condition2; ...)</code>.</li>
    <li>Par exemple, pour vérifier si la valeur en A1 est inférieure à 5 ou en B1 est supérieure à 10 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=OU(A1 < 5; B1 > 10)', this)">📋</span>
    <code>=OU(A1 < 5; B1 > 10)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Vérifie si la valeur en A1 est inférieure à 5, la valeur en B1 est supérieure à 10, ou la cellule C1 contient le texte "Urgent" :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=OU(A1 < 5; B1 > 10; C1 = &quot;Urgent&quot;)', this)">📋</span>
    <code>=OU(A1 < 5; B1 > 10; C1 = "Urgent")</code>
</div>

<h5>Utiliser la fonction ESTVIDE</h5>
<p>La fonction <code>=ESTVIDE()</code> vérifie si une cellule est vide :</p>
<ul>
    <li>La syntaxe est <code>=ESTVIDE(cellule)</code>.</li>
    <li>Par exemple, pour vérifier si la cellule A1 est vide :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=ESTVIDE(A1)', this)">📋</span>
    <code>=ESTVIDE(A1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Vérifie si les cellules A1 et B1 sont toutes les deux vides :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=ET(ESTVIDE(A1); ESTVIDE(B1))', this)">📋</span>
    <code>=ET(ESTVIDE(A1); ESTVIDE(B1))</code>
</div>

<h5>Utiliser la fonction SIERREUR</h5>
<p>La fonction <code>=SIERREUR()</code> renvoie une valeur spécifiée si une formule génère une erreur, sinon elle renvoie le résultat de la formule :</p>
<ul>
    <li>La syntaxe est <code>=SIERREUR(formule; valeur_si_erreur)</code>.</li>
    <li>Par exemple, pour afficher 0 si une division en A1/B1 génère une erreur :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=SIERREUR(A1/B1; 0)', this)">📋</span>
    <code>=SIERREUR(A1/B1; 0)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Affiche "Erreur" si une recherche VLOOKUP en A1 génère une erreur, sinon affiche le résultat :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=SIERREUR(RECHERCHEV(A1; B1:C10; 2; FAUX); &quot;Erreur&quot;)', this)">📋</span>
    <code>=SIERREUR(RECHERCHEV(A1; B1:C10; 2; FAUX); "Erreur")</code>
</div>
    `
},

"utiliser-logique-position": {
    "title": "Utiliser la logique de position",
    "content": `
<h4 id="utiliser_la_logique_de_position" class="formule-subtheme sous-thematique">Utiliser la logique de position</h4>

<p>Les fonctions de logique de position dans Excel permettent de manipuler et d'extraire des parties spécifiques de texte ou de trouver des informations à l'intérieur des chaînes de caractères. Cette section couvre les fonctions GAUCHE, DROITE, TROUVE, et CONCATENER pour vous aider à travailler efficacement avec du texte.</p>

<h5>Utiliser la fonction GAUCHE</h5>
<p>La fonction <code>=GAUCHE()</code> extrait un nombre spécifié de caractères à partir du début d'une chaîne de texte :</p>
<ul>
    <li>La syntaxe est <code>=GAUCHE(texte; [nombre_de_caractères])</code>.</li>
    <li>Par exemple, pour extraire les 5 premiers caractères de la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=GAUCHE(A1; 5)', this)">📋</span>
    <code>=GAUCHE(A1; 5)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Extraire les 3 premiers caractères du texte après avoir trouvé le caractère "-" dans la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=GAUCHE(DROITE(A1; NBCAR(A1) - CHERCHE(&quot;-&quot;; A1)); 3)', this)">📋</span>
    <code>=GAUCHE(DROITE(A1; NBCAR(A1) - CHERCHE("-"; A1)); 3)</code>
</div>

<h5>Utiliser la fonction DROITE</h5>
<p>La fonction <code>=DROITE()</code> extrait un nombre spécifié de caractères à partir de la fin d'une chaîne de texte :</p>
<ul>
    <li>La syntaxe est <code>=DROITE(texte; [nombre_de_caractères])</code>.</li>
    <li>Par exemple, pour extraire les 4 derniers caractères de la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=DROITE(A1; 4)', this)">📋</span>
    <code>=DROITE(A1; 4)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Extraire les caractères après le dernier espace dans la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=DROITE(A1; NBCAR(A1) - TROUVE(&quot; &quot;; A1; TROUVE(&quot; &quot;; A1) + 1))', this)">📋</span>
    <code>=DROITE(A1; NBCAR(A1) - TROUVE(" "; A1; TROUVE(" "; A1) + 1))</code>
</div>

<h5>Utiliser la fonction TROUVE</h5>
<p>La fonction <code>=TROUVE()</code> renvoie la position d'une chaîne de texte à l'intérieur d'une autre chaîne de texte :</p>
<ul>
    <li>La syntaxe est <code>=TROUVE(chaîne_cherchée; texte; [numéro_de_départ])</code>.</li>
    <li>Par exemple, pour trouver la position du texte "ABC" dans la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=TROUVE(&quot;ABC&quot;; A1)', this)">📋</span>
    <code>=TROUVE("ABC"; A1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Trouver la position du premier "-" dans une cellule contenant plusieurs mots séparés par des tirets :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=TROUVE(&quot;-&quot;; A1)', this)">📋</span>
    <code>=TROUVE("-"; A1)</code>
</div>

<h5>Utiliser la fonction CONCATENER</h5>
<p>La fonction <code>=CONCATENER()</code> combine plusieurs chaînes de texte en une seule chaîne :</p>
<ul>
    <li>La syntaxe est <code>=CONCATENER(texte1; [texte2]; ...)</code>.</li>
    <li>Par exemple, pour combiner les textes des cellules A1 et B1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=CONCATENER(A1; &quot; &quot;; B1)', this)">📋</span>
    <code>=CONCATENER(A1; " "; B1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Combiner le prénom (A1), le nom (B1) et l'année de naissance (C1) avec un format spécifique :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=CONCATENER(A1; &quot; &quot;; B1; &quot;, né en &quot;; C1)', this)">📋</span>
    <code>=CONCATENER(A1; " "; B1; ", né en "; C1)</code>
</div>
    `
},

"traiter-texte": {
    "title": "Traiter du texte",
    "content": `
<h4 id="traiter_du_texte" class="formule-subtheme sous-thematique">Traiter du texte</h4>

<p>Les fonctions de traitement du texte dans Excel vous permettent de manipuler et de formater des chaînes de caractères de différentes manières. Cette section couvre les fonctions MINUSCULE, MAJUSCULE, NBCAR, REMPLACER, et EXACT pour vous aider à gérer le texte dans vos feuilles de calcul.</p>

<h5>Utiliser la fonction MINUSCULE</h5>
<p>La fonction <code>=MINUSCULE()</code> convertit tous les caractères d'une chaîne de texte en minuscules :</p>
<ul>
    <li>La syntaxe est <code>=MINUSCULE(texte)</code>.</li>
    <li>Par exemple, pour convertir le texte de la cellule A1 en minuscules :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=MINUSCULE(A1)', this)">📋</span>
    <code>=MINUSCULE(A1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Convertir les caractères de texte après avoir extrait une partie spécifique de la chaîne :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=MINUSCULE(DROITE(A1; NBCAR(A1) - TROUVE(&quot; &quot;; A1)))', this)">📋</span>
    <code>=MINUSCULE(DROITE(A1; NBCAR(A1) - TROUVE(" "; A1)))</code>
</div>

<h5>Utiliser la fonction MAJUSCULE</h5>
<p>La fonction <code>=MAJUSCULE()</code> convertit tous les caractères d'une chaîne de texte en majuscules :</p>
<ul>
    <li>La syntaxe est <code>=MAJUSCULE(texte)</code>.</li>
    <li>Par exemple, pour convertir le texte de la cellule A1 en majuscules :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=MAJUSCULE(A1)', this)">📋</span>
    <code>=MAJUSCULE(A1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Convertir en majuscules le texte extrait d'une cellule après avoir trouvé un caractère spécifique :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=MAJUSCULE(GAUCHE(A1; TROUVE(&quot;-&quot;; A1) - 1))', this)">📋</span>
    <code>=MAJUSCULE(GAUCHE(A1; TROUVE("-"; A1) - 1))</code>
</div>

<h5>Utiliser la fonction NBCAR</h5>
<p>La fonction <code>=NBCAR()</code> renvoie le nombre de caractères dans une chaîne de texte :</p>
<ul>
    <li>La syntaxe est <code>=NBCAR(texte)</code>.</li>
    <li>Par exemple, pour obtenir le nombre de caractères dans la cellule A1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=NBCAR(A1)', this)">📋</span>
    <code>=NBCAR(A1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Compter le nombre de caractères après avoir extrait une sous-chaîne à partir d'un certain point :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=NBCAR(DROITE(A1; NBCAR(A1) - TROUVE(&quot; &quot;; A1)))', this)">📋</span>
    <code>=NBCAR(DROITE(A1; NBCAR(A1) - TROUVE(" "; A1)))</code>
</div>

<h5>Utiliser la fonction REMPLACER</h5>
<p>La fonction <code>=REMPLACER()</code> remplace une partie spécifique d'une chaîne de texte par une autre chaîne :</p>
<ul>
    <li>La syntaxe est <code>=REMPLACER(texte; début; nombre_de_caractères; nouveau_texte)</code>.</li>
    <li>Par exemple, pour remplacer les 5 premiers caractères de la cellule A1 par "XYZ" :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=REMPLACER(A1; 1; 5; &quot;XYZ&quot;)', this)">📋</span>
    <code>=REMPLACER(A1; 1; 5; "XYZ")</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Remplacer tout le texte après un certain caractère avec une nouvelle chaîne :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=REMPLACER(A1; TROUVE(&quot;-&quot;; A1); NBCAR(A1) - TROUVE(&quot;-&quot;; A1) + 1; &quot;Nouveau Texte&quot;)', this)">📋</span>
    <code>=REMPLACER(A1; TROUVE("-"; A1); NBCAR(A1) - TROUVE("-"; A1) + 1; "Nouveau Texte")</code>
</div>

<h5>Utiliser la fonction EXACT</h5>
<p>La fonction <code>=EXACT()</code> compare deux chaînes de texte et renvoie VRAI si elles sont exactement identiques, y compris la casse :</p>
<ul>
    <li>La syntaxe est <code>=EXACT(texte1; texte2)</code>.</li>
    <li>Par exemple, pour comparer les textes dans les cellules A1 et B1 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=EXACT(A1; B1)', this)">📋</span>
    <code>=EXACT(A1; B1)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Comparer un texte modifié avec le texte original :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=EXACT(MAJUSCULE(A1); MINUSCULE(B1))', this)">📋</span>
    <code>=EXACT(MAJUSCULE(A1); MINUSCULE(B1))</code>
</div>
    `
},

"recherche-valeur": {
    "title": "Faire des recherches de valeurs",
    "content": `
<h4 id="faire_des_recherches_de_valeurs" class="formule-subtheme sous-thematique">Faire des recherches de valeurs</h4>

<p>Les fonctions de recherche dans Excel permettent de trouver des valeurs spécifiques dans vos données. Cette section couvre les fonctions RECHERCHEV, RECHERCHH, RECHERCHX, et INDEX pour vous aider à effectuer des recherches précises dans vos feuilles de calcul.</p>

<h5>Utiliser la fonction RECHERCHEV</h5>
<p>La fonction <code>=RECHERCHEV()</code> recherche une valeur dans la première colonne d'une plage et renvoie une valeur dans la même ligne d'une colonne spécifiée :</p>
<ul>
    <li>La syntaxe est <code>=RECHERCHEV(valeur_recherchée; table_array; col_index_num; [valeur_proche])</code>.</li>
    <li>Par exemple, pour rechercher la valeur dans la cellule A1 dans la première colonne de la plage B1:C10 et retourner la valeur correspondante de la colonne 2 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHEV(A1; B1:C10; 2; FAUX)', this)">📋</span>
    <code>=RECHERCHEV(A1; B1:C10; 2; FAUX)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Rechercher une valeur dans une plage et obtenir la valeur dans une colonne dont l'index est défini par une cellule :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHEV(A1; B1:D10; B11; FAUX)', this)">📋</span>
    <code>=RECHERCHEV(A1; B1:D10; B11; FAUX)</code>
</div>

<h5>Utiliser la fonction RECHERCHH</h5>
<p>La fonction <code>=RECHERCHH()</code> recherche une valeur dans la première ligne d'une plage et renvoie une valeur dans la même colonne d'une ligne spécifiée :</p>
<ul>
    <li>La syntaxe est <code>=RECHERCHH(valeur_recherchée; table_array; row_index_num; [valeur_proche])</code>.</li>
    <li>Par exemple, pour rechercher la valeur dans la cellule A1 dans la première ligne de la plage B1:D10 et retourner la valeur correspondante de la ligne 3 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHH(A1; B1:D10; 3; FAUX)', this)">📋</span>
    <code>=RECHERCHH(A1; B1:D10; 3; FAUX)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Rechercher une valeur dans une plage et obtenir la valeur dans une ligne dont l'index est défini par une cellule :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHH(A1; B1:D10; C1; FAUX)', this)">📋</span>
    <code>=RECHERCHH(A1; B1:D10; C1; FAUX)</code>
</div>

<h5>Utiliser la fonction RECHERCHX</h5>
<p>La fonction <code>=RECHERCHX()</code> est une fonction de recherche avancée qui peut remplacer RECHERCHEV et RECHERCHH. Elle recherche une valeur dans une plage et renvoie une valeur correspondante d'une autre plage :</p>
<ul>
    <li>La syntaxe est <code>=RECHERCHX(valeur_recherchée; plage_recherche; plage_retour; [valeur_si_non_trouvé])</code>.</li>
    <li>Par exemple, pour rechercher la valeur dans la cellule A1 dans la plage B1:B10 et retourner la valeur correspondante de la plage C1:C10 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHX(A1; B1:B10; C1:C10)', this)">📋</span>
    <code>=RECHERCHX(A1; B1:B10; C1:C10)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Rechercher une valeur et retourner un résultat spécifique si la valeur n'est pas trouvée :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=RECHERCHX(A1; B1:B10; C1:C10; &quot;Non Trouvé&quot;)', this)">📋</span>
    <code>=RECHERCHX(A1; B1:B10; C1:C10; "Non Trouvé")</code>
</div>

<h5>Utiliser la fonction INDEX</h5>
<p>La fonction <code>=INDEX()</code> renvoie la valeur d'une cellule dans une plage en fonction des numéros de ligne et de colonne spécifiés :</p>
<ul>
    <li>La syntaxe est <code>=INDEX(plage; no_ligne; [no_colonne])</code>.</li>
    <li>Par exemple, pour obtenir la valeur à l'intersection de la 2ème ligne et 3ème colonne de la plage A1:C10 :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=INDEX(A1:C10; 2; 3)', this)">📋</span>
    <code>=INDEX(A1:C10; 2; 3)</code>
</div>
<p>Un exemple plus complexe pourrait être :</p>
<ul>
    <li>Obtenir une valeur en fonction d'un critère de ligne dynamique, où le numéro de ligne est déterminé par une autre formule :</li>
</ul>
<div class="formula-box">
    <span class="copy-button show" onclick="copyToClipboard('=INDEX(A1:C10; EQUIV(A1; A1:A10; 0); 2)', this)">📋</span>
    <code>=INDEX(A1:C10; EQUIV(A1; A1:A10; 0); 2)</code>
</div>

<p>Ces fonctions vous permettent de rechercher et de récupérer des données de manière flexible dans vos feuilles de calcul Excel.</p>
    `
},

};
