

export const coursContent = {
    "prise-en-main": {
        "title": "Prise en main",
        "content": `
            <h4>Qu'est-ce qu'Excel ?</h4>
            <p>Microsoft Excel est un logiciel de tableur faisant partie de la suite Microsoft Office. Il permet de manipuler des données sous forme de tableaux, de réaliser des calculs complexes, de créer des graphiques, et bien plus encore. Excel est largement utilisé dans divers domaines tels que la finance, le marketing, la gestion de projet et la recherche.</p>

            <img src="/assets/development-animate (1).svg" alt="Development" id="developmentImage">

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


            <h2>Manipulation de Base</h2>
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

            <p>Ce cours couvre les bases essentielles d'Excel, incluant la saisie de données, la modification, la navigation, et le formatage des cellules. Ces compétences fondamentales vous permettront de commencer à utiliser Excel de manière efficace pour organiser et présenter vos données. Pratiquez régulièrement pour renforcer vos compétences et explorez les options de formatage pour rendre vos feuilles de calcul plus attrayantes et fonctionnelles.</p>
        `
    },

    "format-embellissement": {
        "title": "Format - Embellissement",
        "content": `
            <h4>Formatage des cellules</h4>
            <p>lorem10</p>
            <img src="/assets/toto.svg" alt="Toto Image" id="totoImage">
        `
    }

};

