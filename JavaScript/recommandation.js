
// fonction qui recommande un film en fonction de l'age fourni en paramètre 
function recommanderFilm(age) {

// si l'age est inférieure à 13 retoune "Le Roi Lion"
    if (age < 13) {

        return "Le Roi Lion";
// si l'age est compris entre 14 et 17 inclus retourne "Titanic"
    } else if (age > 13 && age < 18) {

        return "Titanic";
// pour les plus de 18 retourne "Rambo 2"
    } else {

        return "Rambo 2"; 

    }

}
// on demande à l'utilisateur de saisir son âge via une boite de dialogue et stocke la valeur saisie dans la variable ageUtilisateur .
let ageUtilisateur = prompt("Veuillez entrer votre âge :");
// (prompt demarré une boite de dialogue)



// on vérifie si ageUtilisateur est un nombre valide (non NaN) et si ce n'est pas une chaine vide après avoir retiré les espaces 
if (!isNaN(ageUtilisateur) && ageUtilisateur.trim() !== "") {
//`isNaN` vérifie si une valeur n'est pas une nombre 
// si les conditions sont remplies appelle la fonction recommanderFilm avec l'age converti en entier 
    let filmRecommande = recommanderFilm(parseInt(ageUtilisateur));

// affiche le film recommander dans la console 
    console.log("Nous vous recommandons : " + filmRecommande);
    alert("Nous vous recommandons : " + filmRecommande);

} // si les conditions précedentes ne sont pas remplie affiche un message d'erreur dans la console demandant un age valide 
 else {

    console.log("Veuillez entrer un âge valide.");

}

