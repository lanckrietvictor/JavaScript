/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
	return texte.length;
}
var remplaceECar = function (texte) {
	return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
	return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
	return texte.charAt(4);
}
var afficher9Car = function (texte) {
	return texte.substring(0, 9);
}
var majusculeString = function (texte) {
	return texte.toUpperCase();
}
var minusculeString = function (texte) {
	return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
	return texte.trim();
}
var IsString = function (texte) {
	return (typeof texte==="string");
}

var AfficherExtensionString = function (texte) {
	return texte.substring(texte.indexOf(".")+1);
}
var NombreEspaceString = function (texte) {
	return texte.match(/ /gi).length;
}
var InverseString = function (texte) {
	var split = texte.split("");
	var reverse = split.reverse();
	var joint = reverse.join("");
	return joint;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
	return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
	return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
	var n = array.length;
	var myArray = [];
	var i = 0;

	while (i<n) {
		myArray.push(Math.abs(array[i]));
		i++;
	}

	return myArray;
}
var sufaceCercle = function (rayon) {
	return Math.round(3.1415*Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
	return Math.sqrt(Math.pow(ab, 2)+Math.pow(ac, 2));
}
var calculIMC = function (poids, taille) {
	return Math.round((poids/Math.pow(taille, 2))*100)/100;
}
