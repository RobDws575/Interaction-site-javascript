let button = document.querySelector("#button");
button.addEventListener("click", function () {
    let menuDeroulant = document.querySelector("#menu-deroulant");
    menuDeroulant.classList.toggle("open");
});





function validerFormulaire() {
    // Recupere l'élément qui affiche le mess d'erreur
    var messagesErreur = document.getElementById("messagesErreur");
    // Efface les mess d'erreurs si validé 
    messagesErreur.innerHTML = "";

    // recupère les valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("email").value;
    var codePostal = document.getElementById("codePostal").value;
    var pays = document.getElementById("pays").value;
    var motDePasse = document.getElementById("motDePasse").value;
    var confirmationMotDePasse = document.getElementById("confirmationMotDePasse").value;
    var conditions = document.getElementById("conditions").checked;

    // Verifie la longueur des champs
    if (nom.length < 2 || prenom.length < 2 || adresse.length < 2 || ville.length < 2) {
        afficherErreur("Les champs Nom, Prénom, Adresse et Ville doivent avoir au moins 2 caractères.");
    }

    // Verifie si @ présent
    if (!email.includes('@')) {
        afficherErreur("L'adresse email doit contenir un '@'.");
    }

    // Verifie la longueur du code postal
    if (codePostal.length !== 5) {
        afficherErreur("Le code postal doit faire 5 caractères.");
    }

    // Verifie si il ya un pays
    if (pays === "") {
        afficherErreur("Le champ Pays est obligatoire.");
    }

    // Verifie la longueur + les charactère du mdp
    if (motDePasse.length < 6 || !motDePasse.match(/^(?=.*[A-Za-z])(?=.*\d).+$/)) {
        afficherErreur("Le mot de passe doit faire au moins 6 caractères et contenir des caractères alphanumériques.");
    }

    // Verifie si mdp et confiramtion sont les meme
    if (motDePasse !== confirmationMotDePasse) {
        afficherErreur("Le mot de passe et la confirmation du mot de passe ne correspondent pas.");
    }

    // Verifie si la case conditions d'utilisation est coché
    if (!conditions) {
        afficherErreur("Veuillez accepter les conditions d'utilisation.");
    }

    // Masque formulaire et affiche message de validation si aucun message d'erreurs
    if (messagesErreur.innerHTML === "") {
        var formulaire = document.getElementById("inscriptionForm");
        formulaire.style.display = "none";

        var messageConfirmation = document.getElementById("messageConfirmation");
        messageConfirmation.style.display = "block";
    }
}

// Affiche les messages d'erreurs 
function afficherErreur(message) {
    var messagesErreur = document.getElementById("messagesErreur");
    var erreurDiv = document.createElement("div");
    erreurDiv.setAttribute("id", "error");
    erreurDiv.textContent = message;
    messagesErreur.appendChild(erreurDiv);
}
