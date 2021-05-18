// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log

let h1 = document.getElementsByTagName('h1');
console.log(h1);

let p = document.getElementsByTagName("p");

let h3 = document.getElementsByTagName("h3");
console.log(h3);
let premierH3 = h3[0];
let deuxiemeH3 = h3[1];
let troisiemeH3 = h3[2];
console.log(premierH3);
console.log(deuxiemeH3);
console.log(troisiemeH3);

let secondP = p[1]
console.log(secondP);
let li = document.getElementsByTagName("li");
let troisiemeLi = li[2];
console.log(troisiemeLi);