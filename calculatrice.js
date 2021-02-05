let choix;
let selection;
let resultat;
let nbA;
let nbB;

let restart = false;

do {

    //Fonction additionner et retourne le résultat
    function addition(na, nb) {
        return na + nb;
    }

    //Fonction soustraction et retourne le résultat
    function soustraction(na, nb) {
        return na - nb;
    }

    //Fonction multiplier et retourne le résultat
    function multiplication(na, nb) {
        return na * nb;
    }

    //Fonction Division et retourne le résultat
    function division(na, nb) {
        if(nb == 0) {
            throw new Error("Impossible de diviser par 0 !");
        }
        return na / nb;
    }

    do {
        // Proposer plusieurs choix et valider à l'aide d'un numéro, retour à la ligne par \n ou \n\n
        choix = Number(prompt("\nMode calculatrice\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division"));
            
        if(choix == 1) {
            selection = "additionner";
        }
        if (choix == 2) {
            selection = "soustraire";
        }
        if (choix == 3) {
            selection = "multiplier";
        }
        if (choix == 4) {
            selection = "diviser";
        }
    
    } 
    // tant que le choix est différent de 1, 2, 3, 4
    while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

    do {
        // Number permet de convertir en nombre
        nbA = Number(prompt("1er nombre à " + selection + " ?"));
        nbB = Number(prompt("2ème nombre à " + selection + " ?"));
    }
    // isNaN permet de vérifier que c'est un nombre
    while(isNaN(nbA) || isNaN(nbB))


    try {

        switch (choix) {

            case 1 :
                resultat = addition(nbA, nbB);
                break;

            case 2 :
                resultat = soustraction(nbA, nbB);
                break;

            case 3 :
                resultat = multiplication(nbA, nbB);
                break;

            case 4:
                resultat = division(nbA, nbB);
                break;

                default:
                    throw new Error("Une erruer est survenu.");
        }

        // affiche le résultat
        alert("Voici le résultat = " + resultat )
    }
    catch(error) {
        alert(error); // affiche la variable avec le message récupéré
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?");

} while(restart)
