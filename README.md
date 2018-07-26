# formulaire
exo Jquery
Créez un générateur de formulaires
Consigne de l'activité
Dans cette activité, vous allez définir une IHM (Interface Homme Machine) pour faciliter la création de formulaires de saisie. Le code HTML est fourni. Votre tâche consistera à donner vie aux boutons présents dans la balise <div> de droite en ajoutant du code jQuery. Ainsi, l’utilisateur pourra créer des formulaires personnalisés en cliquant sur les boutons Label, Zone de texte et Bouton, et en fournissant les renseignements demandés.

Et maintenant, c'est à vous !

Je vous propose de partir de ce code.

Rien de bien compliqué là-dedans : la page se divise en deux zones verticales colorées en jaune pâle et en bleu pâle. La zone située à gauche occupe 70% de la largeur de la page et la zone située à droite les 30% restants :



Le but de cette application est de construire des formulaires contenant des labels, des zones de texte et des boutons en utilisant les boutons affichés dans la partie droite de l'écran.

Pour l'instant, les trois boutons n'ont aucun effet. À vous d'ajouter du code jQuery pour donner vie aux boutons.

1. Activez le bouton label
Un clic sur le bouton Label affiche les éléments suivants dans la partie droite de l'écran :



Lorsque l'utilisateur clique sur le bouton OK, le texte saisi dans la zone de texte s'affiche dans la partie gauche de l'écran à l'intérieur d'un <span></span> :

<span>Nom</span>
Et les contrôles ajoutés dans la partie droite s'effacent pour ne laisser visible que le texte "Utilisez ces boutons pour créer votre formulaire" et les boutons Label, Zone de texte et Bouton :



2. Activez les boutons Zone de texte et Bouton
Les deux autres boutons ont un comportement similaire.

Le bouton Zone de texte demande l'id de la zone de texte :


Et insère un champ input de type text lorsque le bouton OK est cliqué :

<input id="nom" type="text">
Enfin, le dernier bouton demande le label du bouton à insérer :


Et insère un <button></button> lorsque le bouton OK est cliqué :

<button>Valider</button> 
3. Générez le formulaire
Insérez le code jQuery et CSS nécessaire pour réagir aux clics sur les boutons et insérer les contrôles dans la partie gauche de la page. Une fois le code mis en place, générez le formulaire suivant :



4. Votre code
Prêtez attention à votre code source et à sa structure. Votre code doit être lisible et bien indenté. Respectez les bonnes pratiques de développement (insertion de jQuery, utilisation de CSS, injection des éléments dans les div à l'aide de méthodes, etc.).

Voici quelques conseils pour vous mettre sur la voie :

Utilisez les méthodes append() et after() pour injecter du contenu dans les div. À vous de trouver quelle méthode utiliser pour le premier div et le deuxième.
Pour faire disparaître le contenu affiché dans le deuxième div, insérez ce contenu dans un conteneur.
Insérez un code CSS dans le head pour séparer entre eux les span, button et input.
