let numero=0;
// tant que la valeur de la variable est plus petit que 9 
while(numero < 9 ){
    console.log("passage ", numero, "======");
    console.log("numero avant l'ajout de +3, le numero est:", numero);
    numero= numero+ 3;

    console.log("numero aprés l'ajout de +3, numero est:", numero);
}





for (let compteur= 0; compteur < 3; compteur++){

    console.log("le compteur est: "+ compteur);
}

//utiliser la boucle FOR manipuler un tableau 

let tableauEleves = [ "" ]

console.log("==avant la boucle for==");
for (let i = 0; i < tableauEleves.length;i++){
    console.log(tableauEleves[i]);
}
// length doone la taille (le nombre d'élément qui sont dans le tableau )