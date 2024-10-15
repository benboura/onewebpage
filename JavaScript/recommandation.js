function recommanderFilm(age) {

    if (age < 13) {

        return "Le Roi Lion";

    } else if (age >= 13 & age < 18) {

        return "Titanic";

    } else {

        return "Rambo 2"; 

    }

}
// on demande à l'utilisateur de saisir son âge

let ageUtilisateur = prompt("Veuillez entrer votre âge :");



// Vérifie si l'entrée est un nombre valide

if (!isNaN(ageUtilisateur) & ageUtilisateur.trim() !== "") {

    let filmRecommande = recommanderFilm(parseInt(ageUtilisateur));

    console.log("Nous vous recommandons : " + filmRecommande);

} else {

    console.log("Veuillez entrer un âge valide.");

}


