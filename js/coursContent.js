export const coursContent = {
    "prise-en-main": {
        title: "Prise en main",
        content: `

        <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

            <h3>Qu'est-ce qu'Excel ?</h3>
            <p>Microsoft Excel est un logiciel de tableur faisant partie de la suite Microsoft Office. Il permet de manipuler des données sous forme de tableaux, de réaliser des calculs complexes, de créer des graphiques, et bien plus encore. Excel est largement utilisé dans divers domaines tels que la finance, le marketing, la gestion de projet et la recherche.</p>

            <h4>Interface Utilisateur</h4>
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
            <h4>Saisie et Édition des Données</h4>
            
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

            <h4>Formatage des cellules</h4>
            
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

    
};